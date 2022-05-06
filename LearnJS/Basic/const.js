// function callBackExample(name, callback) {
//   console.log(callback(name));
// }
//
// callBackExample("naveen thennakoon", function (name) {
//   return "Hello " + name;
// })

// const person =  {};
// person ['name'] = "Maria";
// console.log(person.name);
//
// const array = [];
// array.push ("Maria from Array");
// console.log(array[0]);

//Arrays

const arrayOne = ['Naveen','Kaveen','Malith'];
const arrayTwo = ['Raveen','Saveen','Talith'];

const concatArray = [...arrayOne, ...arrayTwo];

concatArray.forEach(function (name) {
  console.log(name);
});

var x = 4+"4";
console.log(x);

function sanfoundry(javascript)
{
	return (javascript ?  “yes” :  “no”);
}
	bool ans=true;
console.log(sanfoundry(ans));
