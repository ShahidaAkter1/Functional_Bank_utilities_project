/**
 1.add event listenner to the deposit button
 2.get deposit amount from the deposit input field
 2-5: convert string to number type
 3.clear the input field after getting the value
 4.get the privious deposit total
 5.calculate new deposit total and set the value to the deposit total
 6.get current balance
 */
document.getElementById('btn-withdraw').addEventListener('click',function(){
    //step-2
    const newBalanceAmount= getInputFieldById('withdraw-field');

    //step-4
    const previousWithdrawAmount=getElementFeildById('withdraw-total');
    //step-4.5
    const currentWithdrawTotal= previousWithdrawAmount +newBalanceAmount;
    //step-5
    setElementValueById('withdraw-total',currentWithdrawTotal);

    //step-6
    const previousBalanceAmount=getElementFeildById('balance-total');
    //step-7
    const currentBalanceAmountotal=previousBalanceAmount - newBalanceAmount;
    //7.5
    setElementValueById('balance-total',currentBalanceAmountotal);


})