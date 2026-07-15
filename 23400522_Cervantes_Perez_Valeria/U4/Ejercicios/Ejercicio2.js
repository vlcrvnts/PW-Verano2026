// 1 
function aleatorios(){
    let n1 = Math.floor(Math.random()*100+1);
    let n2 = Math.floor(Math.random()*100+1);
    console.log("num 1: " + n1);
    console.log("num 2: " + n2);
    if(n1==n2){
    console.log("Los números son iguales");
    }else if(n1>n2){
        console.log(n1 + " es el mayor");
    }else{
        console.log(n2 + " es el mayor");
    }
}

aleatorios();

// 2
function aleatorio05(){
    let n;
    do {
        n = Math.floor(Math.random()*6);
        console.log(n);
    }while(n!=0)
}

aleatorio05();

// 3
function tabla2a10() {
    let tabla = Math.floor(Math.random()*9+ 2);
    console.log("Tabla del número "+tabla);
    for (let i = 1; i <= 10; i++) {
        console.log(`${tabla} x ${i} = ${tabla * i}`);
    }
}

tabla2a10();

// 4
function numerosParImpar() {
    let par = 0;
    let impar = 0;

    for (let i = 1; i <= 10; i++) {
        let n = parseInt(prompt("Ingresa un número"));
        if (n < 1 || n > 100) {
            console.log("El número debe estar entre 1 y 100");
            break;
        };
        if (n % 2 == 0) {
            par++
        } else {
            impar++
        }
    }
    
    console.log("Números pares: " + par);
    console.log("Números impares: " + impar);   
}

numerosParImpar();

// 5
function calculoComision() {
    let n;
    do {
        n = Number(prompt("Ingresa la cantidad de ventas"));
        if (n < 5000 || n > 30000) {
            console.log("La cantidad debe estar entre 5000 y 30000");
        }
    } while (n < 5000 || n > 30000);

    let com;
    if (n < 10000) {
        com = n * 0.10
    } else if (n >= 10000) {
        com = n * 0.15
    }

    alert("Dinero recibido por comisión: " + com);
}

calculoComision();

