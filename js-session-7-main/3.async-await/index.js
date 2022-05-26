const pedirCerveza = (hora) => {
  console.log("Nos acercamos a la barra a pedir una cerveza");

  return new Promise((resolve, reject) => {
    // Simulando una función que no nos da un
    // resultado instantaneo, sino que tarda
    // un tiempo que no podemos precedir.
    if (hora === 23) {
      return resolve("Te llevas tu cerveza a mitad de precio");
    }

    if (hora === 24) {
      return reject("El bar ya está cerrado, márchate o llamo a policía");
    }

    return resolve("Pagas tu cerveza a precio normal");
  });
};

pedirCerveza(24)
  .then((res) => {
    console.log("then promise ->", res);
  })
  .catch((error) => {
    console.log("catch promise ->", error);
  });

const funcionAsincrona = async () => {
    try {
        const res = await pedirCerveza(24);
        console.log("res async/await -> ", res);
    }
    catch(error) {
        console.log("catch async ->", error);
    }
};
funcionAsincrona();
