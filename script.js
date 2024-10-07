let box=document.querySelector('.headermenuoptions');
let btn=document.querySelector('.headermenu');
let flag=0;

btn.addEventListener('click',function(){
    if(flag===0){
       box.style.left='0%';
       box.style.transition='1s';
       flag=1;
    }
    else if(flag===1){
        box.style.left='-60%';
        box.style.transition='1s';
        flag=0;
    }
})