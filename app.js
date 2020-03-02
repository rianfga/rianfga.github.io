var scroll = new SmoothScroll('a[href*="#"]', {
      speed: 1000
    });
    $(window).ready(function () {
            var scroll = $(window).scrollTop();
            if (scroll < 50) {
                $("#nav").removeClass("bg-nav");
                $("#b1").removeClass("text-white");
                $("#b2").removeClass("text-white");
                $("#b3").removeClass("text-white");
                $("#b4").removeClass("text-white");
                $("#b5").removeClass("text-white");
                $("#nav").addClass("mt-5");
            } else {
                $("#nav").addClass("bg-nav");
                $("#b1").addClass("text-white");
                $("#b2").addClass("text-white");
                $("#b3").addClass("text-white");
                $("#b4").addClass("text-white");
                $("#b5").addClass("text-white");
                $("#nav").removeClass("mt-5");
            }
            $(window).on('scroll', function () {
                var scroll = $(window).scrollTop();
                if (scroll < 50) {
                    $("#nav").removeClass("bg-nav");
                    $("#b1").removeClass("text-white");
                    $("#b2").removeClass("text-white");
                    $("#b3").removeClass("text-white");
                    $("#b4").removeClass("text-white");
                    $("#b5").removeClass("text-white");
                    $("#nav").addClass("mt-5");
                } else {
                    $("#nav").addClass("bg-nav");
                    $("#b1").addClass("text-white");
                    $("#b2").addClass("text-white");
                    $("#b3").addClass("text-white");
                    $("#b4").addClass("text-white");
                    $("#b5").addClass("text-white");
                    $("#nav").removeClass("mt-5");
                }
            });
            $.scrollIt()
    })