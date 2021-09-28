/**
 * description: Function return a deep copy of the passed object 
 * arguments: Function accepts an parameter of type 'Object'
 * returns: Function return an object 
 * */ 
const deepCopy = (obj) => {

    let nobj = {};
    for(let i in obj) {
        if (obj[i].constructor.name === 'Object') {
            nobj[i] = deepCopy(obj[i])
        } else {
            nobj[i] = obj[i];
        }
    }
    return nobj
}

// Initialized obj with a nested object
let obj = {
    name: "Pikachu",
    type: "Electric",
    attack: {
        normal: {
            first: "Tail whip",
            second: "Quick attack",
            third: ["name",["name","name"]]
        },
        electric: {
            first:"Thunder bolt",
            third: "Electro ball",
            fourth: "Thunder wave"
        }
    }
}

// Calling deepCopy function with an object and storing the result into another object
let nobj = deepCopy(obj);

// Changing name property of an object obj
obj.name = "charizard";

// Changing attck property of an object obj
obj.attack = {};

console.log(obj)
// o/p
// { name: 'charizard', type: 'Electric', attack: {} }

console.log(nobj);
// o/p
//  {
//     name: 'Pikachu',
//     type: 'Electric',
//     attack: {
//       normal: { first: 'Tail whip', second: 'Quick attack' },
//       electric: {
//         first: 'Thunder bolt',
//         third: 'Electro ball',
//         fourth: 'Thunder wave'
//       }
//     }
//   }
