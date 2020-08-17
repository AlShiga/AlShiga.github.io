$('.accordion__item').click(function() {
    if (!$(this).hasClass("active")) {
        $(".accordion__body").slideUp();
        $(".accordion__item").removeClass('active');
        $(this).find('.accordion__body').slideDown();
        $(this).addClass('active');
    } else {
        $(this).find('.accordion__body').slideUp();
        $(this).removeClass('active');
    }
});


setSizeMenu()
$('.burger').click(function() {
    if ($("body").hasClass("open1") || $("body").hasClass("open2") || $("body").hasClass("open3")) {
        $("body").removeClass("open1 open2 open3");
        setSizeMenu();
        bodyNotHidden()
    } else {
        $("body").addClass('open1');
        setSizeMenu();
        bodyHidden()
    }
});
$('.mainMenu__close').click(function() {
    $("body").removeClass("open1 open2 open3");
    setSizeMenu();
    bodyNotHidden()
})
$('.mainMenu').click(function(e) {
    if (e.target == $(".mainMenu")[0]) {
        $("body").removeClass("open1 open2 open3");
        setSizeMenu();
        bodyNotHidden()
    }
});
$('.mainMenu__col1TopMenu a').click(function(e) {
    if ($(window).width() > 767) {
        e.preventDefault()
        $(".mainMenu__col1TopMenu li").removeClass("active");
        $(this).parent().addClass('active');
        if (!($("body").hasClass("open2") || $("body").hasClass("open3"))) {
            $("body").removeClass("open1 open2 open3");
            $("body").addClass("open2");
            setSizeMenu();
        }

    }
});

var srcImgMenu = '';
$(".mainMenu__col2Menu li").mouseenter(function(e) {
    if (srcImgMenu !== $(this).data().img) {
        srcImgMenu = $(this).data().img;
        if (!$("body").hasClass("open3")) {
            $("body").removeClass("open1 open2 open3");
            $("body").addClass("open3");
            setSizeMenu();
        }
        $(".mainMenu__col2Menu li").removeClass("active");
        $(this).addClass("active");
        $(".mainMenu__imgCategory").stop(true);
        $(".mainMenu__imgCategory").fadeOut(100);
        setTimeout(function() {
            $(".mainMenu__imgCategory").css("background-image", "url(" + srcImgMenu + ")");
            $(".mainMenu__imgCategory").fadeIn(500);
        }, 200);
    }
});

$('.mainMenu__col2').click(function() {
    $("body").removeClass("open1 open2 open3");
    $("body").addClass("open3");
    setSizeMenu();
})

$(window).resize(function() {
    setSizeMenu();
});

function setSizeMenu() {
    var docW = $(document).width();
    var containerW = $(".container").width();
    var padMenu = (docW - containerW) / 2;
    var padClose = 30;
    var colMenu;

    if (docW > 991) {
        colMenu = containerW / 3;
        $(".mainMenu__col1").css({ "width": padMenu + colMenu + "px", "padding-left": padMenu + "px" })
        $(".mainMenu__col2").css({ "width": colMenu + "px", "display": "" })
        $(".mainMenu__col3").css({ "width": padMenu + colMenu + "px", "padding-right": padMenu + "px", "display": "" })
        if ($(".open3").length) {
            $(".mainMenu__col1").css({ "left": padMenu + colMenu + "px" })
            $(".mainMenu__col2").css({ "left": padMenu + colMenu * 2 + "px" })
            $(".mainMenu__col3").css({ "left": docW + "px" })
            $(".mainMenu__close").css({ "left": padMenu + colMenu * 3 - padClose + "px" })
        } else if ($(".open2").length) {
            $(".mainMenu__col1").css({ "left": padMenu + colMenu + "px" })
            $(".mainMenu__col2").css({ "left": padMenu + colMenu * 2 + "px" })
            $(".mainMenu__col3").css({ "left": padMenu + colMenu * 2 + "px" })
            $(".mainMenu__close").css({ "left": padMenu + colMenu * 2 - padClose + "px" })
        } else if ($(".open1").length) {
            $(".mainMenu__col1").css({ "left": padMenu + colMenu + "px" })
            $(".mainMenu__col2").css({ "left": padMenu + colMenu + "px" })
            $(".mainMenu__col3").css({ "left": padMenu + colMenu + "px" })
            $(".mainMenu__close").css({ "left": padMenu + colMenu - padClose + "px" })
        } else {
            $(".mainMenu__col1").css({ "left": 0 })
            $(".mainMenu__col2").css({ "left": 0 })
            $(".mainMenu__col3").css({ "left": 0 })
            $(".mainMenu__close").css({ "left": 0 })
        }
    } else if (docW > 767) {
        colMenu = containerW / 2;
        $(".mainMenu__col1").css({ "width": padMenu + colMenu + "px", "padding-left": padMenu + "px" })
        $(".mainMenu__col2").css({ "width": padMenu + colMenu + "px", "padding-right": padMenu + "px", "display": "" })
        $(".mainMenu__col3").css({ "width": 0, "padding-right": 0, "display": "none" })
        if ($(".open2").length || $(".open3").length) {
            $(".mainMenu__col1").css({ "left": padMenu + colMenu + "px" })
            $(".mainMenu__col2").css({ "left": docW + "px" })
            $(".mainMenu__close").css({ "left": docW - padClose + "px" })
        } else if ($(".open1").length) {
            $(".mainMenu__col1").css({ "left": padMenu + colMenu + "px" })
            $(".mainMenu__col2").css({ "left": padMenu + colMenu + "px" })
            $(".mainMenu__close").css({ "left": padMenu + colMenu - padClose + "px" })
        } else {
            $(".mainMenu__col1").css({ "left": 0 })
            $(".mainMenu__col2").css({ "left": 0 })
            $(".mainMenu__close").css({ "left": 0 })
        }
    } else {
        $(".mainMenu__col1").css({ "width": docW + "px", "padding-left": 0 })
        $(".mainMenu__col2").css({ "width": 0, "padding-right": 0, "display": "none" })
        $(".mainMenu__col3").css({ "width": 0, "padding-right": 0, "display": "none" })
        if ($(".open1").length || $(".open2").length || $(".open3").length) {
            $(".mainMenu__col1").css({ "left": docW + "px" })
            $(".mainMenu__close").css({ "left": docW - padClose + "px" })
        } else {
            $(".mainMenu__col1").css({ "left": 0 })
            $(".mainMenu__close").css({ "left": 0 })
        }
    }
}

//No jump right

var paddingScroll = window.innerWidth - document.body.offsetWidth + "px";

function bodyHidden() {
    $("body").addClass("overflowHidden");
    $("body").css("padding-right", paddingScroll);
    $(".header").css("padding-right", paddingScroll);

}

function bodyNotHidden() {
    $("body").removeClass("overflowHidden");
    $("body").css("padding-right", "");
    $(".header").css("padding-right", "");

}