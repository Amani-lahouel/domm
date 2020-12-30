var elements = document.getElementsByClassName("favorite");
Array.from(elements).forEach(function (element) {
    element.addEventListener('click', favoriteClick);
});

function favoriteClick() {
    if (this.classList.contains("color-heart")) {
        this.classList.remove("color-heart");
    } else {
        this.classList.add("color-heart");
    }
}
var removeproduct = document.querySelectorAll('.product-remove');
Array.from(removeproduct).map(removeproduct => {
    removeproduct.addEventListener ('click', function(e){
  
 
     removeproduct.parentElement.parentElement.remove();
})

});



var plus = document.querySelectorAll('.fa-plus') ;
var total = document.querySelector('.quantity') ;
var minus = document.querySelector('.fa-minus') ;

plus.forEach(elm => {
    elm.addEventListener ('click', function () {
      s=  elm.nextElementSibling.innerHTML++
      tot= total.innerHTML.replace('$', '') 
     priceunit= elm.parentElement.nextElementSibling.innerHTML.replace('$', '') 
     
        sum=(parseFloat(tot))+(parseFloat(priceunit))
        console.log(sum);
        total.innerHTML= sum+('$');
})
   
    });


    var minus = document.querySelectorAll('.fa-minus') ;
var total = document.querySelector('.total') ;

minus.forEach(elm =>{

   elm.addEventListener ('click', function(){

    if (elm.previousElementSibling.innerHTML>0){
    s=elm.previousElementSibling.innerHTML--
    tot= total.innerHTML.replace('$', '') 
    priceunit= elm.parentElement.nextElementSibling.innerHTML.replace('$', '')
    sum=(parseFloat(tot))-(parseFloat(priceunit))
        console.log(sum);
        total.innerHTML= sum+('$');
}

})




});
  

    