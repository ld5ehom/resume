/* text_iife.js */
(function(){   // 텍스트 작성과 삭제 즉시 실행 함수

  // main tag h2 <span>
  const spanEl = document.querySelector("main h2 span");
  const textArray = ['TaeWook Park', 'Software Developer', 'iOS Developer'];
  let index = 0;
  let currentText = textArray[index].split(""); //text array 문자열 추출

  function writeText(){
    spanEl.textContent  += currentText.shift(); //가장 앞글자 추출
    if(currentText.length !== 0){  //배열의 길이가 0이 아닐 때
      setTimeout(writeText, Math.floor(Math.random() * 100)); //일정 시간 뒤 특정 함수 실행 (1000 = 1 sec)
    }else{  // empty array
      currentText = spanEl.textContent.split(""); // Array 복구 
      setTimeout(deleteText, 3000);
    }
  }

  function deleteText(){
    currentText.pop(); // array last element
    spanEl.textContent = currentText.join("");  //하나의 문자열로 합침
    if(currentText.length !== 0){
      setTimeout(deleteText, Math.floor(Math.random() * 100))
    }else{
      index = (index + 1) % textArray.length;  //배열 반복
      currentText = textArray[index].split("");  //다시 채워줌
      writeText();
    }
  }

  writeText();
})();
/* end text_iife.js */


/* (Navbar) scroll check -> header 태그에 active 클래스 추가 및 삭제 */
const headerEl = document.querySelector("header");
window.addEventListener('scroll', function(){  //scroll event 연결
  requestAnimationFrame(scrollCheck);  //웹브라우저가 허용한 범위 안에서 스크롤
});

function scrollCheck(){
  let browerScrollY = window.scrollY ? window.scrollY : window.pageYOffset; // Y value
  if(browerScrollY > 0){
    headerEl.classList.add("active");
  }else{
    headerEl.classList.remove("active");
  }
}
/* end scroll_request.js */

/* Navbar scroll animation move */
const animationMove = function(selector){
  // 1) selector 매개변로 이동할 대상 요소 노드 가져오기
  const targetEl = document.querySelector(selector);
  // 2) 현재 브라우저의 스크롤 정보(y 값)
  const browserScrollY = window.pageYOffset;
  // 3) 이동할 대상의 위치(y 값)
  const targetScorllY = targetEl.getBoundingClientRect().top + browserScrollY;
  // 4) 스크롤 이동
  window.scrollTo({ top: targetScorllY, behavior: 'smooth' });
};

// connect to scroll event, find -> data-animation-scroll='true' 
const scollMoveEl = document.querySelectorAll("[data-animation-scroll='true']"); 
for(let i = 0; i < scollMoveEl.length; i++){
  scollMoveEl[i].addEventListener('click', function(e){
    const target = this.dataset.target;
    animationMove(target);
  });
}



'use strict'

/**
 * 페이지 스크롤에 따른 요소 제어
 */
// 페이지 스크롤에 영향을 받는 요소들을 검색!
const badgeEl = document.querySelector('header .badges')
const toTopEl = document.querySelector('#to-top')
// 페이지에 스크롤 이벤트를 추가!
// 스크롤이 지나치게 자주 발생하는 것을 조절(throttle, 일부러 부하를 줌)
window.addEventListener('scroll', _.throttle(function () {
  // 페이지 스크롤 위치가 500px이 넘으면.
  if (window.scrollY > 500) {
    // Badge 요소 숨기기!
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    })
    // 상단으로 스크롤 버튼 보이기!
    gsap.to(toTopEl, .2, {
      x: 0
    })

  // 페이지 스크롤 위치가 500px이 넘지 않으면.
  } else {
    // Badge 요소 보이기!
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    })
    // 상단으로 스크롤 버튼 숨기기!
    gsap.to(toTopEl, .2, {
      x: 100
    })
  }
}, 300))
// 상단으로 스크롤 버튼을 클릭하면,
toTopEl.addEventListener('click', function () {
  // 페이지 위치를 최상단으로 부드럽게(0.7초 동안) 이동.
  gsap.to(window, .7, {
    scrollTo: 0
  })
})


/**
 * 순서대로 나타나는 기능
 */
// 나타날 요소들(.fade-in) 찾기.
const fadeEls = document.querySelectorAll('.visual .fade-in')
// 나타날 요소들을 하나씩 반복해서 처리!
fadeEls.forEach(function (fadeEl, index) {
  // 각 요소들을 순서대로(delay) 보여지게 함!
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  })
})






/**
 * portfolio- carousel 슬라이드 요소 관리
 */
// Swiper (선택자 , 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical', // 수직 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true // 반복 재생 여부
})
// Emd Swiper (선택자 , 옵션)

/* Project 1 carousel*/
new Swiper('.project1-carousel .swiper-container',{
  // direction: 'horizontal', // 수평 슬라이드
  autoplay: { // 자동 재생 여부
    delay: 5000 // 5초마다 슬라이드 바뀜
  },
  loop: true, // 반복 재생 여부
  slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백(px)
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기(가운데 시작)
  pagination: { // 페이지 번호 사용 여부
    el: '.project1-carousel .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: { // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: '.project1-carousel .swiper-prev', // 이전 버튼 선택자
    nextEl: '.project1-carousel .swiper-next' // 다음 버튼 선택자
  }
})
/* End Project 1 carousel*/

/* Project 2 carousel*/
new Swiper('.project2-carousel .swiper-container',{
  // direction: 'horizontal', // 수평 슬라이드
  autoplay: { // 자동 재생 여부
    delay: 3000 // 5초마다 슬라이드 바뀜
  },
  loop: true, // 반복 재생 여부
  slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백(px)
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기(가운데 시작)
  pagination: { // 페이지 번호 사용 여부
    el: '.project2-carousel .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: { // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: '.project2-carousel .swiper-prev', // 이전 버튼 선택자
    nextEl: '.project2-carousel .swiper-next' // 다음 버튼 선택자
  }
})
/* End Project 2 carousel*/

/* Project 3 carousel*/
new Swiper('.project3-carousel .swiper-container',{
  // direction: 'horizontal', // 수평 슬라이드
  autoplay: { // 자동 재생 여부
    delay: 3000 // 5초마다 슬라이드 바뀜
  },
  loop: true, // 반복 재생 여부
  slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백(px)
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기(가운데 시작)
  pagination: { // 페이지 번호 사용 여부
    el: '.project3-carousel .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: { // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: '.project3-carousel .swiper-prev', // 이전 버튼 선택자
    nextEl: '.project3-carousel .swiper-next' // 다음 버튼 선택자
  }
})
/* End Project 3 carousel*/

/* Personal carousel*/
new Swiper('.personal-carousel .swiper-container', {
  // direction: 'horizontal', // 수평 슬라이드
  autoplay: { // 자동 재생 여부
    delay: 5000 // 5초마다 슬라이드 바뀜
  },
  loop: true, // 반복 재생 여부
  slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  pagination: { // 페이지 번호 사용 여부
    el: '.personal-carousel .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: { // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: '.personal-carousel .swiper-prev', // 이전 버튼 선택자
    nextEl: '.personal-carousel .swiper-next' // 다음 버튼 선택자
  }
})
/* End Personal  carousel*/
// 캐러셀 끝





/**
 * Project 2 슬라이드 토글
 */
// 슬라이드 영역 요소 검색!
const project2El = document.querySelector('.project2-carousel')
// 슬라이드 영역를 토글하는 버튼을 클릭하면 위를 열거나 닫는다!
const project2ToggleBtn = document.querySelector('.toggle-project_2')
// 슬라이드 영역 숨김 여부 기본값! 숨김설정 True
let project2HideCarousel = false;
// 아이콘 요소 검색!
const project2Icon = document.getElementById('project2-carousel-icon')
// close 아이콘 
const project2CloseIcon = document.getElementById('toggle-close-icon-2')

// 초기 설정: .project2-carousel을 숨김 상태로 설정
// project2El.classList.add('hide');

// 토글 버튼을 클릭하면 함수 동작
project2ToggleBtn.addEventListener('click', function () {
  // 슬라이드 영역 숨김 여부를 반댓값으로 할당!
  project2HideCarousel = !project2HideCarousel
  // 요소를 숨겨야 하면,
  if (project2HideCarousel) {
    project2El.classList.add('hide') // 숨김
  } else {
    project2El.classList.remove('hide') // 요소가 보여야 하면,
  }
  // 아이콘을 토글!
  if (project2Icon.innerText === 'upload') {
    project2Icon.innerText = 'download'
  } else {
    project2Icon.innerText = 'upload'
  }
})

// close 아이콘을 클릭하면 함수 동작
if (project2CloseIcon) {
  project2CloseIcon.addEventListener('click', function () {
    // 슬라이드 영역 숨김 여부를 true로 설정
    project2HideCarousel = true;
    project2El.classList.add('hide'); // 숨김
    // 아이콘을 download로 설정
    project2Icon.innerText = 'download';
  });
}
// End Project 2 슬라이드 토글


/**
 * Project 3 슬라이드 토글
 */
// 슬라이드 영역 요소 검색!
const project3El = document.querySelector('.project3-carousel')
// 슬라이드 영역를 토글하는 버튼을 클릭하면 위를 열거나 닫는다!
const project3ToggleBtn = document.querySelector('.toggle-project_3')
// 슬라이드 영역 숨김 여부 기본값! 숨김설정 true , 보이고 싶으면 FALSE
let project3HideCarousel = false;
// 아이콘 요소 검색!
const project3Icon = document.getElementById('project3-carousel-icon')
// close 아이콘 
const project3CloseIcon = document.getElementById('project3-close-icon-3')

// 초기 설정: .project3-carousel을 숨김 상태로 설정
// project3El.classList.add('hide');

// 토글 버튼을 클릭하면 함수 동작
project3ToggleBtn.addEventListener('click', function () {
  // 슬라이드 영역 숨김 여부를 반댓값으로 할당!
  project3HideCarousel = !project3HideCarousel
  // 요소를 숨겨야 하면,
  if (project3HideCarousel) {
    project3El.classList.add('hide') // 숨김
  } else {
    project3El.classList.remove('hide') // 요소가 보여야 하면,
  }
  // 아이콘을 토글!
  if (project3Icon.innerText === 'upload') {
    project3Icon.innerText = 'download'
  } else {
    project3Icon.innerText = 'upload'
  }
})

// close 아이콘을 클릭하면 함수 동작
if (project3CloseIcon) {
  project3CloseIcon.addEventListener('click', function () {
    // 슬라이드 영역 숨김 여부를 true로 설정
    project3HideCarousel = true;
    project3El.classList.add('hide'); // 숨김
    // 아이콘을 download로 설정
    project3Icon.innerText = 'download';
  });
}
// End Project 3 슬라이드 토글


/**
 * personal-carousel-icon 슬라이드 토글 기능
 */
// 슬라이드 영역 요소 검색!
const carouselEl = document.querySelector('.personal-carousel')
// 슬라이드 영역를 토글하는 버튼 검색!
const carouselToggleBtn = document.querySelector('.toggle-carousel')
// 슬라이드 영역 숨김 여부 기본값!
let isHideCarousel = false
// 아이콘 요소 검색!
const carouselIcon = document.getElementById('personal-carousel-icon')

// 토글 버튼을 클릭하면,
carouselToggleBtn.addEventListener('click', function () {
  // 슬라이드 영역 숨김 여부를 반댓값으로 할당!
  isHideCarousel = !isHideCarousel
  // 요소를 숨겨야 하면,
  if (isHideCarousel) {
    carouselEl.classList.add('hide')
  // 요소가 보여야 하면,
  } else {
    carouselEl.classList.remove('hide')
  }
  // 아이콘을 토글!
  if (carouselIcon.innerText === 'upload') {
    carouselIcon.innerText = 'download'
  } else {
    carouselIcon.innerText = 'upload'
  }
})
// End  personal-carousel 슬라이드 요소 관리




/**
 * 부유하는 요소 관리
 */
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 '문자 데이터'를,
  // `parseFloat()`을 통해 소수점을 가지는 '숫자 데이터'로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
// 부유하는(떠 다니는) 요소를 만드는 함수
function floatingObject(selector, delay, size) {
  gsap.to(
    selector, // 선택자
    random(1.5, 2.5), // 애니메이션 동작 시간
    {
      delay: random(0, delay), // 얼마나 늦게 애니메이션을 시작할 것인지 지연 시간을 설정.
      y: size, // `transform: translateY(수치);`와 같음. 수직으로 얼마나 움직일지 설정.
      repeat: -1, // 몇 번 반복하는지를 설정, `-1`은 무한 반복.
      yoyo: true, // 한번 재생된 애니메이션을 다시 뒤로 재생.
      ease: Power1.easeInOut // Easing 함수 적용.
    }
  )
}
floatingObject('.floating1', 1, 15)
floatingObject('.floating2', .5, 15)
floatingObject('.floating3', 1.5, 20)


/**
 * 요소가 화면에 보여짐 여부에 따른 요소 관리
 */
// 관리할 요소들 검색!
const spyEls = document.querySelectorAll('section.scroll-spy')
// 요소들 반복 처리!
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({ // 감시할 장면(Scene)을 추가
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8 // 화면의 80% 지점에서 보여짐 여부 감시
    })
    .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller()) // 컨트롤러에 장면을 할당(필수!)
})


