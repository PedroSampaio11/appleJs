// seleçoes
const buttons = document.querySelectorAll("#image-picker li ");
const image = document.querySelector("#product-image");

// loop nos botoes
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e);

    buttons.forEach((btn) => {
      btn.querySelector(".color").classList.remove("selected");
    });

    // representa o elemento acionado
    const button = e.target;

    const buttonId = button.getAttribute("id");
    console.log(buttonId);

    button.querySelector(".color").classList.add("selected");

    image.classList.add("changing");
    image.setAttribute("src", `img/iphone_${buttonId}.jpg`);

    // torca imagem com transiçao 
    setTimeout(() => {
      image.classList.toggle("changing")
    }, 310);
  });
});
