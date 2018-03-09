var myDogs = [
    {name : "Rufus", age : 35},
    {name : "Terry", age : 13}
];

for(var i = 0; i < myDogs.length; i++) {
    var myDog = myDogs[i];
    console.log(`My dog ${myDog.name} is ${myDog.age} years old.`);
}