toggleMobileCategory();
togglePcCategory();
fixHeader();

addTicketBtnEvent();

toggleMobileFooter();
addTopBtnEvent();

toggleSearchPage();
toggleRecentlyPage();

//모바일 카테고리 창을 열고 닫음
//모바일 카테고리 내부 아코디언 메뉴를 열고 닫음
function toggleMobileCategory() {
  const categoryCloseIcon = document.querySelector(".mobile-category .close-icon");
  const categoryOpenIcon = document.querySelector(".nav-bar .nav-menu");
  const mobileCategory = document.querySelector(".mobile-category");

  categoryOpenIcon.addEventListener("click", () => {
    mobileCategory.style.left = 0;
    
    document.body.style.overflow = "hidden";
  });

  categoryCloseIcon.addEventListener("click", () => {
    mobileCategory.style.left = "-100%";
    
    document.body.style.overflow = "hidden visible";
  });


  const openableCategorys = document.querySelectorAll(".mobile-category li:has(.category-lv2)");
  
  openableCategorys.forEach(category => {
    const categoryTitle = category.querySelector(".category-title");
  
    categoryTitle.addEventListener("click", () => {
      let isOpen = category.classList.contains("selected-category");
  
      if (!isOpen) {
        closeAllCategory();
        openCategory(category);
      }
      else {
        closeCategory(category);
      }
    });
  });
  
  function openCategory(category) {
    const lv2Category = category.querySelector(".category-lv2");
    let h = lv2Category.scrollHeight;
  
    category.classList.add("selected-category");
    gsap.to(lv2Category, {
      height: h,
      padding: "15px 15px",
      duration: 0.2,
    });
  }
  
  function closeCategory(category) {
    category.classList.remove("selected-category");
    const lv2Category = category.querySelector(".category-lv2");
  
    gsap.to(lv2Category, {
      height: 0,
      padding: "0px 15px",
      duration: 0.2,
    });
  }
  
  function closeAllCategory() {
    openableCategorys.forEach(category => {
      closeCategory(category);
    });
  }
}

//PC 전체 메뉴를 열고 닫음
function togglePcCategory() {
  const menuBtn = document.querySelector(".gnb .menu-btn");
  const pcCategory = document.querySelector(".pc-category");

  menuBtn.addEventListener("click", () => {
    let h = pcCategory.scrollHeight;
    let isOpen = menuBtn.classList.contains("category-open");

    if (!isOpen) {
      pcCategory.style.height = h+"px";
      menuBtn.classList.add("category-open");
    }
    else {
      pcCategory.style.height = 0;
      menuBtn.classList.remove("category-open");
    }
  });
}

//헤더가 고정될 때 아래쪽 border 추가
function fixHeader() {
  const header = document.querySelector(".header-outer");

  window.addEventListener("scroll", () => {
    if (window.scrollY > header.clientHeight) {
      header.classList.add("fixed");
    }
    else {
      header.classList.remove("fixed");
    }
  });
}

//특가 항공권 버튼을 한 번 더 누를 시 취소
function addTicketBtnEvent() {
  const ticketBtns = document.querySelectorAll(".special-ticket-box .ticket-btn-box label");
  const defaultRad = document.getElementById("rad-ticket-default");
  
  ticketBtns.forEach(btn => {
    btn.addEventListener("click", e => {
      let radio = document.getElementById(btn.htmlFor);
  
      if (radio.checked) {
        e.preventDefault();
        defaultRad.checked = true;
      }
    });
  });
}

//footer의 정보를 열고 닫음
function toggleMobileFooter() {
  const footerMenus = document.querySelectorAll(".footer-menu");

  footerMenus.forEach(footerMenu => {
    const footerTitle = footerMenu.querySelector(".footer-title");
  
    footerTitle.addEventListener("click", () => {
      let mm = gsap.matchMedia();

      mm.add("(max-width: 768px)", () => {
        let isOpen = footerMenu.classList.contains("open-menu");
        const footerTxt = footerMenu.querySelector(".footer-txt");
  
        if (!isOpen) {
          let h = footerTxt.scrollHeight;
        
          footerMenu.classList.add("open-menu");
          gsap.to(footerTxt, {
            height: h,
            padding: "10px 15px",
            duration: 0.2,
          });
        }
        else {
          footerMenu.classList.remove("open-menu");
          gsap.to(footerTxt, {
            height: 0,
            padding: "0 15px",
            duration: 0.2,
          });
        }
      });
    });
  });
}

//탑버튼을 누를 시 천천히 올라감
function addTopBtnEvent() {
  const topBtn = document.querySelector(".fix-btn-box .top-btn");

  topBtn.addEventListener("click", () => {
    gsap.to(window, {
      duration: window.scrollY / document.body.scrollHeight,
      scrollTo: {
        y: 0,
        autoKill: true,
      }
    });
  });
}

//검색 창을 열고 닫음
function toggleSearchPage() {
  const searchPage = document.querySelector(".search-page");
  const pcSearchBar = document.querySelector(".header .search-box input[type='search']");
  const mobileSearchIcon = document.querySelector(".header .header-btn.mobile .search-icon");
  const closeIcon = searchPage.querySelector(".close-icon");

  pcSearchBar.addEventListener("focus", () => {
    let h = searchPage.scrollHeight;

    searchPage.style.height = h+"px";
    searchPage.style.left = window.innerWidth > 1070 ? "calc(var(--column-width) * 2 + 10px + (100% - 1070px) / 2)" : "calc(var(--column-width) * 2 + 10px";
  });

  pcSearchBar.addEventListener("blur", () => {
    searchPage.style.height = 0;
  });

  mobileSearchIcon.addEventListener("click", () => {
    searchPage.style.left = 0;
    searchPage.style.height = "100vh";
    
    document.body.style.overflow = "hidden";
  });

  closeIcon.addEventListener("click", () => {
    searchPage.style.left = "-100%";

    document.body.style.overflow = "hidden visible";
  });
}

//최근 본 상품 창을 열고 닫음
function toggleRecentlyPage() {
  const recentlyBg = document.querySelector(".recently-bg");
  const recentlyPage = recentlyBg.querySelector(".recently-page");
  const pcRecentlyIcon = document.querySelector(".header .recently-btn");
  const mobileRecentlyIcon = document.querySelector(".nav-bar .nav-recently");
  const closeIcon = recentlyBg.querySelector(".close-icon");

  mobileRecentlyIcon.addEventListener("click", () => {
    recentlyBg.style.right = 0;
    gsap.to(recentlyPage, {
      right: 0,
      duration: 0.3,
      onStart: () => {
        document.body.style.overflow = "hidden";
      }
    });
  });

  pcRecentlyIcon.addEventListener("click", () => {
    recentlyBg.style.right = 0;
    gsap.to(recentlyPage, {
      right: 0,
      duration: 0.3,
      onStart: () => {
        document.body.style.overflow = "hidden";
      }
    });
  });

  closeIcon.addEventListener("click", () => {
    gsap.to(recentlyPage, {
      right: "-100%",
      duration: 0.3,
      onComplete: () => {
        recentlyBg.style.right = "-100%";
        document.body.style.overflow = "hidden visible";
      }
    });
  });
}