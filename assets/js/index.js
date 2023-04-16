var newItem=document.getElementById("addValue")
var itemsList=[]
var temp="undefined"

var test=getComputedStyle(newItem).backgroundColor

console.log(test)


function addItem(add){
    return{
        id:Date.now(),
        Add:add,
        checked:false
    }
}

function displayUpdated(id){
    var updatedItem=itemsList.findIndex(function(ele){
          return ele.id ===id
           console.log(updatedItem) 
       })
       newItem.value=itemsList[updatedItem].Add
   
       temp=updatedItem
       var add=document.getElementById("add").innerHTML="update"
       console.log("funhhh",temp)
   }


function addNewItem(eve){
    if(newItem.value===""){
        eve.preventDefault()
    }else{

        if(temp == "undefined"){
            var addedItem=addItem(newItem.value)
            itemsList.push(addedItem)
            console.log(itemsList)
            var add=document.getElementById("add").innerHTML="add"
            localStorage.setItem("items",JSON.stringify(itemsList))
        display()
        }else{
            itemsList[temp].Add=newItem.value
            console.log(itemsList[temp].Add)
            localStorage.setItem("items",JSON.stringify(itemsList))
            var add=document.getElementById("add").innerHTML="add"

            display()
            clear()
            temp="undefined"
        }
        
        clear()
    }
}
function display(){ 
    var output=""
    for(var i=0;i<itemsList.length;i++){
            output+=`
            <div class="d-flex all">
            <button class="btn-cus" onclick="updatedItem(${itemsList[i].id})"> </button>
            <div  class=" text-cus w-75  ${itemsList[i].checked? "test" : "  "}" role="alert">
      ${itemsList[i].Add}
    </div>

    <button class="btn-dele" onclick="delet(${itemsList[i].id})">delet </button>
    <button class="btn-dele" onclick="displayUpdated(${itemsList[i].id})">update </button>
            </div>
            `
    }
    localStorage.setItem("items",JSON.stringify(itemsList))
    document.getElementById("body").innerHTML=output

}



    if(localStorage.getItem("items") === null){
        itemsList=[]
            }else{
        itemsList=JSON.parse(localStorage.getItem("items"))
    display()
            }





// function checked(i){

//   console.log(i)

//   document.querySelectorAll(".checkeddd")[i].style.textDecoration="line-through"
//   document.querySelectorAll(".checkeddd")[i].setAttribute("class","checked")
//   itemsList[i].checked="false"

// }


function delet(id){

    itemsList= itemsList.filter(function(ele){
        return ele.id !== id
    })
    localStorage.setItem("items",JSON.stringify(itemsList))
    display()
}


function updatedItem(id){
   var checkedEle=itemsList.find(function(elem){
        return elem.id === id
    })
    checkedEle.checked =!checkedEle.checked
    // console.log(checkedEle)
    
    localStorage.setItem("items",JSON.stringify(itemsList))
    display()
    // console.log(index)
}
 function clear(){
    newItem.value=""
 }


 


