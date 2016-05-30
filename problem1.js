var solution1 = function () {
	var sum = 0;

	for(i = 1; i<1000; i++) {
		if(i % 3 === 0 || i % 5 === 0) {
	  		sum += i;
	  }
	}
	console.log(sum);
	return sum;
}

var solution2 = function() {
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
	return sum;
	console.log("Answer is " + sum);
}

var solution3 = function() {
	var x = 1, div = 0, primes = [];

	while(primes.length != 1000) {
	    x++;
	    for(var i = 2; i < x && !div; i++) if(!(x % i)) div++;
	    if(!div) primes.push(x); else div = 0;
	}

	console.log(primes[primes.length-1]);
	return primes[primes.length-1];
}