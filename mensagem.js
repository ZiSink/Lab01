const PI = 3.14159; 
function area(raio) { 
return PI * raio * raio; 
} 
function perimetro(raio) { 
return PI * 2 * raio; 
} 
module.exports.area = area; 
module.exports.perimetro = perimetro; 