# SEONIN — 개인 홈페이지

Intro → About → Portfolio → Skills → Contact 순서의 반응형 정적 포트폴리오입니다. 외부 CDN이나 패키지 설치 없이 HTML, CSS, JavaScript로 동작합니다.

## 실행

```sh
cd /workspace/seonin
python3 -m http.server 8001 --bind 0.0.0.0
```

## 현재 화면과 동작

- `ocean.css`: `assets/ocean-depths.png` 한 장과 연결 그라디언트로 문서 전체에 이어지는 세로 배경을 구성합니다. 위쪽의 연한 물빛에서 깊은 바닷빛으로 내려가며, 하단에는 빛내림과 산호·모래길이 보입니다. 배경은 스크롤과 함께 이동하고, 이미지는 하단에 비율을 유지해 배치하여 모바일에서 산호가 세로로 늘어나지 않도록 했습니다. 각 섹션의 개별 배경은 제거했습니다. Hero에는 배경보다 밝은 반투명 물이 아래에서 위로 차오릅니다.
- `water.css`: 약 3.3초 동안 물 채움 → SEONIN 등장·굴절 효과. ENTER로 About으로 이동합니다. 모든 섹션에서 휠을 아래·위로 굴릴 때 인접 섹션으로 하나씩 이동합니다. 약 650ms 동안 전환하며 관성 스크롤 입력은 같은 제스처로 처리해 건너뛰기를 막습니다. 메뉴 이동도 같은 전환을 사용합니다. 터치 스크롤과 모달 내부 스크롤은 기본 동작을 유지합니다. 다시 보기·일시정지와 모션 감소 설정을 지원합니다.
- `about.css`: 프로필·기술 정보, 진입 시 나타나는 돌고래. 말풍선을 누르면 등장을 다시 재생합니다.
- `reef.css`: Portfolio의 프로젝트 선택(01·02·03), 조개를 통한 상세 모달, Contact의 기본 배치.
- `skills.css`: 독립된 Skills 섹션에 HTML, CSS, JavaScript, React, Figma 아이콘을 각각 별도의 조개 안에 배치합니다. Skills 섹션이 화면에 22% 이상 들어오면 조개 5개가 순서대로 열리고 각 아이콘이 나타납니다. 전체 다시 열기 버튼을 제공합니다. 모바일은 두 열이며 마지막 조개는 중앙에 배치합니다. 모션 감소 설정에서는 열린 조개와 아이콘을 정적으로 표시합니다.
- Contact는 Skills와 분리된 연락 안내 영역입니다. 실제 이메일이 제공되지 않아 연락 버튼은 안내 모달을 엽니다.
- `script.js`: 각 인터랙션, 모달, 섹션 표시기. 화면 밖이나 숨겨진 탭에서는 인트로의 굴절 프레임 갱신을 중단합니다.

## 콘텐츠 및 참조

제공된 Figma 스크린샷을 참고해 구성했습니다. Figma 링크와 추가 참조 https://www.crechetank.com/ 는 제작 환경에서 HTTP 403으로 차단되어 직접 확인하지 못했습니다.

`beluga.png`, `underwater.png`, `seabed.png`, `shell.png`는 화면 제작을 위해 새로 생성한 에셋입니다. 최신 참조 이미지에 맞춰 새로 만든 공통 배경은 `ocean-depths.png`입니다.

Haevichi는 기존 https://github.com/glassbox71/haevichi-tt 저장소에 연결합니다. Onul과 New perspectives는 콘셉트 예시로 표시했습니다. 공개 이메일이 제공되지 않아 연락 버튼은 안내 모달을 엽니다. 실제 프로젝트 설명·프로필·연락 정보는 `index.html`과 `script.js`에서 수정할 수 있습니다.

## GitHub Pages

저장소: https://github.com/glassbox71/seonin

예정 주소: https://glassbox71.github.io/seonin/

GitHub Settings → Pages에서 Source를 **Deploy from a branch**, Branch를 **main**, 경로를 **/(root)**로 선택하면 정적 파일을 게시할 수 있습니다. `.nojekyll`을 포함합니다. Pages 활성화와 공개 주소 접속은 제작 환경에서 검증하지 못했습니다.

## 캐릭터·스킬 조개·채도 조정

`refinements.css`에서 돌고래 3곳을 직전 Contact 돌고래 크기의 80%로 통일했습니다. 데스크톱의 공통 표시 영역은 24.8vw × 54.4svh, 모바일은 160 × 224px입니다. About은 미소와 인사, Portfolio는 윙크와 헤엄, Contact는 눈을 감은 감사 인사로 표정과 동작을 구분한 별도 투명 이미지입니다.

Skills에는 진주를 제거한 `shell-empty.png`를 사용하고, 아이콘을 하단 조개 내부에 배치합니다. Portfolio의 진주 조개는 별도 이미지로 유지합니다. 바다 배경과 Hero의 물에만 `filter: saturate(.8)`을 적용해 배경 채도를 20% 낮췄으며, 캐릭터·텍스트·스킬 아이콘에는 이 필터를 적용하지 않습니다.

페이지 하단 footer는 제거했습니다. Contact가 마지막 섹션입니다.
