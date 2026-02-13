console.log('i am connected');

const btnShowOut = document
  .getElementById('btnShowOut')
  .addEventListener('click', function () {
    console.log('I am click');
    const cashOutShow = document.getElementById('cashOutShow');
    cashOutShow.classList.remove('hidden');
    const addMoneyShow = document.getElementById('addMoneyShow');
    addMoneyShow.classList.add('hidden');
  });

const btnShowAdd = document
  .getElementById('btnShowAdd')
  .addEventListener('click', function () {
    console.log('I am click');
    const cashOutShow = document.getElementById('cashOutShow');
    cashOutShow.classList.add('hidden');
    const addMoneyShow = document.getElementById('addMoneyShow');
    addMoneyShow.classList.remove('hidden');
  });
