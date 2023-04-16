let  myEle=document.createElement("div")
let myText=document.createTextNode("my text")
let myComment=document.createComment("my first comment")

myEle.appendChild(myComment)
myEle.appendChild(myText)
document.body.appendChild(myEle)

let myh2=document.createElement("h2")
let myp=document.createElement("p")

let myh2text=document.createTextNode("this is h2")
let myPtext=document.createTextNode("this is p")

myh2.appendChild(myh2text)
myp.appendChild(myPtext)
myEle.appendChild(myh2)
myEle.appendChild(myp)
myEle.className="product"
myp.className="p"
myh2.className="hh"
///////////////////////////////////////////////////////
var count=10

for(var i=0;i<count;i++){
    var div=document.createElement("div");
    var h2=document.createElement("h2")
    let h2txt=document.createTextNode("lammisssssssssssssssssssssssss")
    h2.appendChild(h2txt)
    div.appendChild(h2)
    document.body.appendChild(div)

}
/////////////////////////////////////////

document.links[0].onclick=function(eve){
    eve.preventDefault()
console.log(eve)
}


document.forms[0].onsubmit=function(eve){
    if(document.getElementById("input").value ==" "){
        eve.preventDefault()
        console.log("eeeeeeeeeeeeeeeeeeee")
    }
    
}
//////////////////////////////
var one=document.getElementById("inputi")
var two=document.getElementById("inputo")
one.onblur=function(){
    if(one.value.length >4){
        two.focus()
    }
}
