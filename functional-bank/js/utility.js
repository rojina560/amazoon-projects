// function getInputFieldValueById(inputId) {
//     const inputField = document.getElementById(inputId);
//     const inputFieldValueString = inputField.value;
//     const inputFieldValue = parseFloat(inputFieldValueString)
//     inputField.value = ''
//     return inputFieldValue;
// }
// function getElementValueById(elementId) {
//     const element = document.getElementById(elementId);
//     const elementValueString = element.innerText;
//     const value = parseFloat(elementValueString);

//     return value
// }
// function setTextElementById(elementId, newValue) {
//     const textElement = document.getElementById(elementId);
//     textElement.innerText = newValue
// }

 
// document.getElementById("withdraw-btn").addEventListener("click", function () {
//   const newWithdrawAmount = getInputFieldValueById("withdraw-field");
//   const previusWithdrawTotal = getElementValueById("total-withdraw");
//   const newWithdrawTotal = previusWithdrawTotal + newWithdrawAmount;
//   setTextElementById("total-withdraw", newWithdrawTotal);
//   const previousBalanceTotal = getElementValueById("total-balance");
//   const totalBalace = previousBalanceTotal - newWithdrawAmount;
//   setTextElementById("total-balance", totalBalace);
// });
// document.getElementById("deposit-btn").addEventListener("click", function () {
//   const newDepositAmount = getInputFieldValueById("deposit-field");

//   const previousDepositTotal = getElementValueById("total-deposit");
//   const newDepositTotal = previousDepositTotal + newDepositAmount;
//   setTextElementById("total-deposit", newDepositTotal);
//   const previousBalaceTotal = getElementValueById("total-balance");
//   const totalAmount = previousBalaceTotal + newDepositAmount;
//   setTextElementById("total-balance", totalAmount);
// });
