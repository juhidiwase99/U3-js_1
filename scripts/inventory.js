let arr=JSON.parse(localStorage.getItem("adminlist"))||[];
let container=document.getElementById("all_products");

arr.map(function(elem){
    let box=document.createElement("div");
    let p1=document.createElement("p");
    p1.innerText=elem.type;
    p1.style.textAlign="center"
    let p2=document.createElement("p");
    p2.innerText=elem.desc;
    p2.style.textAlign="center"
    let p3=document.createElement("p");
    p3.innerText=elem.price;
    p3.style.textAlign="center"
    let img=document.createElement("img");
    img.src=elem.image;
    let p4=document.createElement("button");
    p4.innerText="Remove";
    p4.style.color="black"
    p4.style.marginLeft="45%"
    p4.style.textAlign="center"
    p4.style.cursor="pointer"
    p4.addEventListener("click",function(){
        event.target.parentNode.remove();
    })
    box.append(img,p1,p2,p3,p4)
    container.append(box);

})