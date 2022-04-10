// I'm given a number. I see if that number could possibly be the product of two
//consecutive integers of the fibonnaci series.

//seeing the second example "productFib(800)" it really explains what you need to do.
//having a checking process for proving that false really is false. I'm looking for
//the integer before and the one after to be certain that another pair doesn't add up
//to the prod.

//start with the fibonnaci series. How to put f(n) and f(n + 1) somewhere to check another
//the product?




function productFib(prod){
  let fib = [0, 1]
  for(i = 2; i < prod; i++){
    if(fib[i - 2] + fib[i - 1] <= prod){
      fib.push(fib[i - 2] + fib[i - 1])
    }
  }
  console.log(fib)
  let productsArray = []
  for(j = 0; j < fib.length; j++){
    if(fib[j] * fib[j + 1] <= prod){
      productsArray.push(fib[j] * fib[j + 1])
    }
  }
  console.log(productsArray)
  if(productsArray.slice(-1)[0] === prod){
    return [productsArray.slice(-2)[0], productsArray.slice(-1)[0], false]
  }
  else{
    return [productsArray.slice(-2)[0], productsArray.slice(-1)[0], true]
  }
}

console.log(productFib(12))
