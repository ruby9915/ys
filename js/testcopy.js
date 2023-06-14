// function modalOpen() {
//   document.querySelector('.modal_wrap').style.display = 'block';
//   document.querySelector('.modal_background').style.display = 'block';
// }
// function modalClose() {
//   document.querySelector('.modal_wrap').style.display = 'none';
//   document.querySelector('.modal_background').style.display = 'none';
// }

// document.querySelector('#modal_btn_html').addEventListener('click', modalOpen);
// document.querySelector('#modal_btn_css').addEventListener('click', modalOpen);
// document.querySelector('#modal_btn_js').addEventListener('click', modalOpen);
// document.querySelector('.modal_close').addEventListener('click', modalClose);

// HTML 모달 창을 열기 위한 함수
function modalOpenHtml() {
  // 해당하는 HTML 모달 창과 배경을 보이도록 설정
  document.querySelector('#modal_btn_html').parentNode.querySelector('.modal_wrap').style.display = 'block';
  document.querySelector('#modal_btn_html').parentNode.querySelector('.modal_background').style.display = 'block';
}

// CSS 모달 창을 열기 위한 함수
function modalOpenCss() {
  // 해당하는 CSS 모달 창과 배경을 보이도록 설정
  document.querySelector('#modal_btn_css').parentNode.querySelector('.modal_wrap').style.display = 'block';
  document.querySelector('#modal_btn_css').parentNode.querySelector('.modal_background').style.display = 'block';
}

// JavaScript 모달 창을 열기 위한 함수
function modalOpenJs() {
  // 해당하는 JavaScript 모달 창과 배경을 보이도록 설정
  document.querySelector('#modal_btn_js').parentNode.querySelector('.modal_wrap').style.display = 'block';
  document.querySelector('#modal_btn_js').parentNode.querySelector('.modal_background').style.display = 'block';
}

// 모달 창을 닫기 위한 함수
function modalClose() {
  // 모든 모달 창을 숨기도록 설정
  document.querySelectorAll('.modal_wrap').forEach(function(modalWrap) {
    modalWrap.style.display = 'none';
  });

  // 모든 모달 배경을 숨기도록 설정
  document.querySelectorAll('.modal_background').forEach(function(modalBackground) {
    modalBackground.style.display = 'none';
  });
}

// HTML 모달 버튼에 이벤트 리스너 등록
document.querySelector('#modal_btn_html').addEventListener('click', modalOpenHtml);

// CSS 모달 버튼에 이벤트 리스너 등록
document.querySelector('#modal_btn_css').addEventListener('click', modalOpenCss);

// JavaScript 모달 버튼에 이벤트 리스너 등록
document.querySelector('#modal_btn_js').addEventListener('click', modalOpenJs);

// 모달 닫기 버튼에 이벤트 리스너 등록
document.querySelectorAll('.modal_close').forEach(function(closeBtn) {
  closeBtn.addEventListener('click', modalClose);
});
