window.addEventListener('DOMContentLoaded', e => {
  if (e.target.readyState === "interactive") {
    initApp();
  }
});

function initApp() {
  //Dom Elements
  const searchSiteInput = document.querySelector('.search-input');
  const searchForm = document.querySelector('.search-abba-website');
  const searchSiteBtn = document.querySelector('.search-btn');
  const headerLinkNav = document.querySelectorAll('.header-nav-links li');

  searchSiteInput.addEventListener('focus', e => {
    searchSiteBtn.classList.remove('d-none');
  });

  searchSiteInput.addEventListener('blur',  e => {
    searchSiteBtn.classList.add('d-none');
  });

  /* Header Link Hover Effects */
  headerLinkNav.forEach(link => {
    link.addEventListener('click', e => {
      headerLinkNav.forEach(ln => ln.classList.remove('header-link-active'));

      link.classList.add('header-link-active');
    });
  })
}