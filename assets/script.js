// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "LOKKAN CHENG" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle

let add_gb = document.querySelector('#add-gb');
let minus_gb = document.querySelector('#minus-gb');

let add_cc = document.querySelector('#add-cc');
let minus_ccs = document.querySelector('#minus-cc');

let add_sugar = document.querySelector('#add-sugar');
let minus_sugar = document.querySelector('#minus-sugar');

//clicking the gingerbread plus sign

document.getElementById('add-gb').addEventListener('click', function() {
    
    gb = gb + 1;
    
let GingerBread = document.querySelector('#qty-gb');
GingerBread.textContent = gb;
document.querySelector('#qty-total').textContent = gb + cc + sugar;
})

//clicking the gingerbread minus sign

document.getElementById('minus-gb').addEventListener('click', function() {
    
    gb = gb - 1;
   
let Gingerbread = document.querySelector('#qty-gb');
Gingerbread.textContent = gb;
document.querySelector('#qty-total').textContent = gb + cc + sugar;

})

//clicking the Chocolate chip plus sign
document.getElementById('add-cc').addEventListener('click', function() {
    
    cc = cc + 1;
    
let Chocolate_Chip = document.querySelector('#qty-cc');
Chocolate_Chip.textContent = cc;
document.querySelector('#qty-total').textContent = gb + cc + sugar;
})

//clicking the Chocolate chip minus sign
document.getElementById('minus-cc').addEventListener('click', function() {
    
    cc = cc - 1;
    
let Chocolate_Chip = document.querySelector('#qty-cc');
Chocolate_Chip.textContent = cc;
document.querySelector('#qty-total').textContent = gb + cc + sugar;
})

//clicking the Sugar Sprinkle plus sign

document.getElementById('add-sugar').addEventListener('click', function() {
 
    
    sugar = sugar + 1;
    
let Sugar_Sprinkle = document.querySelector('#qty-sugar');
Sugar_Sprinkle.textContent = sugar;
document.querySelector('#qty-total').textContent = gb + cc + sugar;
})

//clicking the Sugar Sprinkle minus sign
document.getElementById('minus-sugar').addEventListener('click', function() {
   
    
    sugar = sugar - 1;
    
let Sugar_Sprinkle = document.querySelector('#qty-sugar');
Sugar_Sprinkle.textContent = sugar;
document.querySelector('#qty-total').textContent = gb + cc + sugar;


})