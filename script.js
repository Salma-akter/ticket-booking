let firstIncrease = document.getElementById('firstclass-increase');
let firstDecrease = document.getElementById('firstclass-decrease');

document.getElementById('bookingConfirmation').disabled = true;
const firstClassTicketPrice = 150;
const economyClassTicketPrice = 100;

function handleChange(type, isIncrease) {
  const ticketInput = document.getElementById(type + '-count');
  let ticketInputCount = parseInt(ticketInput.value) || 0;
  
  const ticketInputNewCount = isIncrease ? ticketInputCount + 1 : (ticketInputCount > 0) ? ticketInputCount - 1 : 0;


  ticketInput.value = ticketInputNewCount;
  let totalPrice = 0;
  if (type == 'firstclass') {
    totalPrice = ticketInputNewCount * firstClassTicketPrice;
  } if (type == 'economyclass') {
    totalPrice = ticketInputNewCount * economyClassTicketPrice;
  }

  calculateTotal();
}

function calculateTotal() {
  const firstInput = document.getElementById('firstclass-count');
  const firstInputCount = parseInt(firstInput.value) || 0;

  const economyInput = document.getElementById('economyclass-count');
  const economyInputCount = parseInt(economyInput.value) || 0;

  const totalTicketPrice = (firstInputCount * firstClassTicketPrice) + (economyInputCount * economyClassTicketPrice);
  document.getElementById('subtotal').innerText = '$' + totalTicketPrice;
  const tax = Math.round(totalTicketPrice * .1);
  document.getElementById('vat-amount').innerText = '$' + tax;
  const grandTotal = totalTicketPrice + tax;
  document.getElementById('grand-total').innerText = '$' + grandTotal;

  document.getElementById('bookingConfirmation').disabled = false;
}

function confirmation() {
    document.getElementById('confirmation').style.display='block';
    document.getElementById('subtotal').innerText = '$' + 0.00;
    document.getElementById('vat-amount').innerText = '$' + 0.00;
    document.getElementById('grand-total').innerText = '$' + 0.00;
    document.getElementById('firstclass-count').value = '';
    document.getElementById('economyclass-count').value= '';
}