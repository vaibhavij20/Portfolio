document.addEventListener('DOMContentLoaded', (event) => {
  const helloText = document.getElementById('hello-text');
  const text = "Hello there,";
  let index = 0;

  function typeWriter() {
      if (index < text.length) {
          helloText.innerHTML += text.charAt(index);
          index++;
          setTimeout(typeWriter, 150);
      }
  }

  typeWriter();
});