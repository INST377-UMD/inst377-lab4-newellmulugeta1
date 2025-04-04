
function alertMe() {
    const name = document.getElementById("name").value.trim();
    if (name !== "") {
      alert("Hi " + name + "!");
    }
    return false; 
  }
  
  let currentColor = "blue";
  
  function toggleColor() {
    if (document.body.style.backgroundColor === "blue") {
      document.body.style.backgroundColor = "green";
      currentColor = "green";
    } else {
      document.body.style.backgroundColor = "blue";
      currentColor = "blue";
    }
  }
  
  // Pretty sure that I gotta validate text here
  function validateText() {
    const validation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    const input = document.getElementById("textInput").value;
    if (validation.test(input)) {
      alert("Special characters are not allowed!");
    } else {
      alert("Text is valid!");
    }
    return false;
  }
  
  // So we are going to add text to the heading for this I think
  function addText() {
    const heading = document.getElementById("main-heading");
    heading.textContent += " Add Text";
  }
  