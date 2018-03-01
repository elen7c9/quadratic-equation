module.exports = function solveEquation(equation) {
  
  var a = parseInt(equation.split('x^2')[0].split('*')[0]);
  var b = parseInt(equation.split('x^2')[1].split('*')[0].split(' ').join(''));
  var c = parseInt(equation.split('x^2')[1].split('x')[1].split(' ').join(''));

  var d = Math.pow(b,2) - 4*a*c;

  var x1 = ((-1)*b + Math.sqrt(d) ) / (2*a);
  var x2 = ((-1)*b - Math.sqrt(d) ) / (2*a);
  
  var result = [Math.round(x1), Math.round(x2)];
}
