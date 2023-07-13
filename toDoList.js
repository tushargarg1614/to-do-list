
var item
var add=document.querySelector(".add")

add.addEventListener(("click"),()=>{
    if(document.querySelector(".input").value=="")
    {
        alert("please write something ")
        return ;
    }
    item=(document.querySelector(".input").value)
    document.querySelector(".input").value=""
    addToList()
    markItDone()
    removeIt()   
})
function addToList(){
    var list=document.querySelector(".list")
    let li=document.createElement("li")
    li.classList.add("to-do")
    let check=document.createElement("input")
    check.setAttribute('type','checkbox')
    check.classList.add("check")
    li.appendChild(check)
    let listItem=document.createTextNode(item)
    li.appendChild(listItem)
    let span=document.createElement("span")
span.classList.add("dlt")
let remove=document.createTextNode("remove")
span.appendChild(remove)
li.appendChild(span)
list.appendChild(li)
}
// function markItDone(){
// var chckbx=document.querySelectorAll(".check")
// chckbx.forEach(dlt=>(dlt.addEventListener("click",function(){
//     this.parentElement.classList.toggle("mark")
// })))}
function markItDone() {
    var chckbx = document.querySelectorAll(".check");
    chckbx.forEach((dlt) => {
      dlt.addEventListener("click", function () {
        var parentLi = this.parentElement;
        parentLi.classList.toggle("mark");
  
        if (this.checked) {
          parentLi.style.textDecoration = "line-through";
        } else {
          parentLi.style.textDecoration = "underline";
        }
      });
    });
  }
  

function removeIt(){
var removeBtn=document.querySelectorAll(".dlt")
removeBtn.forEach(remove=>{remove.addEventListener("click",function(){
    this.parentElement.remove()
})})
}


