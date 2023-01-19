//FUNCTION
  function reusableFunction(){
    console.log("Hi World");
  }
  reusableFunction(); //calling function

  //Parameter in functions
  function functionWithArgs(num1, num2){
    console.log(num1 + num2);
  }
  
  functionWithArgs(1,3);


  //Return a Value from a Function with Return
  function timesFive(num){
    return num * 5
  }
  
  const answer= timesFive(10);