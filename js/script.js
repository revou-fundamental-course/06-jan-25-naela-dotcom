
function message(){name = window.prompt("What is your Name?");
  if ((name == null)||(name == "")){name = "Unknown";}
  document.cookie = name;
  document.getElementById("message").innerHTML = "<p> Hallo nice to meet you " + name + "</p>";}

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

function validasi() {
  var nama = document.getElementById("nama").value;
  var email = document.getElementById("email").value;
  var alamat = document.getElementById("alamat").value;
  if (nama != "" && email!="" && alamat !="") {
    return true;
  }else{
    alert('Anda harus mengisi data dengan lengkap !');
  }
}