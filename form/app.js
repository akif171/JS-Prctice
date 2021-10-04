const option = document.querySelectorAll(".select");
const inp = document.querySelector(".inp")
const selec = document.querySelector(".selec")

option.forEach((opt) => {
  opt.addEventListener("change", () => {
    const optionElement = opt.selectedOptions[0];

    const optionValue = opt.selectedOptions[0].value;

    const inputValue =
      optionElement.parentElement.parentElement.previousElementSibling
        .childNodes[1].value;

        inp.innerHTML = inputValue
        selec.innerHTML = optionValue

    console.log(inputValue);
    console.log(optionValue);

    
  });
});
