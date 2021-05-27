function onlyNumberKey(evt) {
  // Only ASCII charactar in that range allowed
  var ASCIICode = evt.which ? evt.which : evt.keyCode;
  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
    return false;
  return true;
}

function msubmit() {
    let emp = document.getElementById('mobile').value;
    if (emp === '') {
        document.getElementById('message').innerHTML = "Please fill the details.";
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').style.display = 'block';
        $(function() {
            setTimeout(function() { $("#message").fadeOut(1500); }, 1000)
        })
    }
    else {
        document.getElementById('message').innerHTML = "Link has been sent.";
        document.getElementById('message').style.color = 'green';
        document.getElementById('message').style.display = 'block';
        $(function() {
            setTimeout(function() { $("#message").fadeOut(1500); }, 1000)
        })
    }
}