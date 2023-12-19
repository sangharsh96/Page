function showHidden(radio) {
  
  var allHiddenDivs = document.querySelectorAll(".hidden");
  allHiddenDivs.forEach(function (hiddenDiv) {
    hiddenDiv.style.display = "none";
    hiddenDiv.closest(".box").style.backgroundColor= '#fff';
    hiddenDiv.closest(".box").style.borderColor = "#C8C8C8";
  });

  var label = radio.closest("label");
  var box = label.closest(".box");
  
  var hiddenDiv = label.querySelector(".hidden");
  if (radio.checked) {
    box.style.backgroundColor = "#007f6125";
    box.style.borderColor = "#007F61";
    hiddenDiv.style.display = "block";
  }
}

