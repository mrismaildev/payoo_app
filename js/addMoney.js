const btnAddMoney = document.getElementById('btnAddMoney');
btnAddMoney.addEventListener('click', function (e) {
  e.preventDefault();

  const pinNum = document.getElementById('pinNum').value;
  const inputAmaount = document.getElementById('inputAmaount').value;
  if (pinNum === '123') {
    const accoutBlance = document.getElementById('accoutBlanceMy').innerText;
    console.log(accoutBlance);
    const addMoney = parseFloat(inputAmaount);
    const myBalance = parseFloat(accoutBlance);
    const newBalance = addMoney + myBalance;
    document.getElementById('accoutBlanceMy').innerText = newBalance;
    console.log(newBalance);
  } else {
    alert('please try again');
  }
});
