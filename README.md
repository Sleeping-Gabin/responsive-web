## 소개
여행 예약 플랫폼 마이리얼트립 사이트를 반응형으로 리뉴얼 하는 프로젝트  
PC / 태블릿 / 모바일에 대응되는 반응형 웹    
<br>

### 배포 주소
[배포 주소](https://sleeping-gabin.github.io/responsive-web/)  
<br>

### 원본 사이트
[마이리얼트립](https://www.myrealtrip.com/)  
프로젝트의 모든 이미지와 콘텐츠 내용에 대한 저작권은 마이리얼트립에 있습니다.  
포트폴리오 용도로만 사용되었습니다.  
<br>

### 사용 기술
![html](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![css](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css&logoColor=white)
![js](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white)
![gsap](https://img.shields.io/badge/gsap-0AE448?style=for-the-badge&logo=gsap&logoColor=white)  

<br><br>

## 프로젝트 진행 과정
2025.06.09 ~ 2025.06.30 
5인 팀 프로젝트  
팀원과 함께 기획을 진행하고 이후 각자 개발  
<br>

### 기획
2025.06.09 ~ 2025.06.20  
아이템 선정 > 자사/경쟁사 분석 > 트렌드 도출 > 타겟 설정 > 콘셉트 설정 > 아이디어 스케치 > 시안  
[기획서]()  
<br>

### 역할
- 공통 자료 조사 및 콘텐츠 개발을 위한 회의 참여
- UI 부문 경쟁사 분석
- 메인 페이지 일부, header, footer 시안 제작
- 콘셉트 도출을 위한 브레인스토밍과 어피니티 다이어그램에 참여  
<br>

### 개발
2025.06.23 ~ 2025.06.30


<br><br>

## 페이지
### 메인 페이지
|pc   |태블릿|모바일|
|:---:|:---:|:---:|
|![메인 pc](https://github.com/user-attachments/assets/e69c2a73-f7d9-4731-b7e3-61863f8a8a8c)|![메인 태블릿](https://github.com/user-attachments/assets/18fcc830-1804-4439-8627-4f4fe4667406)|![메인 모바일](https://github.com/user-attachments/assets/1f318182-9e67-45cd-8730-d85592bc7c66)|

### 서브 페이지
|pc   |태블릿|모바일|
|:---:|:---:|:---:|
|![서브 pc](https://github.com/user-attachments/assets/6d7dd71e-b8a5-4486-9fa3-6fc3848adf35)|![서브 태블릿](https://github.com/user-attachments/assets/fe2e9cee-8a87-4598-a21d-12860cdfeec2)|![서브 모바일](https://github.com/user-attachments/assets/d5c71b83-744e-4bb2-a212-9d2702ee115d)|

<br><br>

## 구현 내용
### media query 사용
```css
/* ... */

@media all and (min-width: 601px) and (max-width: 768px) { /* ... */ }

@media all and (min-width: 601px) { /* ... */ }

@media all and (min-width: 769px) { /* ... */ }

@media all and (min-width: 769px) and (max-width: 1070px) { /* ... */ }

@media all and (min-width: 1071px) { /* ... */ }

@media all and (min-width: 1440px) { /* ... */ }
```
모바일을 기준으로 하여 css로 스타일을 추가하고,  
media query를 이용해 태블릿 / 태블릿 이상 / pc / 저해상도 pc / 고해상도 pc / 최대 배너 길이 이상에 해당하는 디바이스에서의 스타일을 변경하였다.  
<br>

### grid 레이아웃
|pc          |태블릿       |모바일       |
|:----------:|:----------:|:----------:|
|![pc](https://github.com/user-attachments/assets/a2ba162a-c298-4daf-9f6c-7ba1fcf3e419)|![태블릿](https://github.com/user-attachments/assets/0b1a0495-35d9-418b-b65e-c827d748cd4f)|![모바일](https://github.com/user-attachments/assets/d2a68f91-c544-450b-9b26-ff57949fe8c2)|

<details>
<summary>코드 보기</summary>

```css
.best-section {
  display: grid;
  margin-bottom: 70px;
  padding: 0 10px;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.best-section .best-trip:first-of-type {
  grid-column: 1;
  grid-row: 1 / 3;
}

@media all and (min-width: 601px) and (max-width: 768px) {
  .best-section .best-trip:last-of-type {
    display: none;
  }

  .best-section .best-trip:first-of-type,
  .best-section .best-trip {
    grid-column: auto;
    grid-row: auto;
  }
}

@media all and (min-width: 769px) {
  .best-section {
    display: flex;
    padding: 0;
  }

  .best-section .best-trip {
    width: calc(var(--column-width) * 2 + 10px * 1);
    height: 300px;
    transition: all 300ms;
  }

  .best-section .best-trip.selected-best {
    width: calc(var(--column-width) * 4 + 10px * 3);
  }
}
```
</details>

인기 여행지 섹션에서 grid로 모바일과 태블릿에서의 레이아웃을 구성하였다.  
pc에서는 flex를 이용하고 마우스 호버와 애니메이션 효과를 추가했다.  
<br>

### picture 태그 사용
<details>
<summary>코드 보기</summary>

```html
<div class="swiper-wrapper">
  <div class="swiper-slide">
    <picture>
      <source media="(min-width: 1070px)" srcset="./images/visualmain/visualmain_1_wide.jpg">
      <source media="(min-width: 769px)" srcset="./images/visualmain/visualmain_1_pc.jpg">
      <source media="(min-width: 601px)" srcset="./images/visualmain/visualmain_1_tablet.jpg">
      <source media="(min-width: 320px)" srcset="./images/visualmain/visualmain_1_mobile.jpg">
      <img src="./images/visualmain/visualmain_1.jpg" alt="비주얼메인1" width="100%">
    </picture>
  </div>
  ...
</div>
```
</details>

비주얼 메인과 배너에서 picture 태그를 이용해  
각 디바이스에서 적절한 사이즈와 해상도의 이미지가 보이게 했다.  
<br>

### 메뉴/검색/최근 본 상품 drawer
|pc          |태블릿       |모바일       |
|:----------:|:----------:|:----------:|
|![pc](https://github.com/user-attachments/assets/430c6648-d2e9-434b-9815-5ac8cb865851)|![태블릿](https://github.com/user-attachments/assets/4183651d-631f-4e96-be15-d3cb52b548e9)|![모바일](https://github.com/user-attachments/assets/c381996e-a14a-4092-a1fa-f9ec9f82599f)|

<details>
<summary>코드 보기</summary>

```js
function toggleRecentlyPage() {
  const recentlyBg = document.querySelector(".recently-bg");
  const recentlyPage = recentlyBg.querySelector(".recently-page");
  const pcRecentlyIcon = document.querySelector(".header .recently-btn");
  const mobileRecentlyIcon = document.querySelector(".nav-bar .nav-recently");
  const closeIcon = recentlyBg.querySelector(".close-icon");

  mobileRecentlyIcon.addEventListener("click", () => {
    recentlyBg.style.right = 0;
    gsap.to(recentlyPage, {
      right: "0",
      duration: 0.3,
    });
  });

  pcRecentlyIcon.addEventListener("click", () => {
    recentlyBg.style.right = 0;
    gsap.to(recentlyPage, {
      right: "0",
      duration: 0.3,
    });
  });

  closeIcon.addEventListener("click", () => {
    gsap.to(recentlyPage, {
      right: "-100%",
      duration: 0.3,
      onComplete: () => {
        recentlyBg.style.right = "-100%";
      }
    });
  });
}
```
</details>

태블릿/모바일에서 전체 메뉴, 최근 본 상품, 검색 창이 화면 옆에서 드나들도록 구현하였다.  
<br>

### 디바이스별 적절한 레이아웃 구성
|pc   |태블릿|모바일|
|:---:|:---:|:---:|
|![항공권 pc](https://github.com/user-attachments/assets/3d34c5fb-5199-4451-838e-861fd0a276b3)|![항공권 태블릿](https://github.com/user-attachments/assets/1ff9ec5e-5ac2-4283-b1cb-85f0fde25914)|![항공권 모바일](https://github.com/user-attachments/assets/23eee6bc-2c69-4c93-9e06-d6db3373c191)|
|![테마 pc](https://github.com/user-attachments/assets/c0cd9df7-e755-427b-a337-a85787ea2c40)|![테마 태블릿](https://github.com/user-attachments/assets/f837ac15-f95f-42f3-98f6-c5d81c32171a)|![테마 모바일](https://github.com/user-attachments/assets/6659fdb8-6734-42e6-8db4-b4710bd4ce21)|

디바이스의 특징에 맞게 콘텐츠의 레이아웃을 다르게 구성하였다.