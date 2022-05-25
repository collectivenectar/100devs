// compound interest calculator returns years for principal amount to reach desired amount
// P given principal(int), interest(float), tax(float), desired(int)
// return number of years(int)
// Example: given principal of 500, interest = 0.05, tax = 0.01, desired = 1000 => 15 years
// given principal of 500, interest = 0.05, tax = 0.01, desired = 501 => 1 year.
// Pseudocode:
// Recursive design,
// if principal amount is equal to desired amount, exit recursive loop
// otherwise go one loop deeper, passing in principal + interest - taxes as principal.

function calculateYears(principal, interest, tax, desired) {
    if(principal >= desired){
      return 0
    }
    else{
      let add = principal * (interest - interest * tax)
      return 1 + calculateYears(principal + add, interest, tax, desired)
    }
}
console.log(calculateYears(500, 0.05, 0.01, 1000))
