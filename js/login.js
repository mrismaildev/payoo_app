//step -1 : set event handler
document.getElementById('btnLogin').addEventListener('click', function (e) {
  e.preventDefault();
  console.log('button click');

  // get phone numbers
  const phoneNubmers = document.getElementById('phoneNumbers').value;
  console.log(phoneNubmers);

  // get pin numbers
  const pinNumbers = document.getElementById('pinNumber').value;

  console.log(pinNumbers);
  // bad way to vlaidate
  if (phoneNubmers.length === '11' && pinNumbers === '1234') {
    console.log('you are log in');
    window.location.href = './home.html';
  } else {
    alert('worng phone numbers');
  }
});
