const tabs = document.querySelector('.tabs');
const contentList = document.querySelectorAll('.content');
const subTabs = document.querySelector('.subtabs');
const subContent = document.querySelectorAll('.subtab-content');

const changeClass = (el, arr) => {
  for (let i = 0; i < arr.children.length; i++) {
    arr.children[i].classList.remove('active');
  }
  el.classList.add('active');
};

const changeContent = (contentSpace, currTab) => {
  for (let i = 0; i < contentSpace.length; i++) {
    contentSpace[i].classList.remove('active');
    if (contentSpace[i].dataset.content === currTab) {
      contentSpace[i].classList.add('active');
    }
  }
};

tabs.addEventListener('click', e => {
  const currTab = e.target.dataset.btn;
  changeClass(e.target, tabs);
  changeContent(contentList, currTab);
});

subTabs.addEventListener('click', e => {
  const currSubTab = e.target.dataset.btn;
  changeClass(e.target, subTabs);
  changeContent(subContent, currSubTab);
});