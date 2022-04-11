// I'm given a number. I see if that number could possibly be the product of two
//consecutive integers of the fibonnaci series.

//seeing the second example "productFib(800)" it really explains what you need to do.
//having a checking process for proving that false really is false. I'm looking for
//the integer before and the one after to be certain that another pair doesn't add up
//to the prod.

//start with the fibonnaci series. How to put f(n) and f(n + 1) somewhere to check another
//the product?

//return the two consecutive fibonacci numbers surrounding the given prod if false,
//return the two c f numbers that equal the product otherwise

//first version of this function had the fib for loop domain up to prod, but
//it wasn't efficient enough. I changed it to end at Math.sqrt(prod), since
//it's unlikely to find a fibonnaci series number useful above the square root of the given
//product, and to exclude the sqrt of product in the range doesn't exclude useful numbers.

function productFib(prod){
  let fib = [0, 1]
  for(i = 2; i < Math.sqrt(prod); i++){
    if(fib[i - 2] + fib[i - 1] <= prod){
      fib.push(fib[i - 2] + fib[i - 1])
    }
  }
  for(i = 0; i < fib.length; i++){
    if(fib[i] * fib[i - 1] === prod){
      return [fib[i - 1], fib[i], true]
    }
    else if(fib[i] * fib[i - 1] > prod && fib[i - 1] * fib[i - 2] < prod){
      return [fib[i - 1], fib[i], false]
    }
    else{

    }
  }
}

console.log(productFib())
