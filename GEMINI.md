# My Link (Gemini CLI Context)

이 파일은 `My Link` 프로젝트에 대한 핵심 정보를 제공하며, Gemini CLI의 동작 및 개발 가이드라인을 정의합니다.

## 1. 프로젝트 개요 (Project Overview)
- **목적**: 사용자가 여러 링크를 한곳에서 관리할 수 있는 통합 링크 매니저 서비스.
- **주요 구조**:
  - `my-profile/`: Next.js 기반의 메인 프로필 및 링크 관리 애플리케이션.
- **기술 스택**:
  - **Framework**: Next.js (App Router)
  - **Library**: React 19
  - **Styling**: Tailwind CSS 4
  - **Language**: TypeScript

## 2. 빌드 및 실행 (Building and Running)
모든 명령은 `my-profile` 디렉토리 내에서 실행하는 것을 권장합니다.

- **개발 서버 실행**: `npm run dev`
- **프로젝트 빌드**: `npm run build`
- **프로덕션 시작**: `npm run start`
- **Lint 검사**: `npm run lint`

> **Note**: 개발 서버 실행 시 사용자의 선호에 따라 브라우저가 자동으로 열리도록 지원해야 합니다.

## 3. 개발 컨벤션 및 지침 (Development Conventions)
- **App Router**: 모든 페이지와 레이아웃은 `my-profile/app` 디렉토리 구조를 따릅니다.
- **Tailwind CSS 4**: 최신 v4 기능을 활용하여 스타일링하며, `globals.css`를 기본 설정으로 사용합니다.
- **코드 스타일**: ESLint 설정(`eslint.config.mjs`)을 준수하며, TypeScript의 엄격한 타입 체크를 권장합니다.
- **주의사항**: 이 프로젝트에서 사용하는 Next.js 버전은 일반적인 버전과 API 또는 구조가 다를 수 있습니다 (`AGENTS.md` 참고). 새로운 코드를 작성하기 전에 기존 파일들의 패턴을 충분히 검토하십시오.

## 4. 테스크 가이드 (Task Guide)
1. **변경 사항 검증**: 코드 수정 후에는 반드시 `npm run lint` 또는 `npm run build`를 통해 프로젝트의 무결성을 확인합니다.
2. **한글 우선**: 모든 계획, 테스크 설명, 그리고 사용자 응답은 한국어로 작성합니다.
3. **보안**: `.env` 파일이나 민감한 설정이 노출되지 않도록 주의합니다.
