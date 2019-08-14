var row = $('.row');
var $window = $(window);
// document.onreadystatechange(function () {
//     var state = document.readyState;
//     if (state == 'interactive') {
//         // document.getElementById('body').style.visibility = 'hidden';
//     }
//     else if (state == 'complete') {
//         // document.getElementById('gify').style.visibility = 'hidden';
//     }

// })
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
$(document).ready(function () {
    setTimeout(function () {
        document.getElementById('gif').style.display = 'none';
        document.getElementById('mynav').style.display = "block"
        document.getElementById('body').style.display = 'block';
        document.getElementById('footer').style.display = "block";
    }, 2000);
});

// $(document).on('scroll', function () {
//     console.log('hello');
//     function isScrolledIntoView(elem, $window) {
//         var docViewTop = $window.scrollTop();
//         // console.log(docViewTop);
//         var docViewBottom = docViewTop + $window.height();

//         var elemTop = elem.offset().top;
//         var elemBottom = elemTop + elem.height();

//         return ((elemTop >= docViewTop) && (elemBottom <= docViewBottom));
//     }
//     if (isScrolledIntoView(row, $window)) {
//         row.addClass('animated fadeIn')
//     }
// })
