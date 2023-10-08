







// here I added the loader 
var load =  document.querySelector('.loader');
setTimeout(() => {
    
   load.style.display="none";
}, 3000);

const prev = document.getElementById('prev-btn')
const next = document.getElementById('next-btn')
const list = document.getElementById('contributors')
const itemWidth = 150
const padding = 10

prev.addEventListener('click',()=>{
  list.scrollLeft -= (itemWidth + padding)
})
next.addEventListener('click',()=>{
  list.scrollLeft += (itemWidth + padding)
})