# 우리만의 포켓몬도감

>기간: 2024.06.10 ~ 2024.07.16<br>
배포: https://yoo-nji.github.io/pokemon/


## 페이지 전체보기
| 포켓몬 도감(메인) | 포켓몬 게임 |
| --- | --- |
| <img src="https://github.com/user-attachments/assets/8c70e21a-d9da-48a1-bc44-939471dfe946" alt="메인전체" style="width:100%; height:auto;"> |  <img src="https://github.com/user-attachments/assets/21e851d9-1745-409a-8188-3f0a6864145f" alt="미니게임전체" style="width:100%; height:auto;"> |



## 프로젝트 개요
>우리만의 포켓몬도감은 포켓몬 공식 API를 바탕으로 포켓몬의 정보를 조회하고, 이름 퀴즈나 포켓몬 카드 뒤집기 같은 미니게임을 통해 사용자에게 학습과 재미를 동시에 제공하는 프로젝트입니다. 

초기 CSS, HTML, JS를 사용하여 기본적인 기능을 구현하였으며, 태블릿과 모바일까지 대응 가능한 반응형 웹 디자인을 적용하여 **다양한 디바이스에서 최적의 사용자 경험을 제공**합니다. 이후 Vue.js와 Vuetify를 이용해 포켓몬의 상세 정보를 볼 수 있게 구현하여 **기능성을 강화**하고자 했습니다.

팀 작업이 완료된 후 **개인적으로 디벨롭 작업을 이어나가고 있으며, 향후 React로의 마이그레이션 및 Next.js를 활용한 SSR 지원을 통해 성능 최적화와 검색엔진 최적화를 계획하고 있습니다.**

## 구현 화면
| 스크롤 감지 데이터 로드 |  속성필터링 |
| --- | --- |
| ![포켓몬-로딩바](https://github.com/user-attachments/assets/041b253e-abee-4a43-b1d7-b0b873137ed1) | ![속성필터링](https://github.com/user-attachments/assets/c065dc74-4484-4721-aa1d-695358498c17)|

| 다국어 검색(한일영) | 정규식 검색어 피드백 문구 제공 |
| --- | --- |
|  ![다국어 검색](https://github.com/user-attachments/assets/6db5d40c-50af-47b0-8bec-3e86567f9d13)| ![정규식-검색어-감지-피드백](https://github.com/user-attachments/assets/763afe24-8805-4682-a4d2-6b5dbd8b67e4)  |

| 다크모드 | 스크롤 투 탑 |
| --- | --- |
| ![다크모드](https://github.com/user-attachments/assets/ec87b7fb-2185-48aa-a721-85e7ca4d8da8)  | ![상위로-이동](https://github.com/user-attachments/assets/6ded468a-c755-4079-bf9f-7049052a680c) |

| 상세모달(한일영 탭) | 게임메인 |
| --- | --- |
| ![포켓몬-상세-모달](https://github.com/user-attachments/assets/80ff7708-8aa9-42b1-bfb2-fff8bbb3e1c2) | ![게임메인](https://github.com/user-attachments/assets/614cf82c-ec4f-428a-a71c-4297123bd77e)  | 


| 포켓몬 이름 퀴즈 | 카드 짝 맞추기 | 
| --- | --- |
| ![포켓몬-이름퀴즈](https://github.com/user-attachments/assets/c406fbae-bc1d-4276-b8a8-11fb2c163e28) | ![포켓몬-카드](https://github.com/user-attachments/assets/d35db122-e790-4bb0-a702-619d16ea7740)|


## 팀 소개
|  | 권윤지 (Leader) | 유혜인 |
| --- | --- | --- |
| **Profile** | <img src="https://github.com/user-attachments/assets/2fd07733-8316-4c97-8f4e-fd66c0e82fb6" width="150" height="150"> | <img src="https://github.com/user-attachments/assets/b5a24df4-177b-4fde-a5a8-a54d04570032" width="150" height="150"> |
| **GitHub** | [@yoo-nji](https://github.com/yoo-nji) | [@yu-hazel](https://github.com/yu-hazel) |
| **Role** | PM, Frontend Developer | Publisher |
| **Responsibilities** | - 프로젝트 기획 <br> - 프론트엔드 기술 담당 <br> - 포켓몬 이름 퀴즈 게임 | - 퍼블리싱 작업 <br> - 카드 짝맞추기 게임 |

## 사용 기술
### Language
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

### Framework
![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)
![Vuetify](https://img.shields.io/badge/Vuetify-1867C0?style=for-the-badge&logo=vuetify&logoColor=AEDDFF)

### Library
![Vue Router](https://img.shields.io/badge/vue--router-%234FC08D.svg?style=for-the-badge&logo=vue.js&logoColor=white)
![Lottie](https://img.shields.io/badge/Lottie-%2300C7B7.svg?style=for-the-badge&logo=lottie&logoColor=white)
![Nes.css](https://img.shields.io/badge/nes.css-%23E34F26.svg?style=for-the-badge&logo=nes.css&logoColor=white)

### Tools
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/VisualStudioCode-%23007ACC.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)




## 트러블슈팅

### API 데이터 로딩 속도 문제
<table>
  <tr>
    <th width="100">문제 배경</th>
    <td>API에서 불러오는 데이터 로딩 속도가 느리다. 데이터를 불러올 때마다 카드가 하나씩 생성되며 로딩 속도 지연이 시각적으로 드러나게 됨</td>
  </tr>
  <tr>
    <th>문제 원인</th>
    <td>포켓몬 데이터 로딩이 완료되기 전에 페이지에 데이터를 바로 표시하려다 보니 로딩이 느리게 느껴짐.</td>
  </tr>
  <tr>
    <th>해결 과정</th>
    <td>로딩 화면을 추가하여 일부 데이터를 불러올 때까지 로딩 화면을 표시하고, 데이터 로딩이 완료된 후에만 화면을 갱신하도록 수정함. 또한, 로딩 중에는 스크롤을 비활성화하여 사용자 경험을 개선함.</td>
  </tr>
  <tr>
    <th>알게 된 점</th>
    <td>로딩 속도가 느릴 때 사용자 경험을 개선하는 방법을 학습하였으며, 로딩 중 스크롤을 비활성화하는 방법을 터득함.</td>
  </tr>
</table>

### 상세 페이지 스크롤 위치 문제
<table>
  <tr>
     <th width="100">문제 배경</th>
    <td>동적 라우트로 구성된 포켓몬 상세 페이지에서 메인으로 돌아왔을 때 스크롤 위치가 초기화됨.</td>
  </tr>
  <tr>
    <th>문제 원인</th>
    <td>무한 스크롤 로직 때문에 스크롤 위치가 저장되지 않음.</td>
  </tr>
  <tr>
    <th>해결 과정</th>
    <td>상세 페이지를 뷰티파이 모달로 변경하여 메인 페이지의 스크롤 위치를 유지하도록 설계 변경.</td>
  </tr>
  <tr>
    <th>알게 된 점</th>
    <td>모달을 사용하여 사용자 경험을 개선함</td>
  </tr>
</table>

### 검색 기능 구현
<table>
  <tr>
    <th width="100">문제 배경</th>
    <td>검색 기능을 설계할 때 영어 이름을 기준으로 API 요청을 보냈으나, 일부 포켓몬은 영어 이름으로 검색이 불가능한 경우가 발생.</td>
  </tr>
  <tr>
    <th>문제 원인</th>
    <td>포켓몬 이름에 하이픈이 들어가는 등 예외적인 경우가 존재하여 검색이 제대로 되지 않음.</td>
  </tr>
  <tr>
    <th>해결 과정</th>
    <td>포켓몬 ID를 이용해 API 요청을 보내도록 수정하여 검색 기능을 개선함. 추가로 데이터 매칭으로 한국어, 영어, 일본어 검색을 모두 지원하도록 기능을 확장함.</td>
  </tr>
  <tr>
    <th>알게 된 점</th>
    <td>포켓몬 API의 다양한 검색 방법을 이해하게 되었고, 다국어 검색 기능을 지원하는 방법을 학습함.</td>
  </tr>
</table>

### API 데이터 null
<table>
  <tr>
   <th width="100">문제 배경</th>
    <td>700번대 이후 포켓몬 데이터가 API에서 불러와지지 않는 문제 발생.</td>
  </tr>
  <tr>
    <th>문제 원인</th>
    <td>API 응답에 해당 포켓몬의 GIF가 존재하지 않음.</td>
  </tr>
  <tr>
    <th>해결 과정</th>
    <td>조건문을 사용하여 GIF가 존재하지 않을 경우 PNG 파일을 가져오도록 수정.</td>
  </tr>
  <tr>
    <th>알게 된 점</th>
    <td>API 응답 처리 시 예외 상황에 대한 대처 방법을 학습함.</td>
  </tr>
</table>

### 속성 검색 후 포켓몬 검색 시 배경색 문제
<table>
  <tr>
  <th width="100">문제 배경</th>
    <td>속성 검색 후 포켓몬을 검색할 때 배경색이 변경되지 않음. 예를 들어, 물 속성 필터링 후 피카츄를 검색하면 배경색이 필터링한 색으로 유지됨.</td>
  </tr>
  <tr>
    <th>문제 원인</th>
    <td>포켓몬 필터가 저장되는 변수에 따라 배경값이 정해지기 때문에 포켓몬 검색 시 해당 변수가 초기화되지 않음.</td>
  </tr>
  <tr>
    <th>해결 과정</th>
    <td>검색 시 필터링 값을 저장한 변수를 초기화하여 검색된 포켓몬의 배경색이 정상적으로 표시되도록 수정함. 이후 디자인 변경을 통해 배경색을 통일하여 해당 문제를 완전히 해결.</td>
  </tr>
  <tr>
    <th>알게 된 점</th>
    <td>필터링 값이 검색 시 초기화되지 않아 발생하는 문제를 해결함.</td>
  </tr>
</table>

### 키워드 검색 구현
<table>
  <tr>
  <th width="100">문제 배경</th>
    <td>속성 필터링 시 기존에 로드된 포켓몬 데이터에만 필터가 적용되고, 새로 불러와지는 데이터에는 적용되지 않는 문제 발생.</td>
  </tr>
  <tr>
    <th>문제 원인</th>
    <td>속성 필터링 로직이 새로 요청된 데이터를 포함하지 않음.</td>
  </tr>
  <tr>
    <th>해결 과정</th>
    <td>속성 필터링 버튼 클릭 시 API를 새로 요청하는 흐름으로 수정.</td>
  </tr>
  <tr>
    <th>알게 된 점</th>
    <td>필터링 로직을 구현할 때 API 요청과 데이터 처리 방법을 학습함.</td>
  </tr>
</table>


### 무한 스크롤 중단점 문제
<table>
  <tr>
    <th width="100">문제 배경</th>
    <td>데이터를 다 불러온 이후에도 스크롤을 하면 화면 렉이 발생.</td>
  </tr>
  <tr>
    <th>문제 원인</th>
    <td>스크롤을 감지하여 데이터를 불러오는데 중단점이 없어 무한으로 없는 데이터를 불러오려고 해서 화면 버벅임이 있었음. </td>
  </tr>
  <tr>
    <th>해결 과정</th>
    <td>무한 스크롤 중단점을 만들어 더 많은 포켓몬이 있는지 확인하고, 모든 데이터를 불러오면 끝 메시지를 표시하도록 수정함.</td>
  </tr>
  <tr>
    <th>알게 된 점</th>
    <td>무한 스크롤 구현 시 데이터의 끝을 적절히 처리하는 방법을 학습함.</td>
  </tr>
</table>


### 디자인 컨셉 변경
<table>
  <tr>
   <th width="100">문제 배경</th>
    <td>기존의 라운드 디자인에서 픽셀아트 스타일의 레트로 디자인으로 변경하여 일관된 디자인 컨셉을 유지하고자 함.</td>
  </tr>
  <tr>
    <th>문제 원인</th>
    <td>기존 디자인이 프로젝트의 레트로 컨셉과 맞지 않아 전반적인 디자인 수정이 필요함.</td>
  </tr>
  <tr>
    <th>해결 과정</th>
    <td>NES.css 라이브러리를 활용하여 픽셀아트 스타일로 카드, 버튼 등을 수정하고, 전체적인 색상과 스타일을 레트로 느낌으로 변경함.</td>
  </tr>
  <tr>
    <th>알게 된 점</th>
    <td>디자인 프레임워크를 활용하여 원하는 디자인 컨셉을 구현하는 방법을 학습하고, 일관된 디자인을 유지하는 중요성을 깨달음.</td>
  </tr>
</table>

### 다크모드 전환 시 순차적 변경 문제
<table>
  <tr>
   <th width="100">문제 배경</th>
    <td>다크모드 전환 시 각 요소가 순차적으로 변경되어 사용자 경험이 떨어짐.</td>
  </tr>
  <tr>
    <th>문제 원인</th>
    <td>각 태그에 개별적으로 다크모드를 적용하면서 순차적으로 변경됨.</td>
  </tr>
  <tr>
    <th>해결 과정</th>
    <td>body 태그에 다크모드 클래스를 추가하여 하위 모든 태그가 한 번에 다크모드로 변경되도록 수정.</td>
  </tr>
  <tr>
    <th>알게 된 점</th>
    <td>전역 스타일 적용의 중요성과 사용자 경험 개선을 위해 전체 스타일을 한 번에 적용하는 방법을 학습함.</td>
  </tr>
</table>





