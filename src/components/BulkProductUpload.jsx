import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { FiUpload, FiDownload, FiCheck, FiX, FiFileText, FiAlertCircle } from 'react-icons/fi';
import { UserContext } from '../store/UserContext';
import { useToast } from '../store/ToastContext';
import { parseCSV, readTextFile, validateExcelData, transformProductData, downloadCSVTemplate } from '../utils/excelParser';
import { productService } from '../utils/firebase';
import { requireAdmin } from '../utils/adminUtils';
import { organizeImagesByFolder, processBulkProductImages, analyzeImageStructure } from '../utils/imageMatcher';

const BulkProductUpload = ({ onClose, onSuccess }) => {
  const [file, setFile] = useState(null);
  const [, setImageFiles] = useState(null);
  const [imageMap, setImageMap] = useState({});
  const [imageStructure, setImageStructure] = useState(null);
  const [matchingType, setMatchingType] = useState('folder');
  const [parsedData, setParsedData] = useState([]);
  const [validationErrors, setValidationErrors] = useState([]);
  const [validationWarnings, setValidationWarnings] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [step, setStep] = useState(1); // 1: 파일 선택, 2: 데이터 검토, 3: 업로드 완료
  
  const { user } = useContext(UserContext);
  const { addToast, showDetailedError } = useToast();

  // CSV 파일 선택 핸들러
  const handleFileSelect = async (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    // 파일 확장자 검사
    const fileName = selectedFile.name.toLowerCase();
    if (!fileName.endsWith('.csv') && !fileName.endsWith('.txt')) {
      addToast('CSV 또는 TXT 파일만 업로드 가능합니다.', 'error');
      return;
    }

    setFile(selectedFile);
    setIsProcessing(true);

    try {
      // 파일 읽기
      const fileContent = await readTextFile(selectedFile);
      
      // CSV 파싱
      const data = parseCSV(fileContent);
      
      if (data.length === 0) {
        throw new Error('파일에서 유효한 데이터를 찾을 수 없습니다.');
      }

      // 데이터 검증
      const validation = validateExcelData(data);
      
      setValidationErrors(validation.errors || []);
      setValidationWarnings(validation.warnings || []);
      
      if (!validation.isValid) {
        addToast(`${validation.errors.length}개의 오류가 발견되었습니다.`, 'warning');
      } else {
        addToast(`${data.length}개의 상품 데이터를 성공적으로 읽었습니다.`, 'success');
        if (validation.warnings && validation.warnings.length > 0) {
          addToast(`${validation.warnings.length}개의 경고가 있습니다. 자동으로 수정되었습니다.`, 'info');
        }
      }

      setParsedData(data);
      setStep(2);
    } catch (error) {
      console.error('파일 처리 오류:', error);
      showDetailedError(error, '파일 처리');
    } finally {
      setIsProcessing(false);
    }
  };

  // 이미지 폴더 선택 핸들러
  const handleImageFolderSelect = (e) => {
    const selectedFiles = e.target.files;
    if (!selectedFiles || selectedFiles.length === 0) return;

    setImageFiles(selectedFiles);
    
    try {
      // 이미지 파일들을 폴더별로 정리
      const organizedImages = organizeImagesByFolder(selectedFiles);
      setImageMap(organizedImages);
      
      // 폴더 구조 분석
      const structure = analyzeImageStructure(selectedFiles);
      setImageStructure(structure);
      
      console.log('📁 이미지 폴더 구조:', structure);
      addToast(`${structure.totalImages}개의 이미지 파일을 ${Object.keys(organizedImages).length}개 폴더에서 찾았습니다.`, 'success');
    } catch (error) {
      console.error('이미지 폴더 분석 실패:', error);
      addToast('이미지 폴더 분석에 실패했습니다.', 'error');
    }
  };

  // 대량 업로드 실행
  const handleBulkUpload = async () => {
    try {
      // 관리자 권한 확인
      requireAdmin(user, '대량 상품 등록');
    } catch (error) {
      addToast(error.message, 'error');
      return;
    }

    if (!user?.uid) {
      addToast('로그인이 필요합니다.', 'error');
      return;
    }

    if (validationErrors.length > 0) {
      addToast('오류를 먼저 수정해주세요.', 'warning');
      return;
    }

    setIsProcessing(true);
    setUploadProgress(0);

    try {
      // 데이터 변환
      const transformedData = transformProductData(parsedData, user);
      
      // 이미지가 있는 경우 이미지 처리
      let productsWithImages = transformedData;
      if (Object.keys(imageMap).length > 0) {
        console.log('🖼️ 이미지 매칭 및 업로드 시작...');
        productsWithImages = await processBulkProductImages(
          transformedData, 
          imageMap, 
          user.uid, 
          matchingType
        );
        console.log('✅ 이미지 매칭 및 업로드 완료');
      }
      
      const results = [];
      const totalCount = productsWithImages.length;

      // 순차적으로 상품 등록 (동시 업로드로 인한 서버 부하 방지)
      for (let i = 0; i < productsWithImages.length; i++) {
        try {
          const product = productsWithImages[i];
          const result = await productService.createProduct(product, user.uid);
          results.push({ success: true, product: result });
          
          // 진행률 업데이트
          setUploadProgress(Math.round(((i + 1) / totalCount) * 100));
          
          // 짧은 지연 (서버 부하 방지)
          await new Promise(resolve => setTimeout(resolve, 100));
        } catch (error) {
          console.error(`상품 ${i + 1} 등록 실패:`, error);
          results.push({ 
            success: false, 
            product: productsWithImages[i], 
            error: error.message 
          });
        }
      }

      const successCount = results.filter(r => r.success).length;
      const failCount = results.length - successCount;

      if (successCount > 0) {
        addToast(`${successCount}개 상품이 성공적으로 등록되었습니다.`, 'success');
        setStep(3);
        
        if (onSuccess) {
          onSuccess(results.filter(r => r.success));
        }
      }

      if (failCount > 0) {
        addToast(`${failCount}개 상품 등록에 실패했습니다.`, 'warning');
      }

    } catch (error) {
      console.error('대량 업로드 오류:', error);
      showDetailedError(error, '대량 업로드');
    } finally {
      setIsProcessing(false);
    }
  };

  // 템플릿 다운로드
  const handleDownloadTemplate = () => {
    downloadCSVTemplate();
    addToast('템플릿 파일이 다운로드되었습니다.', 'success');
  };

  // 다시 시작
  const handleReset = () => {
    setFile(null);
    setImageFiles(null);
    setImageMap({});
    setImageStructure(null);
    setMatchingType('folder');
    setParsedData([]);
    setValidationErrors([]);
    setValidationWarnings([]);
    setUploadProgress(0);
    setStep(1);
  };

  return (
    <Overlay>
      <Modal>
        <Header>
          <h2>대량 상품 등록</h2>
          <CloseButton onClick={onClose}>
            <FiX size={20} />
          </CloseButton>
        </Header>

        <Content>
          {step === 1 && (
            <StepContent>
              <StepTitle>1단계: 파일 선택</StepTitle>
              <StepDescription>
                CSV 또는 TXT 파일을 업로드하여 여러 상품을 한 번에 등록할 수 있습니다.
              </StepDescription>

              <TemplateSection>
                <TemplateTitle>
                  <FiDownload size={16} />
                  템플릿 다운로드
                </TemplateTitle>
                <TemplateDescription>
                  먼저 템플릿 파일을 다운로드하여 상품 정보를 입력하세요.
                </TemplateDescription>
                <TemplateButton onClick={handleDownloadTemplate}>
                  <FiDownload size={16} />
                  템플릿 다운로드 (.csv)
                </TemplateButton>
              </TemplateSection>

              <UploadSection>
                <UploadArea>
                  <input
                    type="file"
                    accept=".csv,.txt"
                    onChange={handleFileSelect}
                    id="bulk-upload"
                    style={{ display: 'none' }}
                  />
                  <label htmlFor="bulk-upload">
                    <FiUpload size={32} />
                    <span>CSV 파일 선택</span>
                    <small>상품 데이터 파일</small>
                  </label>
                </UploadArea>
                
                <ImageUploadArea>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    webkitdirectory="true"
                    onChange={handleImageFolderSelect}
                    id="image-folder-upload"
                    style={{ display: 'none' }}
                  />
                  <label htmlFor="image-folder-upload">
                    <FiUpload size={32} />
                    <span>이미지 폴더 선택</span>
                    <small>폴더 전체 선택 (선택사항)</small>
                  </label>
                </ImageUploadArea>
                
                {imageStructure && (
                  <ImageStructureInfo>
                    <h4>📁 이미지 폴더 구조</h4>
                    <div>
                      <strong>총 {imageStructure.totalImages}개 이미지</strong> 
                      ({imageStructure.totalFiles}개 파일 중)
                    </div>
                    {Object.keys(imageStructure.folders).length > 0 && (
                      <div>
                        <strong>폴더:</strong> {Object.keys(imageStructure.folders).join(', ')}
                      </div>
                    )}
                    {imageStructure.unorganized.length > 0 && (
                      <div>
                        <strong>분류되지 않은 이미지:</strong> {imageStructure.unorganized.length}개
                      </div>
                    )}
                  </ImageStructureInfo>
                )}
              </UploadSection>

              {Object.keys(imageMap).length > 0 && (
                <MatchingTypeSection>
                  <h4>🖼️ 이미지 매칭 방식</h4>
                  <MatchingTypeButtons>
                    <MatchingTypeButton 
                      active={matchingType === 'folder'}
                      onClick={() => setMatchingType('folder')}
                    >
                      폴더명 매칭
                    </MatchingTypeButton>
                    <MatchingTypeButton 
                      active={matchingType === 'title'}
                      onClick={() => setMatchingType('title')}
                    >
                      상품명 매칭
                    </MatchingTypeButton>
                    <MatchingTypeButton 
                      active={matchingType === 'order'}
                      onClick={() => setMatchingType('order')}
                    >
                      순서 매칭
                    </MatchingTypeButton>
                  </MatchingTypeButtons>
                  <MatchingTypeDescription>
                    {matchingType === 'folder' && 'Excel의 image_folder 컬럼과 폴더명을 매칭합니다.'}
                    {matchingType === 'title' && '상품명과 이미지 파일명을 매칭합니다.'}
                    {matchingType === 'order' && '상품 순서와 이미지 순서를 매칭합니다.'}
                  </MatchingTypeDescription>
                </MatchingTypeSection>
              )}

              <FileInfo>
                <h4>필수 컬럼:</h4>
                <ColumnList>
                  <li><strong>title</strong> - 상품명 (필수)</li>
                  <li><strong>price</strong> - 가격 (필수, 숫자만)</li>
                  <li><strong>category</strong> - 카테고리 (필수)</li>
                  <li><strong>condition</strong> - 상품 상태 (필수)</li>
                  <li><strong>description</strong> - 상품 설명 (선택, 자동 생성됨)</li>
                  <li><strong>region</strong> - 시/도 (선택)</li>
                  <li><strong>district</strong> - 구/군 (선택)</li>
                  <li><strong>detailAddress</strong> - 상세 주소 (선택)</li>
                  <li><strong>image_folder</strong> - 이미지 폴더명 (선택)</li>
                </ColumnList>
                
                <AutoDescriptionInfo>
                  <h4>🤖 자동 설명 생성</h4>
                  <p>상품 설명이 비어있거나 짧은 경우, AI가 자동으로 적절한 설명을 생성합니다:</p>
                  <ul>
                    <li>상품명, 카테고리, 상태, 가격을 분석하여 맞춤 설명 생성</li>
                    <li>브랜드별, 모델별 특성 반영</li>
                    <li>가격대별 적절한 설명 제공</li>
                    <li>기존 설명이 20글자 이상인 경우 그대로 유지</li>
                  </ul>
                </AutoDescriptionInfo>

                <KoreanSupportInfo>
                  <h4>🇰🇷 한글 지원</h4>
                  <p>한글로 입력해도 자동으로 영어로 변환됩니다:</p>
                  <ul>
                    <li><strong>카테고리:</strong> 기타 → guitar, 피아노 → piano, 드럼 → drum</li>
                    <li><strong>상태:</strong> 최상 → excellent, 양호 → good, 보통 → fair</li>
                    <li><strong>가격:</strong> 쉼표, 원화 표시 자동 제거 (1,500,000원 → 1500000)</li>
                    <li><strong>설명:</strong> 짧은 설명은 자동으로 상세 설명 생성</li>
                  </ul>
                </KoreanSupportInfo>
              </FileInfo>
            </StepContent>
          )}

          {step === 2 && (
            <StepContent>
              <StepTitle>2단계: 데이터 검토</StepTitle>
              <StepDescription>
                업로드된 데이터를 검토하고 오류가 있다면 수정해주세요.
              </StepDescription>

              <DataPreview>
                <PreviewHeader>
                  <h4>데이터 미리보기 ({parsedData.length}개 상품)</h4>
                  <FileInfo>
                    <FiFileText size={16} />
                    {file?.name}
                  </FileInfo>
                </PreviewHeader>

                <PreviewTable>
                  <thead>
                    <tr>
                      <th>상품명</th>
                      <th>가격</th>
                      <th>카테고리</th>
                      <th>상태</th>
                      <th>설명</th>
                    </tr>
                  </thead>
                  <tbody>
                    {parsedData.slice(0, 5).map((row, index) => (
                      <tr key={index}>
                        <td>{row.title}</td>
                        <td>{row.price?.toLocaleString()}원</td>
                        <td>{row.category}</td>
                        <td>{row.condition}</td>
                        <td style={{ maxWidth: '200px', fontSize: '12px' }}>
                          {row.description ? (
                            <span title={row.description}>
                              {row.description.length > 50 
                                ? `${row.description.substring(0, 50)}...` 
                                : row.description}
                            </span>
                          ) : (
                            <span style={{ color: '#999', fontStyle: 'italic' }}>
                              자동 생성됨
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                    {parsedData.length > 5 && (
                      <tr>
                        <td colSpan="5" style={{ textAlign: 'center', fontStyle: 'italic' }}>
                          ... 및 {parsedData.length - 5}개 더
                        </td>
                      </tr>
                    )}
                  </tbody>
                </PreviewTable>
              </DataPreview>

              {validationWarnings.length > 0 && (
                <WarningSection>
                  <WarningTitle>
                    <FiAlertCircle size={16} />
                    자동 수정된 항목 ({validationWarnings.length}개)
                  </WarningTitle>
                  <WarningList>
                    {validationWarnings.map((warning, index) => (
                      <WarningItem key={index}>{warning}</WarningItem>
                    ))}
                  </WarningList>
                </WarningSection>
              )}

              {validationErrors.length > 0 && (
                <ErrorSection>
                  <ErrorTitle>
                    <FiAlertCircle size={16} />
                    발견된 오류 ({validationErrors.length}개)
                  </ErrorTitle>
                  <ErrorList>
                    {validationErrors.map((error, index) => (
                      <ErrorItem key={index}>{error}</ErrorItem>
                    ))}
                  </ErrorList>
                </ErrorSection>
              )}

              <ActionButtons>
                <SecondaryButton onClick={handleReset}>
                  다시 선택
                </SecondaryButton>
                <PrimaryButton 
                  onClick={handleBulkUpload}
                  disabled={validationErrors.length > 0 || isProcessing}
                >
                  {isProcessing ? `업로드 중... ${uploadProgress}%` : '상품 등록하기'}
                </PrimaryButton>
              </ActionButtons>
            </StepContent>
          )}

          {step === 3 && (
            <StepContent>
              <SuccessIcon>
                <FiCheck size={48} />
              </SuccessIcon>
              <StepTitle>업로드 완료!</StepTitle>
              <StepDescription>
                상품이 성공적으로 등록되었습니다.
              </StepDescription>

              <ActionButtons>
                <SecondaryButton onClick={handleReset}>
                  더 등록하기
                </SecondaryButton>
                <PrimaryButton onClick={onClose}>
                  완료
                </PrimaryButton>
              </ActionButtons>
            </StepContent>
          )}
        </Content>
      </Modal>
    </Overlay>
  );
};

// Styled Components
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`;

const Modal = styled.div`
  background: white;
  border-radius: 12px;
  width: 100%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  border-bottom: 1px solid #eee;
  
  h2 {
    margin: 0;
    font-size: 20px;
    font-weight: 600;
    color: #333;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  padding: 8px;
  border-radius: 6px;
  cursor: pointer;
  color: #666;
  transition: all 0.2s ease;
  
  &:hover {
    background: #f5f5f5;
    color: #333;
  }
`;

const Content = styled.div`
  padding: 24px;
`;

const StepContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const StepTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: #333;
`;

const StepDescription = styled.p`
  margin: 0;
  color: #666;
  font-size: 14px;
  line-height: 1.5;
`;

const TemplateSection = styled.div`
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 16px;
`;

const TemplateTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
`;

const TemplateDescription = styled.p`
  margin: 0 0 12px 0;
  color: #666;
  font-size: 14px;
`;

const TemplateButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #2ed8b6;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 10px 16px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s ease;
  
  &:hover {
    background: #26c4a8;
  }
`;

const UploadSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`;

const UploadArea = styled.div`
  label {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 200px;
    border: 2px dashed #ddd;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
    background: #fafafa;
    
    &:hover {
      border-color: #2ed8b6;
      background: #f0fffe;
    }
    
    span {
      margin-top: 12px;
      font-size: 16px;
      font-weight: 500;
      color: #333;
    }
    
    small {
      margin-top: 4px;
      font-size: 14px;
      color: #666;
    }
  }
`;

const FileInfo = styled.div`
  h4 {
    margin: 0 0 12px 0;
    font-size: 14px;
    font-weight: 600;
    color: #333;
  }
  
  ul {
    margin: 0;
    padding-left: 20px;
  }
  
  li {
    margin-bottom: 4px;
    font-size: 14px;
    color: #666;
  }
`;

const ColumnList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 8px;
  list-style: none;
  padding: 0;
  
  li {
    padding: 8px 12px;
    background: #f8f9fa;
    border-radius: 4px;
    font-size: 13px;
  }
`;

const ImageUploadArea = styled.div`
  label {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 120px;
    border: 2px dashed #2ed8b6;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
    background: #f0fffe;
    
    &:hover {
      border-color: #26c4a8;
      background: #e8fffd;
    }
    
    span {
      margin-top: 8px;
      font-size: 16px;
      font-weight: 500;
      color: #333;
    }
    
    small {
      margin-top: 4px;
      font-size: 14px;
      color: #666;
    }
  }
`;

const ImageStructureInfo = styled.div`
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 16px;
  width: 100%;
  max-width: 500px;
  
  h4 {
    margin: 0 0 12px 0;
    font-size: 14px;
    font-weight: 600;
    color: #333;
  }
  
  div {
    margin-bottom: 8px;
    font-size: 13px;
    color: #666;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const MatchingTypeSection = styled.div`
  background: #fff5f5;
  border: 1px solid #fed7d7;
  border-radius: 8px;
  padding: 16px;
  width: 100%;
  max-width: 500px;
  
  h4 {
    margin: 0 0 12px 0;
    font-size: 14px;
    font-weight: 600;
    color: #333;
  }
`;

const MatchingTypeButtons = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
  flex-wrap: wrap;
`;

const MatchingTypeButton = styled.button`
  padding: 8px 12px;
  border: 2px solid ${props => props.active ? '#2ed8b6' : '#e9ecef'};
  background: ${props => props.active ? '#2ed8b6' : 'white'};
  color: ${props => props.active ? 'white' : '#666'};
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: #2ed8b6;
    background: ${props => props.active ? '#26c4a8' : '#f0fffe'};
  }
`;

const MatchingTypeDescription = styled.div`
  font-size: 12px;
  color: #666;
  font-style: italic;
`;

const DataPreview = styled.div`
  border: 1px solid #e9ecef;
  border-radius: 8px;
  overflow: hidden;
`;

const PreviewHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
  
  h4 {
    margin: 0;
    font-size: 14px;
    font-weight: 600;
    color: #333;
  }
  
  div {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    color: #666;
  }
`;

const PreviewTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #eee;
    font-size: 14px;
  }
  
  th {
    background: #f8f9fa;
    font-weight: 600;
    color: #333;
  }
  
  td {
    color: #666;
  }
`;

const WarningSection = styled.div`
  background: #fffaf0;
  border: 1px solid #fbd38d;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
`;

const WarningTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  color: #d69e2e;
  margin-bottom: 12px;
`;

const WarningList = styled.div`
  max-height: 200px;
  overflow-y: auto;
`;

const WarningItem = styled.div`
  padding: 8px 12px;
  background: white;
  border-radius: 4px;
  margin-bottom: 4px;
  font-size: 13px;
  color: #d69e2e;
`;

const ErrorSection = styled.div`
  background: #fff5f5;
  border: 1px solid #fed7d7;
  border-radius: 8px;
  padding: 16px;
`;

const ErrorTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  color: #e53e3e;
  margin-bottom: 12px;
`;

const ErrorList = styled.div`
  max-height: 200px;
  overflow-y: auto;
`;

const ErrorItem = styled.div`
  padding: 8px 12px;
  background: white;
  border-radius: 4px;
  margin-bottom: 4px;
  font-size: 13px;
  color: #e53e3e;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  margin-top: 24px;
`;

const PrimaryButton = styled.button`
  background: #2ed8b6;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s ease;
  
  &:hover:not(:disabled) {
    background: #26c4a8;
  }
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const SecondaryButton = styled.button`
  background: white;
  color: #666;
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: #f5f5f5;
    border-color: #ccc;
  }
`;

const SuccessIcon = styled.div`
  display: flex;
  justify-content: center;
  color: #2ed8b6;
`;

const AutoDescriptionInfo = styled.div`
  background: #f0f8ff;
  border: 1px solid #b3d9ff;
  border-radius: 8px;
  padding: 16px;
  margin-top: 16px;
  
  h4 {
    margin: 0 0 8px 0;
    font-size: 14px;
    font-weight: 600;
    color: #0066cc;
  }
  
  p {
    margin: 0 0 8px 0;
    font-size: 13px;
    color: #666;
    line-height: 1.4;
  }
  
  ul {
    margin: 0;
    padding-left: 16px;
    
    li {
      font-size: 12px;
      color: #666;
      margin-bottom: 4px;
      line-height: 1.3;
    }
  }
`;

const KoreanSupportInfo = styled.div`
  background: #f0fff4;
  border: 1px solid #9ae6b4;
  border-radius: 8px;
  padding: 16px;
  margin-top: 16px;
  
  h4 {
    margin: 0 0 8px 0;
    font-size: 14px;
    font-weight: 600;
    color: #38a169;
  }
  
  p {
    margin: 0 0 8px 0;
    font-size: 13px;
    color: #666;
    line-height: 1.4;
  }
  
  ul {
    margin: 0;
    padding-left: 16px;
    
    li {
      font-size: 12px;
      color: #666;
      margin-bottom: 4px;
      line-height: 1.3;
    }
  }
`;

export default BulkProductUpload;
