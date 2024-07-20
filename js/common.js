'use strict'


/**
 * 검색창 제어
 */
// 검색창 요소(.search) 찾기.
const searchEl = document.querySelector('.search')
const searchInputEl = searchEl.querySelector('input')
// 검색창 요소를 클릭하면 실행.
searchEl.addEventListener('click', function () {
  searchInputEl.focus()
})
// 검색창 요소 내부 실제 input 요소에 포커스되면 실행.
searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused')
  searchInputEl.setAttribute('placeholder', '통합검색')
})
// 검색창 요소 내부 실제 input 요소에서 포커스가 해제(블러)되면 실행.
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused')
  searchInputEl.setAttribute('placeholder', '')
})


/**
 * 올해가 몇 년도인지 계산
 */
const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear()


// Onclick event link move
function redirectToGitHub() {
  window.open("https://github.com/ld5ehom", "_blank");
}

function redirectToLinkedin() {
  window.open("https://linkedin.com/in/ld5ehom", "_blank");
}

function redirectToMovie() {
  window.open("https://movie-sable-nine.vercel.app/#/", "_blank");
}

function redirectToTwitter() {
  window.open("https://twitter-4ae9d.web.app", "_blank");
}

function redirectToStore() {
  window.open("https://github.com/ld5ehom/store", "_blank");
}

function redirectToCard() {
  window.open("https://ld5ehom.github.io/cardmatch/", "_blank");
}

function redirectToCampus() {
  window.open("https://github.com/ld5ehom/campus", "_blank");
}

function redirectToPiazza() {
  window.open("https://github.com/ld5ehom/piazza", "_blank");
}