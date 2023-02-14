function getInputFieldById(inputField){
    const depositAmount= document.getElementById(inputField);
    const newDepositFeildAmountString= depositAmount.value;
    const newDepositFeildAmount = parseFloat(newDepositFeildAmountString);
    depositAmount.value='';//step-3
    return newDepositFeildAmount;
 }
 
 function getElementFeildById(textField){
    const previousDeposit= document.getElementById(textField);
    const previousDepositAmountString=previousDeposit.innerText;
    const previousDepositAmount=parseFloat(previousDepositAmountString);
    return previousDepositAmount;

 }

 function setElementValueById(textField,newValue){
    const previousDeposit= document.getElementById(textField);
    previousDeposit.innerText=newValue;
 }
