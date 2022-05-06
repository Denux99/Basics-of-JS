
//start
var numbers = 0;
while (numbers<5) {
  // console.log(numbers);
  numbers++;
}

//break
var numbers = 0;
while (numbers<5) {
  //console.log(numbers);
  if (numbers == 2) {
    break;
  }
  numbers++;
}

//continue
var numbers = 0;
while (numbers<5) {
  numbers ++;
  if (numbers < 5) {
continue;
  }
  console.log(numbers);
}
