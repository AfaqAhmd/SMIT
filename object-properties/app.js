//  var plan1Name = "Basic";
//  var plan1Price = 3.99;
//  var plan1Space = 100;
//  var plan1Data = 1000;
//  var plan1Pages = 10;
//  var plan2Name = "Professional";
//  var plan2Price = 5.99;
//  var plan2Space = 500;
//  var plan2Data = 5000;
//  var plan2Pages = 50;
//  var plan3Name = "Ultimate";
//  var plan3Price = 9.99;
//  var plan3Space = 2000;
//  var plan3Data = 20000;
//  var plan3Pages = 500;


// alert("The cost of the " + plan2Name + "package is $" + plan2Price + " per month.");



// --------------------------------------------------------------------


// var plan1 = {
//  name: "Basic",
//  price: 3.99,
//  space: 100,
//  transfer: 1000,
//  pages: 10,
//  discountMonths: [6, 7]
//  };

//  function calcAnnual(discRate) {
//  var bestPrice = plan1.price;
//  var currDate = new Date();
//  var thisMo = currDate.getMonth();
//  for (var i = 0; i < plan1.discountMonths.length; i++) {
//         if (plan1.discountMonths[i] === thisMo) {
//             bestPrice = plan1.price * discRate;
//                 break;
//             }
//         }
//         return bestPrice * 12;
//      }

//      var annualPrice = calcAnnual(0.8);
//      console.log(annualPrice);
//      console.log(calcAnnual(0.8));





    //  ----------------------------------------------------------------------
    // now the funtion "calcAnnual" is attaached to the object 
    // and the function became the object's method 

        // var plan1 = {
        // name: "Basic",
        // price: 3.99,
        // space: 100,
        // transfer: 1000,
        // pages: 10,
        // discountMonths: [6, 7],
        // calcAnnual: function(percentIfDisc) {
        // var bestPrice = plan1.price;
        // var currDate = new Date();
        // var thisMo = currDate.getMonth();
        // for (var i = 0; i < plan1.discountMonths.length; i++) {
        // if (plan1.discountMonths[i] === thisMo) {
        // bestPrice = plan1.price * percentIfDisc;
        // break;
        // }
        // }
        // return bestPrice * 12;
        // }
        // };
        
        
        // console.log(plan1.calcAnnual(0.8));    
        // console.log(calcAnnual(0.85));    // we can't access it directly


// ------------------------------------------------------------
                        // Objects method
// now introducing "this" keyword When JavaScript sees this keyword, it
// knows you're referring to the object that's being defined.



// var plan1 = {
//         name: "Basic",
//         price: 3.99,
//         space: 100,
//         transfer: 1000,
//         pages: 10,
//         discountMonths: [6, 7],
//         calcAnnual: function(percentIfDisc) {
//         var bestPrice = this.price;
//         var currDate = new Date();
//         var thisMo = currDate.getMonth();
//         for (var i = 0; i < this.discountMonths.length; i++) {
//         if (this.discountMonths[i] === thisMo) {
//         bestPrice = this.price * percentIfDisc;
//         break;
//         }
//         }
//         return bestPrice * 12;
//         }
//         };


//          console.log(plan1.calcAnnual(0.8));  



        //  ---------------------------------------------------------------
                                    // objects custructors

    function Plan(name, price, space, transfer, pages) {
    this.name = name;
    this.price = price;
    this.space = space;
    this.transfer = transfer;
    this.pages = pages;
    }



    // ----------------
//     73
// Objects:
// Constructors for methods



function Plan(name, price, space, transfer, pages, discountMonths) {
 this.name = name;
 this.price = price;
 this.space = space;
 this.transfer = transfer;
 this.pages = pages;
 this.discountMonths = discountMonths;
 this.calcAnnual = function(percentIfDisc) {           // : change into =
 var bestPrice = this.price;
 var currDate = new Date();
 var thisMo = currDate.getMonth();
 for (var i = 0; i < this.discountMonths.length; i++) {
     if (this.discountMonths[i] === thisMo) {
         bestPrice = this.price * percentIfDisc;
         break;
        }
    }
    return bestPrice * 12;
 };
 }


    var p1 = new Plan("Basic", 3.99, 100, 1000, 10, [6, 7]);
    var p1Price = p1.calcAnnual(0.8);
    console.log(p1Price);

    var p2 = new Plan("Premium", 5.99, 500, 5000, 50, [6, 7, 11]);
    var p2Price = p2.calcAnnual(0.8);
    console.log(p2Price);




