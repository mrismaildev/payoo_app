const cashOutBtn = document.getElementById('cashOutBtn');

cashOutBtn.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('I am clickd');
  const myPinNum = document.getElementById('myPinNum').value;
  const inputAmaountAdd = document.getElementById('inputAmaountAdd').value;

  if (myPinNum === '123') {
    console.log('you are cash out done');
    const accoutBlanceMy = document.getElementById('accoutBlanceMy').innerText;
    const addMoney = parseFloat(inputAmaountAdd);
    const balance = parseFloat(accoutBlanceMy);
    const currentBalance = balance - addMoney;
    document.getElementById('accoutBlanceMy').innerText = currentBalance;
  } else {
    alert('please try again');
  }
});
