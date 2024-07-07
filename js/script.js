const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");


function selectItem(e) {

  removeBorder();
  removeShow();

  this.classList.add("tab-border");

  const tabContentItem = document.querySelector(`#${this.id}-content`);

  tabContentItem.classList.add("show");
}










function removeBorder() {
  tabItems.forEach((item) => {
    item.classList.remove("tab-border");
  });
}


function removeShow() {
  tabContentItems.forEach((item) => {
    item.classList.remove("show");
  });
}


tabItems.forEach((item) => {
  item.addEventListener("click", selectItem);
});


function breakTheText(){
  var h1=document.querySelector("h1")
  var h1Text=h1.textContent

  var splittedText=h1Text.split(" ")
  var halfValue= splittedText.length

  var clutter=""
  
  splittedText.forEach(function(elem,idx){
    if(idx%2==0){
      clutter+=`<span class="a">${elem}</span>`
    }
    else{
      clutter+=`<span class="b">${elem}</span>`
    }
  })
  h1.innerHTML = clutter

}

breakTheText()

gsap.from("h1 .a",{
y:80,
duration:0.8,
delay:0.5,
stragger:0.15,
opacity:0

})
gsap.from("h1 .b",{
y:-80,
duration:0.8,
delay:0.5,
stragger:0.15,
opacity:0

})
