/**
 * @description This function logs a string.
 * @param {any} thing The the thing to log
 * @param {boolean} toLog Whether to log the thing
 */
function log(thing, toLog) {
  if(toLog){
    console.log(thing);
  }
}

/**
 * @description  My application
 */
var myApp = {

  /**
   * @description  Display a greeting
   * @param {string} name The name of the person to greet
   */
  greet: function(name) {
    console.log('hello ' + name);
  }

};
