const input = document.getElementById("inp");
const dropDown = document.getElementById("Q-selector");
const btn = document.querySelector(".btn");
const urgImp = document.getElementById("urg-imp-list");
const Imp = document.getElementById("imp-list");
const Urg = document.getElementById("urg-list");
const noUrgImp = document.getElementById("no-urg-imp-list");
const tasksUL = document.querySelector(".tasks-list");
const itemUl = document.querySelectorAll(".items-ul")


input.addEventListener("input", () => {
  btn.classList.add("active");
  btn.removeAttribute("disabled");
});

// console.log(btn.removeAttribute())

btn.addEventListener("click", () => {
  const selected = dropDown.selectedOptions[0].value;
  const li = document.createElement("li");
  li.classList.add("task-item");
  tasksUL.appendChild(li);

  const div1 = document.createElement("div");
  const div2 = document.createElement("div");
  const icon1 = document.createElement("i");
  const icon2 = document.createElement("i");

  div1.classList.add("task-text");
  li.appendChild(div1);
  div2.classList.add("item-opt");
  li.appendChild(div2);
  div1.innerHTML = input.value;
  icon1.classList.add("far", "fa-edit", "edit");
  icon2.classList.add("fas", "fa-trash-alt", "del");
  div2.appendChild(icon1);
  div2.appendChild(icon2);


//   console.log(icon1);
//   console.log(icon2);
//   console.log(div1);
//   console.log(div2);

    // const list = (li.innerHTML = `<div class="task-text">${input.value}</div>
    //   <div class="item-opt">
    //   <i class="far fa-edit edit"></i>
    //   <i class="fas fa-trash-alt del"></i>
    //   </div>`);

      const edit = document.querySelector(".edit");
      const del = document.querySelector(".del");

  // console.log(selected.firstChild())

  if (selected == "Urg & Imp" && urgImp.id === "urg-imp-list") {
    urgImp.children[1].appendChild(li);
  } else if (selected === "Important" && Imp.id === "imp-list") {
    Imp.children[1].appendChild(li);
  } else if (selected === "Urgent" && Urg.id === "urg-list") {
    Urg.children[1].appendChild(li);
  } else if (
    selected === "No Urg & No Imp" &&
    noUrgImp.id === "no-urg-imp-list"
  ) {
    // noUrgImp.children[1].innerHTML = list;
    noUrgImp.children[1].appendChild(li);
  }

  input.value = "";

//   if(icon1){

// }


itemUl.forEach((a)=>{
    console.log(a.children.childNodes)
})

// edit.addEventListener("click",()=>{
//     // console.log(tasksUL.children.length)
//    itemUl.forEach((a)=>{
//     a.children.length
//    })
// })
      

  // console.log(edit.className,del.className)

  //   console.log(a);

  // console.log(dropDown.selectedOptions[0].value);

  //   console.log(input.value);
});


// if(icon1){
//     console.log(true)
// }
// else if(icon2){
//     console.log(false)
// }
// edit.addEventListener("click",()=>{
//     console.log("edit")
// })




console.log(urgImp.children[1]);
console.log(urgImp.children, 123);
console.log(Imp.children, 123);

console.log(input);
