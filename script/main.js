
//FUNCION MENU ACORDEON
var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}


const cacl = document.querySelector(".calcular")

function calcularPorcentaje (a, b){
    var interes;
        if(a <= 3)i = 0.025; // 2.5%
        else if(a > 3 && a < 6) interes = 0.05; // 5% 
        else if(a > 6 && a < 10) interes = 0.075 // 7.5% 
        else if (a > 10 && a < 14) interes = 0.1 // 10%

    let operacion =  b * a * interes;
    return operacion
    }

function calcularTotal(a, b) {
    let number1 = parseInt(a);
    let number2 = parseInt(b);
    return number1 + number2
} 

cacl.addEventListener("click",()=>{
    const monto = document.querySelector(".amount").value;
    const meses = document.querySelector(".month").value;
    const tax = document.querySelector(".tax")
    const amountResult = document.querySelector(".amount-result")

    let taxResult = calcularPorcentaje(meses, monto); 
    let final = calcularTotal(monto, taxResult);
    amountResult.textContent = `Monto a devolver: $${final}`
    tax.textContent =`intereses: $${taxResult}`;
    

}
)
