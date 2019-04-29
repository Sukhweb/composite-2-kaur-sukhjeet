(function() {
 //select all buttons
 const filterBtn = document.querySelectorAll(".filter-btn");  

filterBtn.forEach(function(btn){
    btn.addEventListener("click",(event) => {
        //prevent default action
        event.preventDefault();
    
     const value = event.target.dataset.filter;
     //console.log(value); 
     const cars = document.querySelectorAll('.item');
    //console.log(cars);

cars.forEach(item => {
   if(value === 'all'){
     item.style.display = "block";  
   } else{
     if(item.classList.contains(value)) {
        item.style.display = "block";  
     } else {
        item.style.display = "none"; 
     }
    }
   });  
  });
 });
})();

// search input
(function() {
  //target search box
  const search = document.getElementById("search-item");
   
  //event listener function for search
  search.addEventListener("keyup",() => {
    let value = search.value.toLowerCase().trim();
  //  console.log(value);
 
const cars = document.querySelectorAll(".item");

cars.forEach(item => {
    let type = item.dataset.item;

   //console.log(type);

   let length = value.length;
   let match = type.slice(0,length);

   //console.log(value);
   //console.log(match);
 if (value === match) {
    item.style.display = "block";
 } else {
    item.style.display = "none"; 

   }    
  });
 });
})();