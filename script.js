$(document).keydown(function (e) {

    switch (e.keyCode) {
        case 37:
            var rightBorderClasses = [
                document.getElementsByTagName('li')[3].className,
                document.getElementsByTagName('li')[7].className,
                document.getElementsByTagName('li')[11].className,
                document.getElementsByTagName('li')[15].className
            ];
            if (rightBorderClasses.indexOf('empty') == -1) {
                var cl = $('.empty').first().next().attr("class");
                $('.empty').next().removeClass().addClass('empty');
                document.getElementsByClassName('empty')[0].className = cl;
            }
            break;
        case 38:
            var bottonBorderClasses = [
                document.getElementsByTagName('li')[12].className,
                document.getElementsByTagName('li')[13].className,
                document.getElementsByTagName('li')[14].className,
                document.getElementsByTagName('li')[15].className
            ];
            if (bottonBorderClasses.indexOf('empty') == -1) {
                var cl = $('.empty').first().next().next().next().next().attr("class");
                $('.empty').next().next().next().next().removeClass().addClass('empty');
                document.getElementsByClassName('empty')[0].className = cl;
            }
            break;
        case 39:
            var leftBorderClasses = [
                document.getElementsByTagName('li')[0].className,
                document.getElementsByTagName('li')[4].className,
                document.getElementsByTagName('li')[8].className,
                document.getElementsByTagName('li')[12].className
            ];
            if (leftBorderClasses.indexOf('empty') == -1) {
                var cl = $('.empty').first().prev().attr("class");
                $('.empty').prev().removeClass().addClass('empty');
                document.getElementsByClassName('empty')[0].nextSibling.nextSibling.className = cl;
            }
            break;
        case 40:
            var topBorderClasses = [
                document.getElementsByTagName('li')[0].className,
                document.getElementsByTagName('li')[1].className,
                document.getElementsByTagName('li')[2].className,
                document.getElementsByTagName('li')[3].className
            ];
            if (topBorderClasses.indexOf('empty') == -1) {
                var cl = $('.empty').first().prev().prev().prev().prev().attr("class");
                $('.empty').prev().prev().prev().prev().removeClass().addClass('empty');
                document.getElementsByClassName('empty')[1].className = cl;
            }
            break;
    }
});

