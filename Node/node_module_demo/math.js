function square(x){
  return x *x;
}

function cube(x){
  return x * x * x;
}

exports.square = square; //the term after exports. can be anything...after equals is the funciton name that you are exporting
exports.cube = cube;
