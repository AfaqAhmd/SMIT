const person = {
  name: "Afaq",
  age: 25,
  isStudent: true,
  greet: function () {
    console.log("Hello!");
  }
};





console.log(person.name);       // ahmed
console.log(person['age']);     // 25
person.greet();                 // Hello!
2


var companies = [
  {
    "compnay Name": "Bata",
    products: [
        { 
            productCategory: "man",
            varrieties : [
                {
                    name : 'sandils',
                    isAvailable: 'false',
                },
                {
                    name: "shoes"
                }, 
                {
                    name: "slippers"
                }, 
            ]
         }
    ],
  },
];


// create a complete relation ship Gient Compnay array of object
// atleast gient company has 5 child compnaies , 