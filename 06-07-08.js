/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function crearClaseViajero() {
  class Viajero {
    constructor(nombre, edad, paises, compañeros) {
      // El constructor de la clase Viajero recibe nombre (string), edad (integer), paises (array de strings), compañeros (array de objetos)
      // Inicializar las propiedades del viajero con los valores recibidos como argumento

      // Tu código aca:

      /* const Viajero = crearClaseViajero();
        const viajero = new Viajero('toni', 23, ['Brasil', 'Francia'], [{nombre: 'John', nacionalidad: "Australiano", edad: 27}]);
        expect(viajero.nombre).toBe('toni');
        expect(viajero.edad).toBe(23);  
        expect(viajero.paises).toEqual(['Brasil', 'Francia']);
        expect(viajero.compañeros).toEqual([{nombre: 'John', nacionalidad: "Australiano", edad: 27}]);
*/

      this.nombre = nombre;
      this.edad = edad;
      this.paises = paises;
      this.compañeros = compañeros;

    }

    addCompañero(nombre, nacionalidad, edad) {
      // El método 'addCompañero' recibe un string 'nombre', un string 'nacionalidad' y un entero 'edad' y
      // debe agregar un objeto:
      // { nombre: nombre, nacionalidad: nacionalidad, edad: edad} al arreglo de compañeros del viajero.
      // No debe retornar nada.

      // Tu código aca:

      this.compañeros.push({nombre:nombre,nacionalidad:nacionalidad, edad:edad});
    }

    addPais(pais) {
      // El método 'AddPais' recibe un string 'pais' y debe agregarlo al arreglo de paises del viajero.
      // No debe retornar nada.

      // Tu código aca:

      this.paises.push(pais);

    }

    getCompañeros() {
      // 7. El método 'getCompañeros' debe retornar un arreglo con sólo los nombres del arreglo de compañeros
      // del viajero.
      // Ej:
      // Suponiendo que el viajero tiene estos compañeros: [{nombre: 'John', nacionalidad: "Australiano", edad: 27},{nombre: 'Peter', nacionalidad: "Belga", edad: 23}]
      // viajero.getCompañeros() debería devolver ['John', 'Peter']

      // Tu código aca:

      var newArray=[];
      this.compañeros.forEach(objeto => {
        newArray.push(objeto.nombre);
      });
      return newArray;
    }

    getPaises() {
      // El método 'getPaises' debe retornar un arreglo con los paises del viajero
      // Ej:
      // viajero.getPaises() debe devolver ['Belgica', 'Estados Unidos', 'Islandia']

      // Tu código aca:
       return this.paises;
    }

    getPromedioEdad() {
      // 6. El método 'getPromedioEdad' debe retornar el promedio de edad de los compañeros de un viajero.
      // Ej:
      // Si el viajero tuviera estos compañeros:
      // {
      //   compañeros: [{
      //     nombre: 'John',
      //     nacionalidad: "Australiano",
      //     edad: 27,
      //   }, {
      //     nombre: 'Peter',
      //     nacionalidad: "Belga",
      //     edad: 23
      //   }]
      // }
      // viajero.getPromedioEdad() debería devolver 25 ya que (27 + 23) / 2 = 25

      // Tu código aca:


      var promedio=0;
      this.compañeros.forEach(objeto => {
       promedio += objeto.edad;
      });

      return promedio / this.compañeros.length;
    }
  };

  return Viajero;
}

// No modifiques nada debajo de esta linea //

module.exports = crearClaseViajero