# Vercel로 배포하기 - 초보자용 단계별 가이드

이 프로젝트를 인터넷에 공개하려면 **Vercel**에 배포하면 됩니다.  
아래 순서대로만 따라 하시면 됩니다.

---

## 준비물

- [ ] 이 프로젝트 폴더가 컴퓨터에 있음
- [ ] GitHub 계정 (없으면 [github.com](https://github.com)에서 무료 가입)
- [ ] Vercel 계정 (아래 2단계에서 무료 가입)

---

## 1단계: GitHub에 코드 올리기

Vercel은 **GitHub에 올린 코드**를 가져와서 배포합니다. 그래서 먼저 GitHub에 프로젝트를 올려야 합니다.

### 1-1. Git이 설치되어 있는지 확인

**명령 프롬프트** 또는 **PowerShell**을 열고 아래를 입력해 보세요.

```bash
git --version
```

- `git version 2.x.x` 처럼 나오면 → **설치됨**. 1-2로 가세요.
- `'git'은(는) 인식되지 않습니다` 나오면 → [Git 다운로드](https://git-scm.com/download/win)에서 설치 후 다시 확인.

### 1-2. GitHub에서 새 저장소(Repository) 만들기

1. [github.com](https://github.com)에 로그인
2. 오른쪽 위 **+** → **New repository** 클릭
3. 아래처럼 입력:
   - **Repository name**: `nexus-website` (원하는 이름으로 해도 됨)
   - **Public** 선택
   - **Add a README file** 는 체크하지 않음 (이미 로컬에 코드가 있으므로)
4. **Create repository** 클릭
5. 생성된 페이지에 나오는 주소 복사해 두기  
   예: `https://github.com/내아이디/nexus-website.git`

### 1-3. 프로젝트 폴더에서 Git 초기화하고 GitHub에 올리기

**PowerShell** 또는 **명령 프롬프트**를 열고, **프로젝트 폴더로 이동**한 뒤 아래 명령을 **순서대로** 입력하세요.

```bash
cd C:\Users\soojin\Desktop\soojin\2026\vibecoding\projects\v0
```

```bash
git init
```

```bash
git add .
```

```bash
git commit -m "첫 커밋: NEXUS 기업 소개 사이트"
```

```bash
git branch -M main
```

```bash
git remote add origin https://github.com/내아이디/nexus-website.git
```
※ **반드시 `내아이디/nexus-website` 부분을 1-2에서 만든 저장소 주소로 바꾸세요.**

```bash
git push -u origin main
```

- 처음이면 GitHub **로그인** 또는 **토큰** 입력 창이 뜰 수 있습니다. 화면 안내대로 진행하면 됩니다.
- `git push`가 성공하면 GitHub 웹사이트에서 파일 목록이 보여야 합니다.

---

## 2단계: Vercel 가입하고 프로젝트 연결

### 2-1. Vercel 가입

1. 브라우저에서 [vercel.com](https://vercel.com) 접속
2. **Sign Up** 클릭
3. **Continue with GitHub** 선택 (GitHub 계정으로 로그인하면 편합니다)
4. GitHub 권한 허용하면 Vercel 가입 완료

### 2-2. 새 프로젝트 만들기 (GitHub 저장소 연결)

1. Vercel 대시보드에서 **Add New...** → **Project** 클릭
2. **Import Git Repository** 목록에 방금 올린 저장소(예: `nexus-website`)가 보입니다.  
   안 보이면 **Import** 옆에 **Configure GitHub** 등으로 GitHub 연동을 먼저 해 주세요.
3. 해당 저장소 옆 **Import** 클릭

### 2-3. 설정 확인 후 배포

1. **Project Name**은 그대로 두거나 원하는 이름으로 변경 (예: `nexus-website`)
2. **Framework Preset**: **Next.js** 로 이미 잡혀 있어야 합니다. 건드리지 않아도 됩니다.
3. **Root Directory**: 비워 두기 (프로젝트 루트가 맞음)
4. **Build and Output Settings**:
   - Build Command: `next build` (기본값)
   - Output Directory: (비워 두기)
   - Install Command: `npm install` 또는 `pnpm install` (사용하는 패키지 매니저에 맞게)
5. **Environment Variables(환경 변수)**: 이 프로젝트는 별도 설정 없어도 동작합니다. 나중에 API 키 등을 쓰면 여기 추가하면 됩니다.
6. **Deploy** 버튼 클릭

---

## 3단계: 배포 완료 확인

- 빌드가 끝나면 **Congratulations** 화면이 나옵니다.
- **Visit** 버튼을 누르면 **배포된 사이트 주소**로 이동합니다.  
  예: `https://nexus-website-xxxx.vercel.app`
- 이 주소를 다른 사람에게 공유하면, 전 세계 어디서든 사이트를 볼 수 있습니다.

---

## 자주 묻는 질문

### Q. 코드를 수정한 다음 다시 배포하려면?

GitHub에 다시 push 하면 Vercel이 **자동으로 다시 배포**합니다.

```bash
cd C:\Users\soojin\Desktop\soojin\2026\vibecoding\projects\v0
git add .
git commit -m "수정 내용 설명"
git push
```

Vercel 대시보드 → 해당 프로젝트 → **Deployments**에서 진행 상황을 볼 수 있습니다.

### Q. 나만의 도메인(예: www.nexus.kr)을 쓰고 싶어요.

Vercel 프로젝트 → **Settings** → **Domains**에서 도메인을 추가할 수 있습니다.  
도메인은 별도로 구매(가비아, 카페24 등)한 뒤, 화면 안내대로 DNS 설정만 해 주면 됩니다.

### Q. `git push` 할 때 "Permission denied" / "Authentication failed" 나와요.

GitHub에서 **SSH 키**를 등록하거나, **Personal Access Token**을 사용해야 합니다.  
- [GitHub: SSH 키 연결](https://docs.github.com/ko/authentication/connecting-to-github-with-ssh)  
- 또는 GitHub → Settings → Developer settings → Personal access tokens 에서 토큰 생성 후, 비밀번호 대신 토큰 입력

### Q. pnpm을 쓰는데 Vercel에서 npm으로 빌드돼요.

프로젝트에 `pnpm-lock.yaml`이 있으면 Vercel이 보통 자동으로 pnpm을 사용합니다.  
안 되면 Vercel 프로젝트 **Settings** → **General** → **Install Command**에 `pnpm install` 로 지정할 수 있습니다.

---

## 요약 체크리스트

1. [ ] Git 설치 후 프로젝트에서 `git init` → `git add .` → `git commit`
2. [ ] GitHub에 새 저장소 만들고 `git remote add origin` → `git push`
3. [ ] Vercel 가입 (GitHub로 로그인)
4. [ ] Vercel에서 **Add New** → **Project** → GitHub 저장소 **Import**
5. [ ] **Deploy** 클릭 후 나온 주소로 사이트 확인

여기까지 하면 배포 완료입니다.
