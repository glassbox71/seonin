# Seonin — 개인 홈페이지

유선인의 반응형 개인 포트폴리오 초안입니다. 프레임워크와 외부 CDN 의존성 없이 HTML, CSS, JavaScript로 동작합니다.

## 실행

```sh
cd /workspace/seonin
python3 -m http.server 8001 --bind 0.0.0.0
```

## 수정

- `index.html`: 이름, 소개, 프로젝트 카드 및 페이지 문구
- `style.css`: 색상, 타이포그래피, 반응형 레이아웃
- `script.js`: 프로젝트 상세 내용과 연락 안내

프로젝트 필터, 상세 모달, 키보드 닫기, 모바일 레이아웃과 모션 감소 설정을 지원합니다.

## 디자인 및 콘텐츠 상태

요청된 Figma 노드 `D6PIKw6amF8tpmEawYCbzd / 1:206`는 제작 환경에서 HTTP 403으로 접근할 수 없어 원본 디자인을 확인하지 못했습니다. 현재 화면은 독립적으로 만든 초안입니다. Figma 스크린샷이나 내보낸 이미지를 받으면 원본에 맞춰 조정해야 합니다.

소개는 편집할 수 있는 초안이며, Onul 및 New perspectives는 실제 경력을 나타내지 않는 콘셉트 예시입니다. Haevichi 카드 역시 실제 캡처 대신 CSS로 만든 예시 그래픽을 사용합니다. 공개 이메일이 제공되지 않아 연락 버튼은 안내 모달을 엽니다.

## 페이지 구성

Intro → About → Portfolio → Contact 순서의 단일 페이지입니다. 메뉴를 누르면 해당 섹션으로 이동합니다.

## GitHub

대상 저장소: https://github.com/glassbox71/seonin

GitHub에 소스를 업로드하는 것과 GitHub Pages에 웹사이트를 게시하는 것은 별개입니다. 정적 호스팅에서는 이 디렉터리의 `index.html`을 진입점으로 사용합니다.
