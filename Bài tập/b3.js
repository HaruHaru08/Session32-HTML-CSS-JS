let ol=document.getElementById("myOl");
let input=document.getElementById("monhoc");
document.getElementById("btn-add").onclick=function(){
    if (input.value==="") {
        alert("tên môn học không được bỏ trống!");
    } else {
        ol.innerHTML+=`<li>${input.value}</li>`;
    } 
}