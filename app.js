function macBookFunction(product,price){
    const productMemoryCharge =document.getElementById(product+'-charge');
     productMemoryCharge.innerText =price ;
     const productCharge = productMemoryCharge.innerText ;
     const addingMoney = productCharge ;


    const subTotal = document.querySelector('.sub-total') ;
    const previousNumber = subTotal.innerText ;
    const newNumber = parseInt(previousNumber) + parseInt(addingMoney) ;
    
    subTotal.innerText = newNumber  ;
      
       document.getElementById('apply-promo-code').addEventListener('click',function(){
           console.log('clicked me');
            const promoCode = 'razon';
            if(promoCode === 'razon'){
                const discount = newNumber * .2 ;
                return subTotal.innerText = newNumber -discount ;
            }
           
       })
       const grandTotal = document.getElementById('grand-total') ;
            grandTotal.innerText = newNumber ;

    
  
      

   
}

document.getElementById('memory-16').addEventListener('click', function(){
    macBookFunction('memory',180 );

})
document.getElementById('memory-8').addEventListener('click', function(){
    macBookFunction('memory',0 );

})
document.getElementById('storage-256').addEventListener('click', function(){
    macBookFunction('storage',0 );

})
document.getElementById('storage-512').addEventListener('click', function(){
    macBookFunction('storage',100 );

})
document.getElementById('storage-1024').addEventListener('click', function(){
    macBookFunction('storage',180 );

})

document.getElementById('delivery-fri').addEventListener('click', function(){
    macBookFunction('delivery',0 );

})
document.getElementById('delivery-urgent').addEventListener('click', function(){
    macBookFunction('delivery',20 );

})
