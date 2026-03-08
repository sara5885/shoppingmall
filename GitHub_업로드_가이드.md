# GitHub(sara5885/shoppingmall)에 업로드하기

저장소 주소: **https://github.com/sara5885/shoppingmall**

아래 명령어를 **순서대로** PowerShell 또는 명령 프롬프트에서 실행하세요.

---

## 1. 프로젝트 폴더로 이동

```powershell
cd C:\Users\soojin\Desktop\soojin\2026\vibecoding\projects\v0
```

---

## 2. Git 저장소 초기화 (처음 한 번만)

```powershell
git init
```

---

## 3. 모든 파일 스테이징

```powershell
git add .
```

---

## 4. 첫 커밋 만들기

```powershell
git commit -m "NEXUS 기업 소개 사이트 + 채용정보 페이지"
```

---

## 5. 기본 브랜치 이름을 main으로

```powershell
git branch -M main
```

---

## 6. 내 GitHub 저장소 연결

```powershell
git remote add origin https://github.com/sara5885/shoppingmall.git
```

---

## 7. GitHub에 올리기 (Push)

```powershell
git push -u origin main
```

- 브라우저나 창에서 **GitHub 로그인** 또는 **인증** 요청이 나오면 진행해 주세요.
- 완료되면 https://github.com/sara5885/shoppingmall 에 코드가 보입니다.

---

## 한 번에 복사해서 쓸 때 (이미 폴더에 있다면)

```powershell
cd C:\Users\soojin\Desktop\soojin\2026\vibecoding\projects\v0
git init
git add .
git commit -m "NEXUS 기업 소개 사이트 + 채용정보 페이지"
git branch -M main
git remote add origin https://github.com/sara5885/shoppingmall.git
git push -u origin main
```

---

## 참고

- **이미 `git init`을 한 적이 있다면** 2단계는 건너뛰세요.
- **이미 `git remote add origin`을 다른 주소로 한 적이 있다면** 아래로 바꾼 뒤 push 하세요.
  ```powershell
  git remote set-url origin https://github.com/sara5885/shoppingmall.git
  git push -u origin main
  ```
- **Push 시 인증 오류**가 나면: GitHub → Settings → Developer settings → Personal access tokens 에서 토큰을 만든 뒤, 비밀번호 대신 토큰을 입력하면 됩니다.
