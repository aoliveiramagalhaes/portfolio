// add events after loading the page
window.addEventListener('load', () => {

  $('[data-toggle="tooltip"]').tooltip()

  // Adding the event handlers
  const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

  function switchTheme(e) {
    if (e.target.checked) {
      document.body.setAttribute('data-theme', 'dark')
    } else {
      document.body.setAttribute('data-theme', 'light')
    }
  }

  toggleSwitch.addEventListener('change', switchTheme, false);

  // when the page is loaded use the theme configured on the computer
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.setAttribute('data-theme', 'dark')
    toggleSwitch.checked = true
  } else {
    document.body.setAttribute('data-theme', 'light')
  }

  const isDarkModeEnabled = () => toggleSwitch.checked === true

  // when the theme is changed after loading the page set it back in the website
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    const newColorScheme = e.matches ? "dark" : "light";
    toggleSwitch.checked = e.matches

    document.body.setAttribute('data-theme', newColorScheme)
  });


  document.getElementById('theme-switch').addEventListener('mouseover', () => {
    if (isDarkModeEnabled()) {
      document.getElementById('booo').innerHTML = "Click to enable light mode"
    } else {
      document.getElementById('booo').innerHTML = "Click to enable dark mode"
    }

    document.getElementById('booo').style.display = 'block';
  });

  document.getElementById('theme-switch').addEventListener('mouseout', () => {
    document.getElementById('booo').style.display = 'none';
  });
});
