document.getElementById("deposit-btn").addEventListener('click', function () {
    const newDepositAmount = getInputFieldById("deposit-field");
    const previousDepositTotal = getElementValueById("total-deposit");
    const depositTotal = previousDepositTotal + newDepositAmount; ;
    setTextElementById("total-deposit", depositTotal);
    const newBalance = getElementValueById("total-balance");
    const totalBalance = newDepositAmount + newBalance
    setTextElementById("total-balance", totalBalance);
    
}
)
