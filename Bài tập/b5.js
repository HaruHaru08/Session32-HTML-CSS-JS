let add=document.getElementById("btn-add");
let ul=document.getElementById("myUl");
let input=document.getElementById("nv");
add.onclick=function(){
    ul.innerHTML+=`
    <br><br><br><li>${input.value}
    <span class="close"><i class="fa-solid fa-rectangle-xmark" style="color: #f50000;"></i></span>
    </li>
    `
};
let closeList=document.getElementsByClassName("close");
for (const i in closeList) {
    closeList[i].onclick=function(){
        let id=+closeList[i].parentElement.id; 
        let findIndex=-1;
        for (const index in todoList) {
            if(id===todoList[index].id){
                findIndex=index;
                break;
            }
        }
        todoList.splice(findIndex,1);
    }
}