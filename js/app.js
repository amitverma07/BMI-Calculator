let btns = document.getElementById("myBtn");
btns.addEventListener("click", function (e) {
  e.preventDefault();
  let height = document.getElementById("heightValue").value;
  let weight = document.getElementById("weigthValue").value;
  let result = Math.round(weight / Math.pow(height, 2) * 10000);
  document.getElementById("demo").innerHTML = Math.round(result * 100) / 100;
  document.getElementById("heightValue").value = "";
  document.getElementById("weigthValue").value = "";

  if (result < 1850) {
    document.getElementById("tetx").innerHTML = "You are too thin.";
  }
  else if (result > 1850 && result < 2500) {
    document.getElementById("tetx").innerHTML = "You are healthy.";
  }
  else if (result > 2500) {
    document.getElementById("tetx").innerHTML = "You have overweight.";
  }
  else {
    alert("Please Fill in everything correctly");
  }
});