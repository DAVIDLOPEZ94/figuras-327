var lado, base, altura, radio, opcion, resultado;
const PI=3.14156;
opcion = parseInt(prompt("Seleccione el tipo de figura al que le desea calcular el area : 1. cuadrado 2. triangulo 3. circulo"));
switch (opcion) {
    case 1:
        lado = parseInt(prompt("Ingrese el valor del lado en centimetros"));
        resultado = lado * lado;
        alert(" El area del cuadrado es igual a " + resultado + " centimetros cuadrados");
          break;

    case 2:
        base  = parseInt(prompt("Ingrese el valor de la base en centimetros"));
        altura = lado * lado;
        resultado = (base*altura)/2;
        alert(" El area del tirangulo es igual a " +resultado + " centimetros cuadrados");
         break;

    case 3:
        radio = parseInt(prompt("Ingrese el valor del radio en centimetros"));
        resultado = radio * radio*PI;
        alert(" El area deL circulo es igual a " +resultado + " centimetros cuadrados");
         break;

    default:
        alert (" La opcion escogida no es valida")
        break;
}