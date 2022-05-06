//Question 1
var a = 10;

function test (){
  console.log(a);
  var a = 20;
  console.log(a);
}

test();
//Answer [undifined,20]

//Question 2
var test = function(){
  console.log(10);
};

function test(){
  console.log(20);
}

test();
