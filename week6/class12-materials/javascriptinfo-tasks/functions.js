function checkAge(age){
  return (age > 18);
}


function checkAge(age){
  return (age > 18) ? true : confirm("parent permission?");
}

function checkAge(age){
  return (age > 18) || confirm("parent permission?");
}
function min(a, b){
  if (a < b){
    return a;
  }
  return b;
}
function pow(x, n){
  let product = x;
  for (let i = 1; i < n; i++){
    product *= x;
  }
  return product;
}
console.log(pow(3, 4));
