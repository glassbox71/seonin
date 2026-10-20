# SEONIN — 개인 홈페이지

Intro → About → Portfolio → Contact 순서의 반응형 정적 포트폴리오입니다. 외부 CDN이나 패키지 설치 없이 HTML, CSS, JavaScript로 동작합니다.

## 실행

```sh
cd /workspace/seonin
python3 -m http.server 8001 --bind 0.0.0.0
```

## 현재 화면과 동작

- `ocean.css`: `assets/seabed.png` 한 장을 전체 페이지의 고정 배경으로 공유합니다. 각 섹션의 개별 배경·색상 오버레이는 제거했습니다. Hero에는 배경보다 밝은 반투명 물이 아래에서 위로 차오릅니다.
- `water.css`: 약 3.3초 동안 물 채움 → SEONIN 등장·굴절 효과. ENTER 또는 인트로의 아래 방향 마우스 휠 입력으로 About으로 이동합니다. 다시 보기·일시정지와 모션 감소 설정을 지원합니다.
- `about.css`: 프로필·기술 정보, 진입 시 나타나는 돌고래. 말풍선을 누르면 등장을 다시 재생합니다.
- `reef.css`: Portfolio의 프로젝트 선택(01·02·03), 조개를 통한 상세 모달, Contact의 기본 배치.
- Contact의 `#skills-clam`: 조개 자체가 화면에 45% 이상 들어왔을 때 윗뚜껑이 열리고, 내부에서 스킬 아이콘 5개가 순서대로 나타납니다. 다시 열기 버튼을 제공합니다. 모션 감소 설정에서는 열린 조개와 아이콘을 정적으로 표시합니다.
- `script.js`: 각 인터랙션, 모달, 섹션 표시기. 화면 밖이나 숨겨진 탭에서는 인트로의 굴절 프레임 갱신을 중단합니다.

## 콘텐츠 및 참조

제공된 Figma 스크린샷을 참고해 구성했습니다. Figma 링크와 추가 참조 https://www.crechetank.com/ 는 제작 환경에서 HTTP 403으로 차단되어 직접 확인하지 못했습니다.

`beluga.png`, `underwater.png`, `seabed.png`, `shell.png`는 화면 제작을 위해 새로 생성한 에셋입니다. 현재 공통 배경은 `seabed.png`입니다.

Haevichi는 기존 https://github.com/glassbox71/haevichi-tt 저장소에 연결합니다. Onul과 New perspectives는 콘셉트 예시로 표시했습니다. 공개 이메일이 제공되지 않아 연락 버튼은 안내 모달을 엽니다. 실제 프로젝트 설명·프로필·연락 정보는 `index.html`과 `script.js`에서 수정할 수 있습니다.

## GitHub Pages

저장소: https://github.com/glassbox71/seonin

예정 주소: https://glassbox71.github.io/seonin/

GitHub Settings → Pages에서 Source를 **Deploy from a branch**, Branch를 **main**, 경로를 **/(root)**로 선택하면 정적 파일을 게시할 수 있습니다. `.nojekyll`을 포함합니다. Pages 활성화와 공개 주소 접속은 제작 환경에서 검증하지 못했습니다.
