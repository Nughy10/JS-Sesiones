const oficiales = [
  { id: 20, name: "Captain Piett" },
  { id: 24, name: "General Veers" },
  { id: 56, name: "Admiral Ozzel" },
  { id: 88, name: "Commander Jerjerrod" },
];

const result = oficiales
    .map(oficial => {
        return {
            ...oficial,
            superId: oficial.id * 2,
        };
    })
    .filter(oficial => {
        return oficial.id > 50;
    })
    .map(oficial => {
        console.log('map ->', oficial);
        return oficial;
    })
    .find(oficial => {
        return oficial.id === 88;
    });

console.log(result);
console.log(oficiales);