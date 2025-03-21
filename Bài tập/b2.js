let sum=0;
let input=document.getElementsByClassName("btn-change")[0].onclick=function(){
    sum++;
    document.getElementsByTagName("p")[0].innerText=`Số lần bấm: ${sum}`;
}