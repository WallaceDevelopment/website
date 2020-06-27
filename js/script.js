// ##########################
// Collapsible Animation
// ##########################
var collapsibleList = document.getElementsByClassName("collapsible");
for (var i = 0; i < collapsibleList.length; i++) {
    collapsibleList[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var currentId = this.id;
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {  // if the content is open
            content.style.maxHeight = null;  // close it
        } else {  // if the element is closed
            var allCollapsibles = collapsibleList;  // get HTMLCollection
            for (var j = 0; j < collapsibleList.length; j++) {  // for every element
                if ((allCollapsibles[j].classList.contains("active")) && (allCollapsibles[j].id !== currentId)) {  // if that element has the active class and it does not have the currentId of the one that has been clicked
                    content.style.maxHeight = null;  // remove the maxHeight value - close it
                } else if (allCollapsibles[j].id == currentId) {  // if that element doesn't have the active class
                    content.style.maxHeight = content.scrollHeight + "px";  // open the element
                }
            }
            // content.style.maxHeight = content.scrollHeight + "px";
            // console.log("add maxHeight: " + content.style.maxHeight);
        }
    });
}
// ##########################
// Typing
// ##########################
$('.typing__module').each(function (index) {
    var self = $(this),
        _wrapper = $('.typed', self)[0],
        optData = eval('(' + self.attr('data-options') + ')'),
        optDefault = {
            stringsElement: self.find('.typed-strings')[0],
            typeSpeed: 50,
            backSpeed: 50,
            fadeOut: false,
            smartBackspace: true,
            loop: true
        },
        options = $.extend(optDefault, optData);
    var typed = new Typed(_wrapper, options);
});

// ##########################
// Header & Navbar
// ##########################
$('.fullscreenmenu__module').each(function () {
    var self = $(this),
        triggerID = self.attr('trigger');

    self.on("click", function () {
        $(triggerID).toggleClass('open');
        $(this).toggleClass('open');
    });
    $(triggerID).on("click", function () {
        $(triggerID).toggleClass('open');
        self.toggleClass('open');
    });
});

var wh = $(window).height(),
    half = wh / 5,
    headerHeight = $('header').outerHeight();

$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();

    if (scrollTop >= half) {
        $('header').addClass('is-scroll');
    } else {
        $('header').removeClass('is-scroll');
    }
});

// ###################################
// SVG Re-colouring - Not in use atm
// ###################################	
// jQuery('img.svg').each(function () {
//     var $img = jQuery(this);
//     var imgID = $img.attr('id');
//     var imgClass = $img.attr('class');
//     var imgURL = $img.attr('src');

//     jQuery.get(imgURL, function (data) {
//         // Get the SVG tag, ignore the rest
//         var $svg = jQuery(data).find('svg');

//         // Add replaced image's ID to the new SVG
//         if (typeof imgID !== 'undefined') {
//             $svg = $svg.attr('id', imgID);
//         }
//         // Add replaced image's classes to the new SVG
//         if (typeof imgClass !== 'undefined') {
//             $svg = $svg.attr('class', imgClass + ' replaced-svg');
//         }

//         // Remove any invalid XML tags as per http://validator.w3.org
//         $svg = $svg.removeAttr('xmlns:a');

//         // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
//         if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
//             $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
//         }

//         // Replace image with new SVG
//         $img.replaceWith($svg);

//     }, 'xml');

// });