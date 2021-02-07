let colorArray= ['#DAF7A6','#C70039','#A3E4D7','#F7DC6F','#2ECC71','#76448A','#5D6D7E','#78281F','#566573','#F5B7B1'];
let rand;
btn1.addEventListener('click',function(){
    rand=Math.floor(Math.random() * 10) + 1;
    main_div.style.backgroundColor=colorArray[rand];
});
btn2.addEventListener('click',function(){
    main_div.style.backgroundColor='white';
});
a1.addEventListener('click',function(){
    window.open("colorflipper_basic_grey.html","_self")
});