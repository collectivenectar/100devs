// Good ol' fizzbuzz. Thought I'd try it again to see if there was a better approach.

// I suppose you could do filling an array and then using map but it's just as much work.

// So here it is :
// from 1 to n, fill an array with fizz if divisible by 3, buzz if by 5, fizzbuzz if by both
// otherwise just the number itself.

function fizzbuzz(n)
{
  let fizzBuzz = []
  for(let num = 1; num <= n; num++){
    if(num % 3 === 0 && num % 5 === 0){
      fizzBuzz.push('FizzBuzz')
    }
    else if(num % 3 === 0){
      fizzBuzz.push('Fizz')
    }
    else if(num % 5 === 0){
      fizzBuzz.push('Buzz')
    }
    else{
      fizzBuzz.push(num)
    }
  }
  return fizzBuzz
}
