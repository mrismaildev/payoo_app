console.log('button clicking file added');

//step -1 : set event handler
document.getElementById('btnLogin').addEventListener('click', function (e) {
  //step-2 : prevent default behavior
  e.preventDefault();
  console.log('login button click');

  // 3no : get the phone number
  const phoneNumbers = document.getElementById('phoneNumbers').value;
  console.log(phoneNumbers);
});
