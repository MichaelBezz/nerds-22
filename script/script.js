// оживление main-slide

let slideItems = document.querySelectorAll('.slide-item');
let paginationButtons = document.querySelectorAll('.slide-pagination-button');

let selectIndex = 1;

let showSelect = function () {
  for (let i = 0; i < slideItems.length; i++) {
    slideItems[i].classList.add('visually-hidden');
  }

  for (let i = 0; i < paginationButtons.length; i++) {
    paginationButtons[i].classList.remove('pagination-button-active');
  }

  slideItems[selectIndex - 1].classList.remove('visually-hidden');
  paginationButtons[selectIndex - 1].classList.add('pagination-button-active');
};

for (let i = 0; i < paginationButtons.length ; i++) {
  paginationButtons[i].addEventListener('click', function () {
    selectIndex = i + 1;
    showSelect();
  });
}
