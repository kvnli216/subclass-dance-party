var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  // this.oldStep = makeBlinkyDancer.prototype.__proto__.step; //we want this to be makeDancer.step;
  this.oldStep = makeDancer.prototype.step;
  // this.step.bind(this);
  makeDancer.call(this, arguments);
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  
  
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};
