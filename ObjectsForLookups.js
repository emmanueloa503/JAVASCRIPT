
//Using Objects for Lookups
/*
  Objects can be thought of as a key/value storage, like a dictionary. 
  If you have tabular data, you can use an object to lookup values rather
   than a switch statement or an if/else chain. This is most useful when 
   you know that your input data is limited to a certain range.

Convert the switch statement into an object called lookup. Use it to look 
up val and assign the associated string to the result variable.
*/
// Setup
function phoneticLookup(val) {
    let result ="";
  
    // Only change code below this line
     var lookup={
        "alpha":"Adams",
        "bravo":"Boston",
        "charlie":"Chicago",
        "delta":"Denver",
        "echo":"Easy",
        "foxtrot":"Frank" 
      }
  result= lookup[val];
    // Only change code above this line
    return result;
  }
  
  phoneticLookup("charlie");
