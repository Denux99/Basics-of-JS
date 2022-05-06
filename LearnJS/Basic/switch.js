
//if
// var person = {
//   name :"Naveen",
//   age : 11
// }
//
//
// if (person.age >= 18) {
//   console.log(person.name + " is an adult");
// }else if (person.age == 17) {
//   console.log(person.name + " is about to be an adult");
// }else {
//   console.log(person.name + "is not an adult");
// }

//step2
var person = {
  name : "Lavan",
  age : 10
}

switch (person.age) {
  case 17:
  console.log(person.name + " is about to be an adult");
    break;
    case 18:
    console.log(person.name + " is an adult");
      break;
  default:
  console.log("we don't know");
}

//step3
var person = {
  name : "Lavan",
  age : 10
}

switch (true) {
  case (person.age ==17):
  console.log(person.name + " is about to be an adult");
    break;
    case (person.age >= 18):
    console.log(person.name + " is an adult");
      break;
  default:
  console.log(person.name + " is not an adult");
}


//Days

switch (new Date().getDay()) {
  case 1:
    console.log("Sunday");
    break;
  default:
  console.log("I don't know");

}


switch (new Date().getDay()) {
  case 2:
  console.log("Sunday");

    break;
  default:
  console.log("I don't know");

}
