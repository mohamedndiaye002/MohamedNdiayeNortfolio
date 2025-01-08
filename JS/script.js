// --------------------------------------------------------

function typing() {
  let text = document.getElementById('myFunction').textContent;
  document.getElementById('myFunction').innerHTML = '';
  let index = 0;

  function typeText() {
    if (index < text.length) {
      document.getElementById('myFunction').innerHTML += text[index];
      index = index + 1;
      setTimeout(typeText, 100);
    }
  }

  typeText();
}





document.addEventListener(
  "DOMContentLoaded",
  typing()
);



