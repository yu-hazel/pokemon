# 우리만의 포켓몬 도감


<img width="1691" alt="스크린샷 2024-08-05 오후 2 41 17" src="https://github.com/user-attachments/assets/39f361b5-5830-49b3-b7e6-1897f495629d">

<br>
<br>

이 프로젝트는 pokeAPI를 활용하여 포켓몬 도감을 확인하고, 미니 게임들을 플레이할 수 있는 프로그램 구현을 위하여 진행되었습니다. <br>
API 활용, 퍼블리싱, 게임 구현에 중점을 두었습니다. <br>

<br>

## 개요
- 프로젝트명 : 우리만의 포켓몬 도감
- 프로젝트 진행 기간 : 2024.06.10 ~ 2024.07.16
- [배포 주소](https://yoo-nji.github.io/pokemon/)

<br>

## 팀원 소개
|  | 권윤지 (Leader) | 유혜인 |
| --- | --- | --- |
| **Profile** | <img src="https://github.com/user-attachments/assets/2fd07733-8316-4c97-8f4e-fd66c0e82fb6" width="150" height="150"> | <img src="https://github.com/user-attachments/assets/b5a24df4-177b-4fde-a5a8-a54d04570032" width="150" height="150"> |
| **GitHub** | [@yoo-nji](https://github.com/yoo-nji) | [@yu-hazel](https://github.com/yu-hazel) |
| **Role** | PM, Frontend Developer | Publisher |
| **Responsibilities** | - 프로젝트 기획 <br> - 프론트엔드 기술 담당 <br> - 포켓몬 이름 퀴즈 게임 | - 퍼블리싱 작업 <br> - 카드 짝맞추기 게임 |

<br>

## 기술 스택

![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)
![Vuetify](https://img.shields.io/badge/Vuetify-1867C0?style=for-the-badge&logo=vuetify&logoColor=AEDDFF)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)

<br>

## 피그마 디자인보드

![image](https://github.com/user-attachments/assets/b42527c1-e6b7-4a08-aa72-89bcdcc79a2a)

<br>

## 구현 페이지 및 기능

![poke01](https://github.com/user-attachments/assets/f349ebaa-994d-44c4-a916-35ebc5e09873) | ![다크모드](https://github.com/user-attachments/assets/49f2f8b5-a5b6-4adf-aa3c-6094ff099b1c)
| :---: | :---: |
| 메인 페이지 | 다크모드 |

![카드게임1](https://github.com/user-attachments/assets/1922ccfd-e7d6-4855-99e5-8989cc17c43c) | ![카드게임2](https://github.com/user-attachments/assets/60e4a9a1-7318-4839-b561-1788bc2553f8)
| :---: | :---: |
| 카드게임 (라이트모드) | 카드게임 (다크모드) |

<br>

## 카드 짝 맞추기 게임 로직


| 단계           | 설명                                                                                       |
|----------------|--------------------------------------------------------------------------------------------|
| **포켓몬 데이터 로드** | - DOMContentLoaded 이벤트 발생 시 `loadPokemons` 함수 호출 <br> - PokeAPI에서 10개의 랜덤 포켓몬 데이터 가져옴 <br> - 10개의 포켓몬을 중복시켜 20개의 카드 배열 생성 <br> - 카드 배열을 랜덤하게 섞고, 화면에 카드 그림  |
| **카드 클릭 및 뒤집기** | - 각 카드에 클릭 이벤트 리스너 추가 <br> - 클릭 시 `flipCard` 함수 호출 <br> - 첫 번째 카드와 두 번째 카드 확인 및 비교  |
| **카드 매칭 확인**  | - `checkForMatch` 함수로 두 카드의 이름을 비교 <br> - 일치하면 `disableCards` 함수 호출 <br> - 불일치하면 `unflipCards` 함수 호출  |
| **카드 일치 시 처리** | - `disableCards` 함수로 두 카드 비활성화 <br> - 매치된 카드로 표시 <br> - 매치 수 증가 <br> - 모든 카드 매치 시 게임 완료 메시지 표시  |
| **카드 불일치 시 처리** | - `unflipCards` 함수로 두 카드 다시 뒤집음  |
| **게임 재시작**    | - "다시 하기" 버튼 클릭 시 게임 초기화 <br> - 새로운 포켓몬 카드 로드  |


