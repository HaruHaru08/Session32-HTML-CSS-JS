let check=document.getElementById("btn-check");
let input=document.getElementById("email");
console.log(input)
check.onclick=function(){
    if(input.value.includes("@")&&input.value.includes(".com")||input.value.includes("@")&&input.value.includes(".vn")){
        document.getElementById("true").style.display="block";
        document.getElementById("flase").style.display="none";
    }else{
        document.getElementById("flase").style.display="flex";
        document.getElementById("true").style.display="none";
    }
}