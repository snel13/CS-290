function deepEqual(x, y) {
if (x === y) return true;

//test to determine if incoming params are null or not objects.  If either of these are true for either variable return false
if (x == null || typeof x != "object" ||
y == null || typeof y != "object")
return false;

//counting variables
var propertiesInX = 0, propertiesInY = 0;

//for in loop.  Will loop and look for properties in first parameter, keeping track of the number of params
for (var property in x)
propertiesInX += 1;

//for in loop to look for properties in second param.  Will also test to see if it is equal to a's property 
for (var property in y) {
propertiesInY += 1;
if (!(property in x) || !deepEqual(x[property], y[property]))
return false;
}

return propertiesInX == propertiesInY;
}

//provided by the assignment
var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true