// task-1
// let data = {
//     sophia: {
//         id: 33,
//         study: [{
//             primary: [
//                 { school_name: 'abc' },
//                 { location:'pachpur'}
//             ]
            
//         },
//         {
//             secondary: [
//                 { school_name: 'abc' },
//                 { location:'pachpur'}
//             ]
            
//         },

            
//         ]
//     }
// }
// console.log(data.sophia.study);
let data = {
  sophia: {
    id: 33,
    study: [
      {
        primary: [{ school_name: "abc" }, { location: "pachpur" }],
      },
      {
        secondary: [{ school_name: "def" }, { location: "xyz" }],
      },
    ],
  },
};

// Using dot notation
const secondaryLocationDotNotation = data.sophia.study[1].secondary[1].location;

console.log(secondaryLocationDotNotation);
