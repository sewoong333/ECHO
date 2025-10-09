/**
 * 네이버 카페 게시글 스크래핑 스크립트
 * 에코뮤직 중고악기백화점 카페에서 상품 정보를 수집
 */

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function scrapeNaverCafe() {
  console.log('🚀 네이버 카페 스크래핑 시작...');
  
  const browser = await puppeteer.launch({
    headless: false, // 디버깅을 위해 브라우저 표시
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  try {
    const page = await browser.newPage();
    
    // User-Agent 설정
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');
    
    // 카페 페이지로 이동
    const cafeUrl = 'https://cafe.naver.com/f-e/cafes/31386031/menus/0?viewType=L';
    console.log('📄 카페 페이지 로딩 중...');
    await page.goto(cafeUrl, { waitUntil: 'networkidle2', timeout: 30000 });
    
    // 페이지 로딩 대기
    await page.waitForTimeout(3000);
    
    // 게시글 목록 스크래핑
    console.log('🔍 게시글 목록 스크래핑 중...');
    
    const posts = await page.evaluate(() => {
      const postElements = document.querySelectorAll('.board-list tr');
      const posts = [];
      
      for (let i = 0; i < Math.min(5, postElements.length); i++) {
        const element = postElements[i];
        const titleElement = element.querySelector('.board-list .title a');
        const priceElement = element.querySelector('.board-list .price');
        const categoryElement = element.querySelector('.board-list .category');
        
        if (titleElement) {
          const title = titleElement.textContent.trim();
          const link = titleElement.href;
          
          // 가격 추출 (숫자만)
          let price = '500000'; // 기본값
          if (priceElement) {
            const priceText = priceElement.textContent.trim();
            const priceMatch = priceText.match(/[\d,]+/);
            if (priceMatch) {
              price = priceMatch[0].replace(/,/g, '');
            }
          }
          
          // 카테고리 추출
          let category = 'guitar'; // 기본값
          if (categoryElement) {
            const categoryText = categoryElement.textContent.trim();
            if (categoryText.includes('기타')) category = 'guitar';
            else if (categoryText.includes('피아노')) category = 'piano';
            else if (categoryText.includes('드럼')) category = 'drum';
            else if (categoryText.includes('베이스')) category = 'bass';
            else if (categoryText.includes('바이올린')) category = 'violin';
          }
          
          // 제목에서 카테고리 추정
          if (title.toLowerCase().includes('기타')) category = 'guitar';
          else if (title.toLowerCase().includes('피아노')) category = 'piano';
          else if (title.toLowerCase().includes('드럼')) category = 'drum';
          else if (title.toLowerCase().includes('베이스')) category = 'bass';
          else if (title.toLowerCase().includes('바이올린')) category = 'violin';
          
          posts.push({
            title: title,
            price: price,
            category: category,
            condition: 'good',
            description: `${title} - 상태 양호한 중고 악기입니다.`,
            region: '경기도',
            district: '성남시',
            detailAddress: '경기도 성남시',
            image_folder: `item_${i + 1}`
          });
        }
      }
      
      return posts;
    });
    
    console.log(`✅ ${posts.length}개 게시글 스크래핑 완료`);
    
    // CSV 파일 생성
    const csvContent = generateCSV(posts);
    const csvPath = path.join(__dirname, '../public/scraped_products.csv');
    
    fs.writeFileSync(csvPath, csvContent, 'utf8');
    console.log(`📄 CSV 파일 생성 완료: ${csvPath}`);
    
    // 스크래핑된 데이터 출력
    console.log('\n📋 스크래핑된 상품 목록:');
    posts.forEach((post, index) => {
      console.log(`${index + 1}. ${post.title} - ${post.price}원 (${post.category})`);
    });
    
    return posts;
    
  } catch (error) {
    console.error('❌ 스크래핑 오류:', error);
    throw error;
  } finally {
    await browser.close();
  }
}

function generateCSV(posts) {
  const headers = [
    'title',
    'price', 
    'category',
    'condition',
    'description',
    'region',
    'district',
    'detailAddress',
    'image_folder'
  ];
  
  const csvRows = [headers];
  
  posts.forEach(post => {
    const row = [
      `"${post.title}"`,
      `"${post.price}"`,
      `"${post.category}"`,
      `"${post.condition}"`,
      `"${post.description}"`,
      `"${post.region}"`,
      `"${post.district}"`,
      `"${post.detailAddress}"`,
      `"${post.image_folder}"`
    ];
    csvRows.push(row);
  });
  
  return csvRows.map(row => row.join(',')).join('\n');
}

// 스크래핑 실행
if (require.main === module) {
  scrapeNaverCafe()
    .then(() => {
      console.log('🎉 스크래핑 완료!');
      process.exit(0);
    })
    .catch(error => {
      console.error('💥 스크래핑 실패:', error);
      process.exit(1);
    });
}

module.exports = { scrapeNaverCafe };
