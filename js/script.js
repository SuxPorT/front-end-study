document.querySelector(".hamburguer").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
);

document.querySelector("#quantity").addEventListener("change", updatePrice);
document.querySelector("#js").addEventListener("change", updatePrice);
document.querySelector("#layout-yes").addEventListener("change", updatePrice);
document.querySelector("#layout-no").addEventListener("change", updatePrice);
document.querySelector("#deadline").addEventListener("change", function () {
    const deadline = document.querySelector("#deadline").value;
    document.querySelector("label[for=deadline").innerHTML = `Prazo: ${deadline} dias`;
    updatePrice();
});

function updatePrice() {
    const quantity = document.querySelector("#quantity").value;
    const hasJS = document.querySelector("#js").checked;
    const hasLayout = document.querySelector("#layout-yes").checked;
    const deadline = document.querySelector("#deadline").value;
    

    
    let price = quantity * 10;
    if (hasJS) { price *= 1.1; }
    if (hasLayout) { price += 30; }

    let urgency = 1.5 - deadline * 0.1;
    price *= urgency;

    document.querySelector("#price").innerHTML = `R$ ${price.toFixed(2)}`;
}