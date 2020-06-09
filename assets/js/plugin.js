$(function () {
  $(".sidenav").sidenav();
  $("select").formSelect();

  // SEACH IN THE TABLE
  $("#search").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#filter_info tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});
