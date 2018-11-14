describe('ammarDancer', function() {

  var ammarDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    ammarDancer = new makeAmmarDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(ammarDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(ammarDancer.$node, 'toggle');
    ammarDancer.step();
    expect(ammarDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      debugger;
      sinon.spy(ammarDancer, 'step');
      expect(ammarDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);
      
      expect(ammarDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(ammarDancer.step.callCount).to.be.equal(2);
    });
  });

  describe('instance of makeDancer (written by Kevin and Ammar)', function() {
    it('should be an instanceof dancer', function() {
      expect(ammarDancer instanceof makeDancer).to.be.equal(true);
    });
  });
});
