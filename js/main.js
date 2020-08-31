// add events after loading the page
window.addEventListener('load', () => {

  // set theme to light when clicking on the light button
  document.getElementById("switch-light").addEventListener('click', () => {
    document.body.setAttribute('data-theme', 'light')
  })

  // set theme to dark when clicking on the dark button
  document.getElementById("switch-dark").addEventListener('click', () => {
    document.body.setAttribute('data-theme', 'dark')
  })

  // when the page is loaded use the theme configured on the computer
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.setAttribute('data-theme', 'dark')
  } else {
    document.body.setAttribute('data-theme', 'light')
  }

  // when the theme is changed after loading the page change set it back in the website
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    const newColorScheme = e.matches ? "dark" : "light";

    document.body.setAttribute('data-theme', newColorScheme)
  });
});