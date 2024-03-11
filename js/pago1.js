function tarjeta (){
    let cantidad = parseFloat(prompt("numero de articulos"));
    let pago = cantidad*50;
    alert("el precio a pagar es de " + pago);
    let tarjeta=parseInt(prompt("ingrese su numero de tarjeta"));
    let cvv = parseInt(prompt("ingrese su cvv"));
    let vencimiento;
    alert("confirme su pago \n" + "**************************************\n" + "su numero de tarjeta es: " + tarjeta + "\n" + "total pagado: " + pago);
    alert("gracias por su compra"); 
    window.location.href="index.html"
}