// LOGIN
function openLogin(){
  document.getElementById("loginPopup").style.display = "flex";
}
function closeLogin(){
  document.getElementById("loginPopup").style.display = "none";
}
function doLogin(){
  let phone = document.getElementById("phone").value;
  if(phone.length < 10){
    alert("Sahi 10 digit ka number daalo");
  } else {
    alert("OTP bhej diya hai " + phone + " pe (Demo OTP: 1234)");
    closeLogin();
  }
}

// SEAT SELECT HOTE HI PRICE UPDATE
let checks = document.querySelectorAll('.seats input:not([disabled])');
checks.forEach(c => {
  c.addEventListener('change', updatePrice);
});

function updatePrice(){
  let selected = document.querySelectorAll('.seats input:checked').length;
  let base = selected * 450;
  let total = base + 35;
  document.getElementById("seatCount").innerText = selected + " Seats";
  document.getElementById("baseFare").innerText = "₹ " + base;
  document.getElementById("totalFare").innerText = "₹ " + total;
}

// PAY
function doPay(){
  let selected = document.querySelectorAll('.seats input:checked').length;
  if(selected == 0){
    alert("Pehle koi seat select karo!");
    return;
  }
  let name = document.getElementById("pName").value;
  if(name == ""){
    alert("Passenger Name daalo pehle");
    return;
  }
  let total = selected * 450 + 35;
  alert("Booking Done! 🎉\n\nPassenger: " + name + "\nSeats: " + selected + "\nTotal Paid: ₹" + total + "\nPNR: 8645123790");
}

window.onclick = function(e){
  if(e.target.id == "loginPopup") closeLogin();
}
