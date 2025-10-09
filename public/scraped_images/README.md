# 🖼️ 스크래핑된 상품 이미지 폴더

이 폴더는 네이버 카페에서 스크래핑한 상품들의 이미지를 저장하는 폴더입니다.

## 📁 폴더 구조

```
scraped_images/
├── gibson_les_paul/           # Gibson Les Paul Standard
│   ├── main.jpg              # 메인 이미지
│   ├── detail1.jpg           # 상세 이미지 1
│   └── detail2.jpg           # 상세 이미지 2
├── fender_stratocaster/       # Fender Stratocaster
│   ├── main.jpg              # 메인 이미지
│   └── detail1.jpg           # 상세 이미지 1
├── yamaha_p125/              # Yamaha P-125 디지털 피아노
│   ├── main.jpg              # 메인 이미지
│   └── detail1.jpg           # 상세 이미지 1
├── pearl_export/             # Pearl Export 드럼세트
│   ├── main.jpg              # 메인 이미지
│   └── detail1.jpg           # 상세 이미지 1
└── martin_d28/               # Martin D-28 어쿠스틱 기타
    ├── main.jpg              # 메인 이미지
    └── detail1.jpg           # 상세 이미지 1
```

## 📋 상품 정보

### 1. Gibson Les Paul Standard 2019년형
- **가격**: 1,800,000원
- **상태**: excellent (최상)
- **설명**: 2019년 구매한 Gibson Les Paul Standard입니다. 거의 새 제품 수준으로 잘 관리되었습니다.

### 2. Fender Stratocaster Made in Japan
- **가격**: 1,200,000원
- **상태**: good (양호)
- **설명**: 일본산 Fender Stratocaster입니다. 상태가 양호하고 연주에 전혀 문제없습니다.

### 3. Yamaha P-125 디지털 피아노
- **가격**: 450,000원
- **상태**: excellent (최상)
- **설명**: Yamaha P-125 디지털 피아노입니다. 거의 사용하지 않아 새 제품과 같은 상태입니다.

### 4. Pearl Export 드럼세트 5피스
- **가격**: 800,000원
- **상태**: good (양호)
- **설명**: Pearl Export 드럼세트입니다. 5피스 구성으로 하드웨어 포함하여 판매합니다.

### 5. Martin D-28 어쿠스틱 기타
- **가격**: 2,500,000원
- **상태**: excellent (최상)
- **설명**: Martin D-28 프리미엄 어쿠스틱 기타입니다. 전문가용으로 최상의 상태를 유지하고 있습니다.

## 🎯 사용 방법

1. **CSV 파일**: `scraped_products.csv`를 대량 등록에서 업로드
2. **이미지 폴더**: `scraped_images/` 폴더 전체를 선택
3. **매칭 방식**: "폴더명 매칭" 선택
4. **대량 등록**: 상품 등록 실행

## ⚠️ 주의사항

- 각 폴더에는 실제 이미지 파일을 넣어야 합니다
- 파일명은 영문, 숫자, 언더스코어(_)만 사용
- 지원 형식: JPG, PNG, GIF, WebP
- 권장 해상도: 800x600 이상
