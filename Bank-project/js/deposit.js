document.getElementById("deposit-btn").addEventListener('click', function () {
    const depositFieldElement = document.getElementById("deposit-field");
    const depositFieldString = depositFieldElement.value;
    const newDepositField = parseFloat(depositFieldString)
    const totalDepositElement = document.getElementById("total-deposit");
    const previoustotalDepositString = totalDepositElement.innerText;
    const previousTotalDeposit = parseFloat(previoustotalDepositString);
    const currenDeposit = previousTotalDeposit + newDepositField

    totalDepositElement.innerText = currenDeposit
    depositFieldElement.value = ''
    const totalBalanceElement = document.getElementById("total-balance");
    const totalBalaceString = totalBalanceElement.innerText;
    const totalBalace = parseFloat(totalBalaceString);
    const totalDepositAmount = currenDeposit + totalBalace;
    totalBalanceElement.innerText =totalDepositAmount
})