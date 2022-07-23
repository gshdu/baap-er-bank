//handle deposit button event

document.getElementById('deposit-button').addEventListener('click', function(){
    //got the amount deposited
    const depositInput = document.getElementById('deposit-input');
    let newDepositAmount = depositInput.value;
    const depositValue = depositInput.value;
    // console.log(depositAmount);

    const depositTotal = document.getElementById('deposit-total');
    const currentDepositAmount = depositTotal.innerText;
    newDepositAmount = parseFloat(currentDepositAmount) + parseFloat(newDepositAmount);
    depositTotal.innerText = newDepositAmount;
    document.getElementById('deposit-input').value = '';

    //handle balance
    const balanceTotal = document.getElementById('balance-total');
    let currentBalance = balanceTotal.innerText;
    console.log('current balance: ' + currentBalance);
    console.log('deposit amount add: ' + newDepositAmount);
    const newBalance = parseFloat(currentBalance) + parseFloat(depositValue);
    console.log(depositValue);
    balanceTotal.innerText = newBalance;

})

//handle withdraw event handler
document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputValue = withdrawInput.value;
    const withdrawTotal = document.getElementById('withdraw-total');
    let currentWithdrawBalance = withdrawTotal.innerText;
    withdrawNew = parseFloat(currentWithdrawBalance) + parseFloat(withdrawInputValue);
    withdrawTotal.innerText = withdrawNew;
    withdrawInput.value = '';

    //handle deposit - withdraw is not supposed to reduce from deposit
    /*
    const currentDepositAmount = document.getElementById('deposit-total');
    const depositTotalNum = parseFloat(currentDepositAmount.innerText);

    const newDepositTotal = depositTotalNum - withdrawNew;
    currentDepositAmount.innerText = newDepositTotal;
    */

    //handle balance
    const currentBalanceAmount = document.getElementById('balance-total');
    const balanceTotalNum = parseFloat(currentBalanceAmount.innerText);

    const newBalanceTotal = balanceTotalNum - parseFloat(withdrawInputValue);
    currentBalanceAmount.innerText = newBalanceTotal;
})