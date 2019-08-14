   $('.img').hover(function () {
            $(".img").stop();

            $(this).children("#green").animate({ "opacity": "1" });

            $(this).children(".lp-container").children("#top-right").animate({ "opacity": "1" });

            $(this).children(".lp-container").children("#bottom-left").animate({ "opacity": "1" });
        }, function () {
            $(".img").stop();

            $(this).children("#green").animate({ "opacity": "0" });

            $(this).children(".lp-container").children("#top-right").animate({ "opacity": "0" });

            $(this).children(".lp-container").children("#bottom-left").animate({ "opacity": "0" });

        })
