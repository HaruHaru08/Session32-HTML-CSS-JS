// B1: Mô phỏng 1 kho lưu trữ dữ liệu
// Chứa các đối tượng dữ liệu (có tính chất tương đồng)
// để vận hành ứng dụng
let todoList = [
  {
    id: 1,
    task: "Hit the gym",
    completed: false,
  },
  {
    id: 2,
    task: "Pay bills",
    completed: true,
  },
  {
    id: 3,
    task: "Meet george",
    completed: false,
  },
  {
    id: 4,
    task: "Buy eggs",
    completed: false,
  },
  {
    id: 5,
    task: "Read a book",
    completed: false,
  },
  {
    id: 6,
    task: "Organize office",
    completed: false,
  },
];
let ul = document.getElementById("myUL");
let addBtn = document.getElementsByClassName("addBtn")[0];
let input = document.getElementById("myInput");
// B2: Ánh xạ toàn bộ đối tượng dữ liệu
// thành các phần tử HTML xuất hiện trên trang web
// R - Read
// Render
// B2.1:DUyệt qua mảng todolist
displayTodo();
//C-Create
//Tính năng thêm mới

//B1:Xác định vị trí gắn sự kiện dành cho tính
//năng create-->nút add
//B2:Gắn sự kiện onclick cho nút add
addBtn.onclick = function () {
  //B3:
  //Mỗi khi người dùng bấm vào nút add thì
  //Gọi thẻ input và lấy nội dung bên trong đó ra
  //---->{id,task,completed}--->todoList[]
  let newTodo = {
    id: Math.ceil(Math.random() * 100),
    task: input.value,
    completed: false,
  };
  todoList.push(newTodo);
  displayTodo();
  //B4:
  // Biến nội dung đó thành các phần tử li
  // B5:
  // Đưa thẻ li đó xuất hiện ở trên trình duyệt (trang web)
};
// D-Delete
//B1:Gọi ra toàn bộ nút close và gắn sự kiện onclick
//cho nút close đó
function displayTodo() {
    ul.innerHTML = "";
    for (const i in todoList) {
    // B2.2:Lấy ra toàn bộ đối tượng todo-item{} nằm trong todolist
    // B2.3:Chuyển đổi (Ánh xạ) từng đối tượng dữ liệu -->
    // CÁC PHẦN TỬ HTML
    //.innerHTML
    //a.innerHTML='<h1></h1>';
    let li;
    if (todoList[i].completed === true) {
      li = `<li id="${todoList[i].id}" class="checked">
      ${todoList[i].task}
      <span class="close">&#x2715;</span>
      </li>`;
    } else {
      li = `<li id="${todoList[i].id}">
      ${todoList[i].task}
      
      <span class="close">&#x2715;</span>
      </li>`;
    }

    // B2.4: Mỗi khi 1 đối tượng dữ liệu được --> HTML
    // Đưa phần tử HTML xuất hiện ở trong trang web (trên trình duyệt)
    ul.innerHTML += li;
  }

  //Vị trí toàn bộ nút close được sinh ra
  let closeList=document.getElementsByClassName("close");
  //B2:Gắn sự kiện cho toàn bộ nút close
  //Duyệt qua danh sách closeList
  //
  for (const i in closeList) {
    closeList[i].onclick=function(){
        //B3:Lấy ra id của đối tượng dữ liệu
        //Tương ứng trong kho lưu trữ dữ liệu
        //nút close là con của thẻ li
        let id=+closeList[i].parentElement.id; 
        // B4:Tìm kiếm vị trí của đối tượng dũe liệu
        //với id tương ứng ở trên
        let findIndex=-1;
        for (const index in todoList) {
            if(id===todoList[index].id){
                findIndex=index;
                break;
            }
        }
        todoList.splice(findIndex,1);
        //B5:Phản ánh sự thay đổi trong dữ liệu
        displayTodo();
    }
  }
}
