# 더미 데이터 (seed)

실사용자가 올린 것처럼 보이는 중고거래 글 38개, 음악생활 게시글 18개(댓글 48개)를 넣는 스크립트입니다.
판매자 18명은 `users` 컬렉션에 프로필만 만들고 로그인 계정(Auth)은 만들지 않습니다.

## 실행 순서

1. Firebase 콘솔 → 프로젝트 설정 → 서비스 계정 → **새 비공개 키 생성**
2. 받은 파일을 프로젝트 루트에 `serviceAccountKey.json` 이름으로 저장 (깃에는 안 올라감)
3. 미리보기: `npm run seed:preview` → 숨김 처리될 테스트 글 목록 확인
4. 반영: `npm run seed:apply`

## 되돌리기

- 더미 전체 삭제: `npm run seed:remove` (`isSeedData: true` 문서만 삭제, 기존 데이터는 그대로)
- 숨긴 테스트 글 복구: `node seed/seed-dummy.mjs --key ./serviceAccountKey.json --unhide`

## 참고

- 같은 문서 ID로 덮어쓰기 때문에 여러 번 실행해도 중복으로 쌓이지 않습니다. 실행 시점 기준으로 "n시간 전" 글이 됩니다.
- 사진은 Unsplash 무료 라이선스 이미지 링크입니다. 실제 판매자 사진처럼 보이게 하려면 직접 찍은 사진으로 바꾸는 걸 권장합니다.
- 더미 판매자에게 채팅을 걸면 방은 만들어지지만 답장은 오지 않습니다.

## 키 파일 없이 실행 (Google Cloud Shell)

Firebase 콘솔에 로그인된 계정으로 https://shell.cloud.google.com 을 열고:

```bash
git clone --depth 1 https://github.com/sewoong333/ECHO echo && cd echo
npm install --no-save firebase-admin
node seed/seed-dummy.mjs --adc            # 미리보기
node seed/seed-dummy.mjs --adc --apply    # 반영
```
