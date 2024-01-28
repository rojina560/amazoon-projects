document.getElementById("withdraw-btn").addEventListener('click', function () {
    const newWithdrawAmount = getInputFieldById("withdraw-field");
    const previousWithdrawAmount = getElementValueById("total-withdraw");
    const totalWithdrawAmount = newWithdrawAmount + previousWithdrawAmount;
    setTextElementById("total-withdraw", totalWithdrawAmount);
    const balanceWithdraw = getElementValueById("total-balance");
    const totalWithdrawBalance = balanceWithdraw-newWithdrawAmount; 
    setTextElementById("total-balance",totalWithdrawBalance);
})