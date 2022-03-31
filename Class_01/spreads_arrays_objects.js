/* spread, arrays y objetos */

// spread operator se utiliza para copiar un array o un objeto en un nuevo array o objeto

const obj_01 = {
  name: "Object_01",
  sumary: "This is important"
}

const obj_02 = {
  ...obj_01,
  name: "New object"
}

console.log('obj_02', obj_02)

const obj_03 = {
  ...obj_02,
  status: true
}

console.log('obj_03', obj_03)


/* ************************************************************************** */

// Arrays y métodos de iteración


const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

nums.forEach((num) => {
  console.log(num)
})

const nums2 = nums.map((num) => {
  return num * 2
})

console.log(nums2)

const nums3 = nums.filter((num) => {
  return num > 5
})

console.log(nums3)

const movies_names = [
  "Batman",
  "Spiderman",
  "Superman",
  "Ironman",
  "Captain America",
  "Thor",
]; 

// Se puede acceder a las propiedades del array desde su indice
console.log(movies_names[3]) 

//para agregar un elemento al inicio del array se usa el metodo unshift
movies_names.unshift("Dr Strange")
console.table(movies_names);

// para agregar un elemento al final del array se usa el metodo push
movies_names.push("Hulk")
console.table(movies_names);

// para eliminar un elemento del inicio del array se usa el metodo shift
movies_names.shift()
console.table(movies_names);

// para eliminar un elemento del final del array se usa el metodo pop
movies_names.pop()
console.table(movies_names);

// para eliminar un elemento del array se usa el metodo splice
movies_names.splice(2, 1) // Elimino desde la posición 2, un elemento
console.table(movies_names);

// para agregar un elemento en una posicion especifica del array también se usa el metodo splice

// El primer parametro es la posicion en la que se va a agregar el elemento
// El segundo parametro es la cantidad de elementos que se va a eliminar
// El tercer parametro es el elemento que se va a agregar
movies_names.splice(2, 0, "Flash") 
console.table(movies_names);

// ForEach
movies_names.forEach((name, i) => {
  console.log(`${i}: ${name}`)
})

// El metodo map itera sobre un array y devuelve un nuevo array con los resultados
movies_names_to_upper = movies_names.map((name) => {
  return name.toUpperCase()
})

console.log(movies_names_to_upper)

// El metodo filter itera sobre un array y devuelve un nuevo array con los resultados
const filtered_movies_names = movies_names.filter((movie_name) => {
  return /* movie_name.length > 7 */ movie_name === "Thor"
})

console.log(filtered_movies_names)

// El metodo find itera sobre un array y devuelve el primer elemento que cumpla la condición

const batman_movie = movies_names.find((movie) => {
  return movie === "Batman"
})
console.log(batman_movie)

/* El metodo reduce permite iterar sobre un array y devolver un valor
  
    El primer parametro es el acumulador
    El segundo parametro es el elemento actual
    El tercer parametro es el indice del elemento actual
    
    El parametro acumulador se inicializa con el primer elemento del array
    El parametro acumulador se actualiza con el resultado de la operacion
*/

const total_movies_names = movies_names.reduce(
  (acumulador, elemento, indice_actual) => {
    console.log('Acumulador: ', acumulador)
    console.log('Elemento: ', elemento)
    console.log('Indice actual: ', indice_actual)
    return acumulador + elemento.length
  }, 
  0
  )

  console.log(total_movies_names)