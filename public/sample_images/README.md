# 🖼️ 샘플 이미지 폴더 구조

이 폴더는 ECHO 대량 등록 기능의 이미지 매칭 예시를 보여줍니다.

## 📁 폴더 구조

```
sample_images/
├── gibson_les_paul/           # CSV의 image_folder 컬럼과 매칭
│   ├── main.jpg              # 메인 이미지
│   ├── detail1.jpg           # 상세 이미지 1
│   └── detail2.jpg           # 상세 이미지 2
├── fender_stratocaster/       # CSV의 image_folder 컬럼과 매칭
│   ├── main.jpg              # 메인 이미지
│   └── detail1.jpg           # 상세 이미지 1
└── yamaha_p125/              # CSV의 image_folder 컬럼과 매칭
    ├── main.jpg              # 메인 이미지
    └── detail1.jpg           # 상세 이미지 1
```

## 🔗 CSV 파일과의 매칭

CSV 파일의 `image_folder` 컬럼 값이 폴더명과 정확히 일치해야 합니다:

| CSV image_folder | 폴더명 | 매칭 결과 |
|------------------|--------|-----------|
| gibson_les_paul | gibson_les_paul/ | ✅ 매칭됨 |
| fender_stratocaster | fender_stratocaster/ | ✅ 매칭됨 |
| yamaha_p125 | yamaha_p125/ | ✅ 매칭됨 |

## 📝 사용 방법

1. **이미지 준비**: 각 상품별로 폴더를 만들고 이미지를 넣습니다
2. **폴더명 설정**: CSV 파일의 `image_folder` 컬럼과 동일한 이름으로 폴더명을 설정합니다
3. **대량 등록**: CSV 파일과 이미지 폴더를 함께 업로드합니다

## ⚠️ 주의사항

- 폴더명은 영문, 숫자, 언더스코어(_)만 사용
- 한글이나 특수문자는 사용하지 마세요
- 대소문자를 정확히 맞춰주세요
- 각 폴더에는 최소 1개 이상의 이미지가 있어야 합니다

## 🎯 이미지 파일 규칙

- **지원 형식**: JPG, PNG, GIF, WebP
- **파일 크기**: 최대 10MB
- **해상도**: 권장 800x600 이상
- **파일명**: 영문, 숫자, 언더스코어(_)만 사용
