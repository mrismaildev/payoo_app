// add mony to the account
const addMony = document.getElementById('addMony');

addMony.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('mony add button click');

  //get mony added to the account
  const getAmount = document.getElementById('getAmount').value;
  console.log(getAmount);
  // get pin numbers
  const pinNum = document.getElementById('pinNum').value;
  console.log(pinNum);
});
