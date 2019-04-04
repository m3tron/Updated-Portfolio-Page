$(document).ready(() => {
  $("#about").on("click", e => {
    e.preventDefault();
    $("#indexPage").hide();
    $("#contactPage").hide();
    $("#portfolioPage").hide();
    $("#aboutPage").show();
  });

  $("#portfolio").on("click", e => {
    e.preventDefault();
    $("#indexPage").hide();
    $("#aboutPage").hide();
    $("#contactPage").hide();
    $("#portfolioPage").show();
  });

  $("#contact").on("click", e => {
    e.preventDefault();
    $("#indexPage").hide();
    $("#aboutPage").hide();
    $("#portfolioPage").hide();
    $("#contactPage").show();
  });
});
