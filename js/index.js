
let cantidadProductos = parseInt(prompt("Ingrese la cantidad de productos que desea comprar:"))


for (let i = 1; i <= cantidadProductos; i++){
    let precio = parseFloat(prompt("Ingrese el precio de su producto N° "+i))
    let cuotas = parseInt(prompt("Ingrese cantidad de cuotas entre 1 y 12"))
    let result1 = precio / cuotas
    let result2 = precio * 1.25 / cuotas
    let result3 = precio * 1.50 / cuotas
    if (cuotas <= 3){
        alert("Su pago es de "+cuotas+" cuotas a $"+result1)
    } else if (cuotas >= 4 && cuotas <= 6){
        alert("Su pago es de "+cuotas+" cuotas a $"+result2)
    } else if (cuotas >= 7 && cuotas <= 12){
        alert("Su pago es de "+cuotas+" cuotas a $"+result3)
    }else if (cuotas > 12){
        alert("Cantidad de cuotas no validas")
    }else{
        
    }
}
