/* text_iife.js */
(function(){   // 텍스트 작성과 삭제 즉시 실행 함수

  // main tag h2 <span>
  const spanEl = document.querySelector("main h2 span");
  const textArray = ['TaeWook Park', 'Software Engineer', 'Front-End Developer', 'Back-End Developer'];
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

// Onclick event link move
function redirectToGitHub() {
  window.open("https://github.com/ld5ehom", "_blank");
}

function redirectToLinkedin() {
  window.open("https://linkedin.com/in/ld5ehom", "_blank");
}

function redirectToTwitter() {
  window.open("https://twitter-4ae9d.web.app", "_blank");
}

function redirectToShop() {
  window.open("https://ld5ehom.github.io/shop/", "_blank");
}

function redirectToCard() {
  window.open("https://ld5ehom.github.io/cardmatch/", "_blank");
}

function redirectToAa() {
  window.open("https://ld5ehom.github.io/aa/", "_blank");
}