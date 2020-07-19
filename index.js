
function wakeDog(dogName, dogBreed) {
    let str = `Wake ${dogName} the ${dogBreed}`
    return str;
}

function leashDog(dogName, dogBreed) {
    let str = `Leash ${dogName} the ${dogBreed}`;
    return str;
}

function walkToPark(dogName, dogBreed) {
    let str = `Walk to the park with ${dogName} the ${dogBreed}`;
    return str;
}

function throwFrisbee(dogName, dogBreed) {
    let str = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    return str;
}

function walkHome(dogName, dogBreed) {
    let str = `Walk home with ${dogName} the ${dogBreed}`;
    return str;
}

function unleashDog(dogName, dogBreed) {
    let str = `Unleash ${dogName} the ${dogBreed}`;
    return str;
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];
const result = [];

function exerciseDog(dogName, dogBreed){
    routine.forEach(element => {
        let r = element(dogName, dogBreed);
        result.push(r);
    });
    return result;
}

exerciseDog("Esther", "Dalmation");

console.log(routine);


console.log(result);