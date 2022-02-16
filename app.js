function updateProductNumber(product,price,isIncreasing){
    const productInput = document.getElementById(product + '-number');
    let caseNumber = productInput.value;
    if(isIncreasing == true){
        caseNumber = parseInt(caseNumber) + 1;
    }
    else if(caseNumber > 0){
        caseNumber = parseInt(caseNumber) - 1;
    }
    productInput.value = caseNumber;
    // update case Total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = caseNumber * price;
    
    // calculateTotal
    calculateTotal();
    
}
function getInputValue(){
    const productInput = document.getElementById('phone-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
};
function calculateTotal(){
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    // tax calculations
    const tax  = subTotal / 10;
    const totalPrice = subTotal + tax;
    // update on html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}

// phone handle increase decrease events
document.getElementById('phone-plus').addEventListener('click', function(){
    updateProductNumber('phone',1219, true);
});
document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductNumber('phone', 1219, false);
});



// handle  increase decrease event 
document.getElementById('case-plus').addEventListener('click', function(){
    // const caseInput = document.getElementById('case-number');
    // const caseNumber = caseInput.value;
    // caseInput.value = parseInt(caseNumber) + 1;
    updateProductNumber('case',59, true);
});
document.getElementById('case-minus').addEventListener('click', function(){
    // const caseInput = document.getElementById('case-number');
    // const caseNumber = caseInput.value;
    // caseInput.value = parseInt(caseNumber) - 1;
    updateProductNumber('case', 59, false);
});