$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
        $("body").height() * Math.random(),
        $("body").width() * Math.random(),
        Math.random() * 1000
      );

    dancers.push(dancer);
    $('body').append(dancer.$node);
  });

///////////////////////////////////////////////////////////////////////////////////

  $('.Lineupbutton').on('click', function(event) {
    var height = ( $("body").height() ) / 1.5;
    var width = ( $("body").width() );
    var increment = Math.ceil( width / (dancers.length+1) );
    var startPoint = increment;
    for( var i = 0 ; i < dancers.length; i++) {
      dancers[i].setPosition(height, startPoint);
      startPoint += increment;
    }
  });

  ///////////////////////////////////////////////////////////////////////////////////

  $('.Clusterbutton').on('click', function(event) {
    var height = $("body").height();
    var width = $("body").width();
  
    var centerPoint1 = width/4;
    var centerPoint2 = 3*width/4;

    var minWidth1 = centerPoint1 - 100;
    var minWidth2 = centerPoint2 - 100;
    var maxWidth1 = centerPoint1 + 100;
    var maxWidth2 = centerPoint2 + 100;
    var minHeight = height/1.5 - 100;
    var maxHeight = height/1.5 + 100;

    // loop through the dancers
    for( var i = 0 ; i < dancers.length; i++) {
    //   locate which centerPoint the dancer is closer to
      let leftPosition = dancers[i].left;
      //dancer is closer to centerPoint1
      if (Math.abs(centerPoint1 - leftPosition) < Math.abs(centerPoint2 - leftPosition)) {
        var tempWidth = Math.floor(Math.random() * (maxWidth1 - minWidth1 + 1)) + minWidth1;
        var tempHeight = Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight;
        dancers[i].setPosition(tempHeight, tempWidth);
        //dancer is closer to the centerPoint2
      } else { 
        var tempWidth = Math.floor(Math.random() * (maxWidth2 - minWidth2 + 1)) + minWidth2;
        var tempHeight = Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight;
        dancers[i].setPosition(tempHeight, tempWidth);
      }
    }
  });
///////////////////////////////////////////////////////////////////////////////////



});

