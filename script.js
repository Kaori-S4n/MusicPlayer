function PressBtnMenuLeft(btnMenuLeft) {
  var btns = document.querySelectorAll(".btnMenuLeft");
  for (var i = 0; i < btns.length; i++) {
    btns[i].classList.remove("active");
    btns[i].disabled = false;
  }
  btnMenuLeft.classList.add("active");
  btnMenuLeft.disabled = true;
}