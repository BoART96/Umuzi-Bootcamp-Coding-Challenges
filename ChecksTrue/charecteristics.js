function test65(x, y) 
{
  return ((x == 65 || y == 65) || (x + y == 65));
}
console.log(test65(65, 50))
console.log(test65(20, 50))
console.log(test65(20, 20))
console.log(test65(20, 30))