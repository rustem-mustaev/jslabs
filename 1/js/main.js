document.body.addEventListener("click", function(event) {
    if (event.target.nodeName == "BUTTON")
      console.log(event.target.textContent);
  });