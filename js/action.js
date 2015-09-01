$(function() {
    //initialize vars
    var initial = 16;

    //fn for creating the grid
    function createGrid(n) {
        for (var i = 0; i < n; i++) {
            console.log(i);
            for (var j = 0; j < n; j++) {
                $('.container').append('<div class="square"></div>');
            }
        }
        //set dimensions
        $('.square').css('height', 960 / n + 'px');
        $('.square').css('width', 960 / n + 'px');
        //change colors of squares on hover
        $('.square').mouseenter(function() {
            $(this).css('background-color', randColor);
        });
    }

    //initial grid = 16    
    createGrid(initial);

    // remove square divs and create new grid
    function reset(n) {
        $('.container > div').remove();
        createGrid(n);
    }

    //reset button on click if 1-80
    $('#reset').click(function() {
        var input = prompt("Enter number of sides, 1-80");
        if (input >= 1 && input <= 80)
        {
        	reset(input);
        }
        else
        {
        	window.alert("Error! Invalid number.");
        }
    });

    //rand number 1-360
    function rand(min, max) {
        return min + Math.random() * (max - min);
    }

    //random color generator
    function randColor() {
        var h = rand(1, 360);
        return 'hsl(' + h + ',100%,50%)';
    }
});
