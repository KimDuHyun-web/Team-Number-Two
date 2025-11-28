const popup = document.querySelector('#popup');
const popBtn = popup.querySelector('button');
const cloChk = popup.querySelector('#agree');


const result = document.cookie.includes('popup=하루안보기');

if(result){
  popup.style.display = 'none';
}else{
  popup.style.display = 'block';
}

popBtn.addEventListener('click',()=>{
  popup.style.display = 'none';
  if(cloChk.checked){
    createCookie('popup','하루안보기',1);
  }else
 deleteCookie('popup','하루안보기',-1); 
});

function deleteCookie(name,value,due){
  let today = new Date();
  today.setDate(today.getDate() + due);
  document.cookie = `${name}=${value}; Expires=${today.toUTCString()}`;
}

function createCookie(name,value,due){
  let today = new Date();
  today.setDate(today.getDate() + due);
  document.cookie = `${name}=${value}; Expires=${today.toUTCString()}`;
}