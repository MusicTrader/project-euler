var second = 0;
var first = 1;
var num = 0;
var sum = 0;
var max = 4000000;

while(num <= max)
{
		num = first + second;
    first = second;
  	second = num;
	if(num % 2 === 0 && num <= max) {
    sum += num;
  }
}

console.log("Answer is " + sum);
