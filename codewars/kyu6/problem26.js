// Parameters: Given a 'secret' which should be accepted as any value type
// Return: Return an object that has only two functions: getSecret() and setSecret()
// which are for requesting what is stored in the objects property 'secret' and
// for setting the property 'secret'
// It should be noted that during the testing there are other requirements that
// were not mentioned :

// accept default values
// remember secrets
// not have a property called 'secret'
// should run without any other methods or properties
// still work when multiple secret holders exist with different secrets

// Example:
// let newSecret = createSecretHolder("Whisper")
// console.log(newSecret) =>
// SecretHolder {
//   _secret: 'Whisper',
//   getSecret: [Function (anonymous)],
//   setSecret: [Function (anonymous)]
// }
// console.log(newSecret.getSecret()) => Whisper
// newSecret.setSecret("Shout") =>
// console.log(newSecret.getSecret()) => Shout
// Pseudocode:

// this is best done with javascripts prototypes, so I just create a new object
// using the 'this' keyword for properties and methods:
// setting this._secret equal to the given secret, 
// to keep access limited to the property I used the '_'
// then declaring the method that returns the value of the property,
// and then finally the setter that changes the value of the property.
// finally, return the object using the 'new' keyword for polymorphism

function createSecretHolder(secret) {
  function SecretHolder() {
    this._secret = secret
    this.getSecret = () => {
      return this._secret
    }
    this.setSecret = (newSecret) => {
      this._secret = newSecret
    }
  }
  return new SecretHolder()
}
