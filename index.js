
const toggleButton = document.getElementsById('toggle-button')
const naviList = document.getElementById('navi-list')

toggleButton.addEventListener('click', () => {
  naviList.classList.toggle('active');
})