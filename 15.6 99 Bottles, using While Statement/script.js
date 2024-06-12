var beerTypeOne = 100;
var beerTypeTwo = 99;

while (beerTypeOne >= 1 && beerTypeTwo >= 0) {
    console.log(beerTypeOne + " bottles of beer on the wall, " + beerTypeOne + " bottles of beer. Take one down and pass it around, " + beerTypeTwo + " bottles of beer on the wall.");
    beerTypeOne--;
    beerTypeTwo--;
    if(beerTypeOne === 1 && beerTypeTwo === 0){
        console.log("HAHA I DID IT, ME CORY, I FINALLY AM LEARNING JAVASCRIPT!")
    }
}
