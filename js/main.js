const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});
// function validateEmail(email) {
//   const re =
//     /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(email);
// }

const goToFirst = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

const downloadPdf = () => {
  window.open("../media/file.pdf");
};

$("#name").change(() => {
  $("#invalidName").removeClass("invalid-message");
  const ex =
    /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/;
  const name = $("#name").val();
  if (!ex.test(name) && name) {
    $("#invalidName").text(
      "من فضلك ادخل الاسم الأول والثانى باللغة الإنجليزية"
    );
    $("#invalidName").addClass("invalid-message");
  }
});

// $("#email").change(() => {
//   $("#invalidEmail").removeClass("invalid-message");
//   const email = $("#email").val();

//   if (!validateEmail(email) && email) {
//     $("#invalidEmail").text("من فضلك ادخل ايميلآ صحيحآ");
//     $("#invalidEmail").addClass("invalid-message");
//   }
// });

$("#message").change(() => {
  $("#invalidMessage").removeClass("invalid-message");
  const message = $("#message").val();

  if (!message) {
    $("#invalidMessage").addClass("invalid-message");
  }
});

$("#sendMessage").click((e) => {
  e.preventDefault();
  const name = $("#name").val();
  // const email = $("#email").val();
  const message = $("#message").val();
  const invalid = document.getElementsByClassName("invalid-message")[0];
  if (!invalid) {
    if (!name) {
      $("#invalidName").text("من فضلك ادخل اسمك");
      $("#invalidName").addClass("invalid-message");
    }
    // if (!email) {
    //   $("#invalidEmail").text("من فضلك ادخل الايميل الخاص بك");
    //   $("#invalidEmail").addClass("invalid-message");
    // }
    if (!message) {
      $("#invalidMessage").addClass("invalid-message");
    }
    if (name && message) {
      window.open(
        "mailto:" +
          "hoda7764@gmail.com" +
          "?cc=" +
          "" +
          "&subject=" +
          name +
          "&body=" +
          message
      );

      $("#name").val("");
      // $("#email").val("");
      $("#message").val("");
    }
  }
});

(function ($) {
  "use strict";
  $.fn.sliderResponsive = function (settings) {
    var set = $.extend(
      {
        slidePause: 5000,
        fadeSpeed: 800,
        autoPlay: "on",
        showArrows: "off",
        hideDots: "off",
        hoverZoom: "on",
        titleBarTop: "off",
      },
      settings
    );

    var $slider = $(this);
    var size = $slider.find("> div").length; //number of slides
    var position = 0; // current position of carousal
    var sliderIntervalID; // used to clear autoplay

    // Add a Dot for each slide
    $slider.append("<ul></ul>");
    $slider.find("> div").each(function () {
      $slider.find("> ul").append("<li></li>");
    });

    // Put .show on the first Slide
    $slider.find("div:first-of-type").addClass("show");

    // Put .showLi on the first dot
    $slider.find("li:first-of-type").addClass("showli");

    //fadeout all items except .show
    $slider.find("> div").not(".show").fadeOut();

    // If Autoplay is set to 'on' than start it
    if (set.autoPlay === "on") {
      startSlider();
    }

    // If showarrows is set to 'on' then don't hide them
    if (set.showArrows === "on") {
      $slider.addClass("showArrows");
    }

    // If hideDots is set to 'on' then hide them
    if (set.hideDots === "on") {
      $slider.addClass("hideDots");
    }

    // If hoverZoom is set to 'off' then stop it
    if (set.hoverZoom === "off") {
      $slider.addClass("hoverZoomOff");
    }

    // If titleBarTop is set to 'on' then move it up
    if (set.titleBarTop === "on") {
      $slider.addClass("titleBarTop");
    }

    // function to start auto play
    function startSlider() {
      sliderIntervalID = setInterval(function () {
        nextSlide();
      }, set.slidePause);
    }

    // on mouseover stop the autoplay
    $slider.mouseover(function () {
      if (set.autoPlay === "on") {
        clearInterval(sliderIntervalID);
      }
    });

    // on mouseout starts the autoplay
    $slider.mouseout(function () {
      if (set.autoPlay === "on") {
        startSlider();
      }
    });

    //on right arrow click
    $slider.find("> .right").click(nextSlide);

    //on left arrow click
    $slider.find("> .left").click(prevSlide);

    // Go to next slide
    function nextSlide() {
      position = $slider.find(".show").index() + 1;
      if (position > size - 1) position = 0;
      changeCarousel(position);
    }

    // Go to previous slide
    function prevSlide() {
      position = $slider.find(".show").index() - 1;
      if (position < 0) position = size - 1;
      changeCarousel(position);
    }

    //when user clicks slider button
    $slider.find(" > ul > li").click(function () {
      position = $(this).index();
      changeCarousel($(this).index());
    });

    function changeCarousel() {
      $slider.find(".show").removeClass("show").fadeOut();
      $slider.find("> div").eq(position).fadeIn(set.fadeSpeed).addClass("show");
      $slider.find("> ul").find(".showli").removeClass("showli");
      $slider.find("> ul > li").eq(position).addClass("showli");
    }

    return $slider;
  };
})(jQuery);

//////////////////////////////////////////////
// Activate each slider - change options
//////////////////////////////////////////////
$(document).ready(function () {
  $("#slider1").sliderResponsive({
    // Using default everything
    // slidePause: 5000,
    // fadeSpeed: 800,
    // autoPlay: "on",
    // showArrows: "off",
    // hideDots: "off",
    // hoverZoom: "on",
    // titleBarTop: "off"
  });
});
