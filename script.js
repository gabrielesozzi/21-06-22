// N1 Scriviamo una funzione che passata al map, dato un array di nomi torna una lista di "indice + Nome". es:
// const names = ['Luca', 'Gabriele'];
// namesToList(names) -> ['1 - Luca', '2 - Gabriele']

// N2 Scriviamo una funzione che passata al map, converta ogni elemento al propri indice inverso. es:
// const names = ['Luca', 'Gabriele', 'Richard', 'Roberta'];
// namesToList(names) -> [3, 2, 1, 0];

// N3 Scriviamo una funzione che passata al map, dato un array ne torni uno al contrario. es:
// const names = ['Luca', 'Gabriele'];
// namesToList(names) -> ['Gabriele', 'Luca'];

// (function () {
//   const names = ["Gabriele", "Pippo", "Pluto", "Paperino", "Kronk"];

//   let indexNames = names.map((element, index) => `${index} - ${element}`);
//   let indexReverse = names.map((_, index) => `${index}`).reverse();
//   let namesReverse = names.map((element, index) => `${element}`).reverse();

//   console.log(indexNames);
//   console.log(indexReverse);
//   console.log(namesReverse);
// })();

(function () {
  const names = ["Gabriele", "Pippo", "Pluto", "Paperino", "Kronk"];

  let indexAndNames = names.map((el, index) => `${index} - ${el}`);

  let indexReverse = names.map((_, index, array) => array.length - 1 - index);

  let namesReverse = names.map(
    (_, index, array) => names[array.length - 1 - index]
  );

  console.log(indexAndNames);
  console.log(indexReverse);
  console.log(namesReverse);
})();
