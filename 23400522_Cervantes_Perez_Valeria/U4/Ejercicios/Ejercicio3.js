// 1
function potencia(base, exponente) {
    let res = 1
    for (let i = 0; i < exponente; i++) {
        res = res * base
    }
    console.log(base + " elevado a " + exponente + " es " + res)
    return res;
}

potencia(2, 3);

// 2
function cajeroAutomatico() {
    let saldo = 5000; // Saldo inicial requerido
    let opcion;

    
    while (opcion !== 4) {
        opcion = parseInt(prompt(
            "--- CAJERO AUTOMÁTICO ---\n" +
            "1. Consultar saldo\n" +
            "2. Depositar\n" +
            "3. Retirar\n" +
            "4. Salir\n\n" +
            "Seleccione una opción:"
        ));

        switch (opcion) {
            case 1:
                alert("Su saldo actual es: $" + saldo);
                break;

            case 2:
                let deposito = parseFloat(prompt("Ingrese la cantidad a depositar:"));
                if (deposito > 0) {
                    saldo += deposito; 
                    alert("Depósito exitoso.");
                } else {
                    alert("Cantidad no válida.");
                }
                break;

            case 3:
                let retiro = parseFloat(prompt("Ingrese la cantidad a retirar:"));
                if (retiro > 0) {
                    if (retiro <= saldo) {
                        saldo -= retiro;
                        alert("Retiro exitoso.");
                    } else {
                        alert("Error: Fondos insuficientes.");
                    }
                } else {
                    alert("Cantidad no válida.");
                }
                break;

            case 4:
                alert("Operación terminada. Gracias por usar el cajero automático");
                break;

            default:
                alert("Opción no válida. Intente de nuevo.");
                break;
        }
    }
}

cajeroAutomatico();

// 3
function juegoDados() {
    let dado1, dado2;
    let lanzamientos = 0;
    do {
        dado1 = Math.floor(Math.random() * 6) + 1;
        dado2 = Math.floor(Math.random() * 6) + 1;
        lanzamientos++;

        console.log(dado1 + " - " + dado2);
    } while (dado1 != dado2);
    console.log("Se necesitaron "+lanzamientos+ " lanzamientos");
}

juegoDados();

// 4
function adivinarNumero() {
    const num = Math.floor(Math.random() * 100) + 1;
    const maxIntentos = 7;
    let intentos = 0;
    let acierto = false; 

    alert("Adivina el número entre 1 y 100. Tienes 7 intentos");

    while (intentos < maxIntentos && !acierto) {
        intentos++
        let supo = parseInt(prompt("Intento "+intentos+"/"+maxIntentos));

        if (supo == num) {
            alert("Adivinaste el número en el intento " + intentos)
            acierto = true;
        } else if (supo < num) {
            alert("El número es mas grande")
        } else {
            alert("El número es mas pequeño")
        }
    }

    if (!acierto) {
        alert("Te quedaste sin intentos. el número era " + num);
    }
}

adivinarNumero();

// 5
function registroVentas() {
    let ventas = [];
    let continuar = true;

    while (continuar) {
        let vendedor = prompt("Nombre del vendedor:");
        let producto = prompt("Nombre del producto:");
        let cantidad = parseInt(prompt("Cantidad vendida:"));
        let precioUnitario = parseFloat(prompt("Precio unitario:"));

        ventas.push({
            vendedor: vendedor,
            producto: producto,
            cantidad: cantidad,
            precioUnitario: precioUnitario,
            totalVenta: cantidad * precioUnitario
        });

        continuar = confirm("¿Deseas registrar otra venta?");
    }

    let totalVentasRealizadas = ventas.length;

    let totalIngresos = ventas.reduce((suma, venta) => suma + venta.totalVenta, 0);

    let productosContador = {};
    let vendedoresContador = {};

    ventas.forEach(venta => {
        if (productosContador[venta.producto]) {
            productosContador[venta.producto] += venta.cantidad;
        } else {
            productosContador[venta.producto] = venta.cantidad;
        }

        if (vendedoresContador[venta.vendedor]) {
            vendedoresContador[venta.vendedor] += venta.totalVenta;
        } else {
            vendedoresContador[venta.vendedor] = venta.totalVenta;
        }
    });

    let mejorVendedor = "";
    let maxMonto = 0;

    for (let vendedor in vendedoresContador) {
        if (vendedoresContador[vendedor] > maxMonto) {
            maxMonto = vendedoresContador[vendedor];
            mejorVendedor = vendedor;
        }
    }

    console.log("Total de ventas realizadas: " + totalVentasRealizadas);
    console.log("Total de ingresos: $" + totalIngresos.toFixed(2));

    console.log("Unidades vendidas por producto:");
    for (let producto in productosContador) {
        console.log(producto + ": " + productosContador[producto] + " unidades");
    }

    console.log("Vendedor con más ventas: " + mejorVendedor + " ($" + maxMonto.toFixed(2) + ")");
}

registroVentas();