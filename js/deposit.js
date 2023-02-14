

 document.getElementById('btn-deposit').addEventListener('click',function(){

    //step-2:
    const newDepositAmount = getInputFieldById('user-deposit');
    
    //step-4:
    const previousDepositAmount= getElementFeildById('deposit-total');
    // console.log(previousDepositAmount);

    //step-5:
    const currentDepositTotal = previousDepositAmount + newDepositAmount;
    //5.5:set deposite tootal value
    setElementValueById('deposit-total',currentDepositTotal);
    //step-6
     const balanceAmount= getElementFeildById('balance-total');
     //step-6.5
     const currentBalanceAmount=newDepositAmount + balanceAmount;
     //step-7:
     setElementValueById('balance-total',currentBalanceAmount);
 })