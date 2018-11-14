describe('kevinDancer', function() {

  var kevinDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    kevinDancer = new makeKevinDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(kevinDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(kevinDancer.$node, 'toggle');
    kevinDancer.step();
    expect(kevinDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      debugger;
      sinon.spy(kevinDancer, 'step');
      expect(kevinDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);
      
      expect(kevinDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(kevinDancer.step.callCount).to.be.equal(2);
    });
  });

  describe('instance of makeDancer (written by Kevin and Ammar)', function() {
    it('should be an instanceof dancer', function() {
      expect(kevinDancer instanceof makeDancer).to.be.equal(true);
    });
  });
});
