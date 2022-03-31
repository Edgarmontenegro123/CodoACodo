// Spread operator se utiliza para copiar las propiedades de un objeto a otro objeto
// Ejemplo 1
const persona1 = {
  nombre: "Juan",
  edad: 30,
  direccion: {
    calle: "Calle falsa 123",
    ciudad: "Ciudad falsa",
  },
};

// si queremos crear una segunda persona que viva en la misma direccion que la primera persona
// podemos hacerlo de la siguiente manera
const persona2 = {
  ...persona1,
  nombre: "Pedro",
  edad: 35,
  // implicitamente estariamos copiando la direccion de la primera persona
};
    console.log(persona2);

// podemos hacerlo de la siguiente manera, para hacerlo mas declarativo
const persona3 = {
  ...persona1,
  nombre: "Pedro",
  edad: 35,
  direccion: {
    ...persona1.direccion,
  },
};
// esto devolveria el mismo resultado que persona2
// =================================================================================
// ejercicios de desestructuracion

// 1. Desestructurar la direccion de la persona1 y guardarla en una variable
const {direccion} = persona1
console.log('direccion: ', direccion)
/* const per_01 = {...persona1.direccion}
console.log('per_01: ', per_01) */

// 2. Crear una variable nueva que contenga la direccion de la persona1 y la edad de la persona2
const dir_01_edad_02 = {direccion: persona1.direccion,
                        edad: persona2.edad,
                      }
console.log('dir_01_edad_02: ', dir_01_edad_02)

// 3. Crear una variable nueva que contenga las propiedades de la persona1 y la edad de la persona2
const per_01_edad_02 = {...persona1,
                            edad: persona2.edad,
                        }
console.log('per_01_edad_02: ', per_01_edad_02)

// 4. desestructurar la ciudad donde vive la persona1 y guardarla en una variable
//const {direccion: {ciudad}} = persona1
// esto es lo mismo que
const ciudad = persona1.direccion.ciudad
console.log('ciudad_persona_01: ', ciudad)

// =================================================================================

// Es comun que los objetos vengan anidados en otro objeto, o en arrays de objetos

const objetoComplejo = [
  {
    id: 1,
    nombre: "Juan",
    edad: 30,
    profesion: "Desarrollador",
    direccion: {
      calle: "Calle falsa",
      numero: 123,
      ciudad: "Ciudad falsa",
    },
    telefono: [
      {
        fijo: "1234567",
        movil: "123456789",
      },
    ],
  },
  {
    id: 2,
    nombre: "Pedro",
    edad: 35,
    profesion: "Desarrollador",
    direccion: {
      calle: "Calle falsa",
      numero: 1245,
      ciudad: "Ciudad falsa",
    },
    telefono: [
      {
        fijo: "7654321",
        movil: "987654321",
      },
    ],
  },
];

// para acceder a los datos de un objeto dentro de un array de objetos
// podemos hacerlo de la siguiente manera

const persona4 = objetoComplejo[0];

// por medio del inidice 0 podemos acceder a la persona1
// funciona de la misma manera que en los arrays

// una vez que tenemos al objeto en una variable podemos acceder a sus propiedades
persona4.nombre; // Juan

// tambien se podria hacer de la siguiente manera
persona4["nombre"]; // Juan
// accedemos a las propiedades del objeto mediante un string con el nombre de la clave que nos interesa

// =================================================================================

// Ejercicios de desestructuracion y arrays de objetos

// 1. Desestructurar el nombre de la primer persona dentro de objetoComplejo
const nombre_per_01 = objetoComplejo[0].nombre
console.log('Nombre: ', nombre_per_01)
/* const {nombre} = objetoComplejo[0]
console.log('Nombre: ', nombre) */

// 2. Desestructurar el nombre de la segunda persona dentro de objetoComplejo
// const pers_02 = objetoComplejo[1].nombre
// console.log('pers_02: ', pers_02)
const{nombre} = objetoComplejo[1]
console.log('Nombre: ', nombre)

// 3. Desestructurar el telefono fijo de la primer persona dentro de objetoComplejo
const pers_03 = objetoComplejo[0].telefono[0].fijo
console.log('pers_03: ', pers_03)
/* const {telefono: [{fijo}]} = objetoComplejo[0]
console.log('Teléfono fijo: ', fijo) */

// 4. Desestructurar el telefono movil de la segunda persona dentro de objetoComplejo
// const pers_04 = objetoComplejo[1].telefono[0].movil
// console.log('pers_04: ', pers_04)
const {telefono: [{movil}]} = objetoComplejo[1]
console.log('Teléfono movil: ', movil)
