var assertThrows = function(func, x, y) {
    var threw = false;
    // Wrap func with a try/catch
    // If an error is thrown, set threw to true
    try {
        func(x, y);
    }
    catch(err){
        console.log("Error reading " + filename + ". Error logged. Continuing...");
    }
  
    console.log("The rest of your program worked!");
    // Depending on whether an error was thrown, threw is either true or false
    return threw;
  };
  
  var multiply = function(x, y) {
    // use 'typeof' keyword to check if both x and y are numbers:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
    if ("** some check goes here **") {
      // throw an error if either x or y is not a number
    }
    else return x * y;
  };
  