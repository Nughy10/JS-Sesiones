const alumns = [
  { name: "Pepe Viruela", T1: false, T2: false, T3: true },
  { name: "Lucia Aranda", T1: true, T2: false, T3: true },
  { name: "Abel Cabeza", T1: false, T2: true, T3: true },
  { name: "Alfredo Blanco", T1: false, T2: false, T3: false },
  { name: "Raquel Benito", T1: true, T2: true, T3: true },
];

// let isApproved = false;

alumns.forEach(function(alumn){
    alumn.isApproved = false;
    alumn.aprobados = 0;
    
     alumn.T1 ? alumn.aprobados ++ : 0
     alumn.T2 ? alumn.aprobados ++ : 0
     alumn.T3 ? alumn.aprobados ++ : 0

    // if(alumn.T1){
    //     aprobados++;
    // }

    // if(alumn.T2){
    //     aprobados++;
    // }

    // if(alumn.T3){
    //     aprobados++;
    // }


    if(alumn.aprobados >= 2){
        alumn.isApproved = true;
        console.log(alumn.name, "ha aprobado")
        
    }else{
        console.log(alumn.name, "no ha aprobado")
    }

})


console.log(alumns)