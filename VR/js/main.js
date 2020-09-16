$(window).load(function() {
    setTimeout(() => removePreload(), 1000);
});

function removePreload() {
    if ($(".preloader").length) {
        $('.preloader').addClass('preloader_close');
        setTimeout(() => $('body').addClass('show'), 2000);
    } else {
        setTimeout(() => $('body').addClass('show'), 200);
    }

}

function listScrollPage() {
    var winScr = $(window).scrollTop() + $(window).height() * 0.7;
    var currentNum = 0;
    var maxScr = '';
    $("[data-num]").each(function(index, element) {
        var itemNum = $(element).attr("data-num");
        var itemScr = $(element).offset().top - winScr;
        if (maxScr == '' || (itemScr > maxScr && itemScr < 0)) {
            maxScr = itemScr;
            currentNum = itemNum;
        }
    });
    return currentNum

}



function editScrollBar(num) {
    $(".scrollBar__countСurrent  span").text(num);
    $(".scrollBar__lineCurrent").css("transform", "translateY(" + (num - 1) * 100 + "%)")
}

$(window).scroll(function() {
    var numPage = listScrollPage()
    editScrollBar(numPage)
});

function listScrollPage() {
    var winScr = $(window).scrollTop() + $(window).height() * 0.7;
    var currentNum = 0;
    var maxScr = '';
    $("[data-num]").each(function(index, element) {
        var itemNum = $(element).attr("data-num");
        var itemScr = $(element).offset().top - winScr;
        if (maxScr == '' || (itemScr > maxScr && itemScr < 0)) {
            maxScr = itemScr;
            currentNum = itemNum;
        }
    });
    return currentNum
}

function editScrollBar(num) {
    if (num < 10) {
        num = "0" + num
    }
    $(".scrollBar__countСurrent  span").text(num);
    $(".scrollBar__lineCurrent").css("transform", "translateY(" + (num - 1) * 100 + "%)")
}
$('.burgerOpen').click(function() {
    $('body').toggleClass("openMenu");
});