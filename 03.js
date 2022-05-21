/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function esPrimo(num) {
  for(var i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num > 1;
}

function sumaTodosPrimos(array) {

  // La funcion llamada 'sumaTodosPrimos' recibe como argumento un array de enteros.
  // y debe devolver la suma total entre todos los numeros que sean primos.
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Nota: Los números 0 y 1 NO son considerados números primos
  // Ej:
  // sumaTodosPrimos([1, 5, 2, 9, 3, 4, 11]) devuelve 5 + 2 + 3 + 11 = 21
  // Nota: Podes usar la funcion 'esPrimo' resuelta en la homework JSII.

  // Tu código aca:
  return array.reduce((acumulado, numero) => {
    if (esPrimo(numero)) {
      acumulado += numero;
    }
    return acumulado
  }, 0);

 /* var sonPrimos=0;
  for (var i=0; i<array.length; i++){
    if(array[i] > 1){
      for (var x=2; x<array.length;x++)
      if(numero %i ===0){

      }  

    }
  } */

}




// No modifiques nada debajo de esta linea //

module.exports = sumaTodosPrimos