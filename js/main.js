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
