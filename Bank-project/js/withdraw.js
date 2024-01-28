document.getElementById("withdraw-btn").addEventListener('click', function () {
    const withdrawFieldElement = document.getElementById("withdraw-field");
    const withdrawFieldString = withdrawFieldElement.value;
    const withdrawFieldTotal = parseFloat(withdrawFieldString);
    const totalWithdrawElement = document.getElementById("total-withdraw");
    const totalWithdrawString = totalWithdrawElement.innerText;
    const totalWithdrawAmount = parseFloat(totalWithdrawString);
    const currentWithdraw = withdrawFieldTotal + totalWithdrawAmount;
    totalWithdrawElement.innerText = currentWithdraw
    withdrawFieldElement.value = ''
    const totalBalanceElement = document.getElementById("total-balance");
    const totalBalaceString = totalBalanceElement.innerText;
    const totalBalace = parseFloat(totalBalaceString);
    const totalAmount = totalBalace -currentWithdraw 
    totalBalanceElement.innerText = totalAmount
    
})