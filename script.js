const student = {
  name: 'Keerthi'
};
Object.prototype.getKeys = function () {
  return Object.keys(this);
};
const keys = student.getKeys();
console.log(keys); 
