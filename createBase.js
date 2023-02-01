function createBase(baseNumber) {
    return function(N) {
      return baseNumber + N;
    }
  }
  
  var addSix = createBase(6);
  addSix(10);
  addSix(21);
  console.log(addSix(21));
  console.log(addSix(16));