import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead = ({ 
  title, 
  description, 
  keywords, 
  image, 
  url, 
  type = 'website',
  structuredData 
}) => {
  useEffect(() => {
    // 동적 메타 태그 업데이트
    if (title) {
      document.title = title;
    }
  }, [title]);

  const defaultTitle = '중고악기거래 ECHO | 기타 피아노 드럼 바이올린 색소폰 악기판매 구매';
  const defaultDescription = '국내 최대 중고악기 거래 플랫폼 ECHO. 기타, 피아노, 드럼, 바이올린, 색소폰, 관악기 등 모든 악기를 안전하게 거래하세요.';
  const defaultKeywords = '중고악기, 악기거래, 기타판매, 피아노판매, 드럼판매, 바이올린판매, 색소폰판매, 관악기판매, 악기구매, 악기렌탈, 음악악기, 뮤직악기, 악기커뮤니티';
  const defaultImage = 'https://echo-5385e.web.app/og-image.png';
  const baseUrl = 'https://echo-5385e.web.app';

  return (
    <Helmet>
      {/* 기본 메타 태그 */}
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      
      {/* Open Graph 태그 */}
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:url" content={url || baseUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="ECHO 중고악기거래" />
      <meta property="og:locale" content="ko_KR" />
      
      {/* Twitter 카드 태그 */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={image || defaultImage} />
      
      {/* 추가 SEO 태그 */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      
      {/* 구조화된 데이터 */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
