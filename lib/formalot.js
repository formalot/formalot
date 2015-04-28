var Formalot = function(data) {
  this.data = data;
  this.processors = [];
};

Formalot.prototype.render = function(id) {
  console.log(this.processors);
  document.getElementById(id).innerHTML = 'test';
}
