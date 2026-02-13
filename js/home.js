// add mony to the account
const addMony = document.getElementById('addMony');

addMony.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('money add button click');

  //get money added to the account
  const getAmount = document.getElementById('getAmount').value;
  console.log(getAmount);
  // get pin numbers
  const pinNum = document.getElementById('pinNum').value;
  console.log(typeof pinNum);

  if (pinNum === '1234567') {
    console.log('adding to money to your account');
    // get the current balance
    const balance = document.getElementById('accoutBlance').innerText;

    // step-5: add addMOneyInput with Balance
    const addMoney = parseFloat(getAmount);
    // console.log(addMoney);

    const balanceNumber = parseFloat(balance);
    // console.log(balanceNumber);
    const newBalance = addMoney + balanceNumber;
    console.log(newBalance);
  } else {
    alert('please try again');
  }
});
