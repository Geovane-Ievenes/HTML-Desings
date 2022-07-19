const body = document.querySelector('body'),
      toggle = document.querySelector('.toggle-menu'),
      sidebar = document.querySelector('.aside'),
      modeSwitch = document.querySelector('.switch'),
      modeText = document.querySelector('.mode-text');

toggle.addEventListener('click', function(e){
  sidebar.classList.toggle('closed');
  e.preventDefault();
})  

modeSwitch.addEventListener('click', (e)=>{
  //CHANGE SWITCH COLOR
  body.classList.toggle('dark');

  //CHANGE TEXT
  if(body.classList.contains('dark')){
    modeText.innerText('Dark Mode');
  }
  else{
    modeText.innerText('Dark Mode');
  }

  e.preventDefault();
})