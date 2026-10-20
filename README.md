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

## 워터 인트로

`water.css`와 `script.js`에 인트로를 구현했습니다. 약 3.3초 동안 아래에서 위로 물이 차오른 뒤 SEONIN 이니셜이 나타나고 SVG 굴절 필터와 부유 효과가 이어집니다. 다시 보기·일시정지 버튼을 지원하며, 모션 감소 설정에서는 정적인 이니셜을 바로 표시합니다. 화면 밖이나 숨겨진 탭에서는 굴절 프레임 갱신을 중단합니다.

## 공개 미리보기 (GitHub Pages)

예정 주소: https://glassbox71.github.io/seonin/

GitHub 저장소 Settings → Pages → Build and deployment에서 Source를 **Deploy from a branch**, Branch를 **main**, 경로를 **/(root)**로 선택하고 Save 하세요. `.nojekyll`이 포함되어 있어 정적 파일 그대로 게시됩니다. 이 주소는 Pages가 활성화되고 배포가 끝난 뒤 사용 가능합니다.

## About 및 화면 전환

제공된 About 스크린샷을 참고해 수중 배경, 오렌지 제목, 프로필·기술 태그, 하얀 돌고래를 배치했습니다. `assets/beluga.png`와 `assets/underwater.png`는 참조 구도에 맞춰 새로 생성한 에셋입니다. 인트로의 첫 아래 방향 마우스 휠 입력은 About 화면으로 이동합니다. 가로 스크롤과 확대 제스처, 모달에서는 해당 동작을 실행하지 않으며 이후 섹션은 기본 스크롤을 유지합니다. 모바일은 기본 터치 스크롤입니다. About 진입 시 돌고래가 나타나며 말풍선 버튼으로 다시 재생할 수 있습니다. 모션 감소 설정에서는 정적으로 표시합니다.

인트로 하단과 About 상단은 동일한 `#7fc4ff` 색상을 기준으로 그라디언트로 연결했습니다. 이름 표기는 SEONIN으로 통일했습니다.

추가 참조 주소 https://www.crechetank.com/ 는 현재 환경에서 HTTP 403으로 차단되어 확인하지 못했습니다. 해당 사이트의 화면 또는 영상 제공 시 시각 요소와 전환을 추가로 맞출 수 있습니다.

## 최신 색상 및 Hero

Hero와 About의 공통 물빛은 `theme.css`의 `--ocean-water: #a8d7ff`입니다. 물결 뒤쪽은 같은 하늘색 계열인 `--ocean-surface`, `--ocean-surface-light`를 사용합니다. About 수중 사진에는 파란색 틴트를 적용하고 동일한 경계색으로 연결했습니다. Hero는 흰색 굵은 SEONIN 타이포그래피와 About으로 이동하는 ENTER 버튼으로 구성했습니다. 물 채움 → 이름 등장·굴절 → About 이동·돌고래 등장 순서를 유지합니다.
