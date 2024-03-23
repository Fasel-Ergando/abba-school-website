window.addEventListener('DOMContentLoaded', e => {
  if (e.target.readyState === "interactive") {
    initApp();
  }
});

function initApp() {
  //Dom Elements
  const searchSiteInput = document.querySelector('.search-input-toggle');
  const closeSearchModal = document.querySelector('.close-search-modal');
  const searchSiteBtn = document.querySelector('.search-btn');
  const headerLinkNav = document.querySelectorAll('.header-nav-links li');

  searchSiteInput.addEventListener('click', e => {
    searchSiteInput.classList.add('scale-0');
  });
  searchSiteInput.addEventListener('input', e => {
    searchSiteInput.classList.add('scale-0');
  });

  closeSearchModal.addEventListener('click',  e => {
    searchSiteInput.classList.remove('scale-0');
  });

  /* Header Link Hover Effects */
  headerLinkNav.forEach(link => {
    link.addEventListener('click', e => {
      headerLinkNav.forEach(ln => ln.classList.remove('header-link-active'));

      link.classList.add('header-link-active');
    });
  })
}