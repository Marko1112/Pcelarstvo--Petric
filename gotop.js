gotop_status = false;
function go_top_status() {
  if ($(window).scrollTop() > 200) {
    sctmp = true;
  } else {
    sctmp = false;
  }
  if (gotop_status && !sctmp) {
    gotop_status = false;
    $("button#go_top_button").removeClass("on");
  } else if (!gotop_status && sctmp) {
    gotop_status = true;
    $("button#go_top_button").addClass("on");
  }
}
function go_top() {
  $("html, body").animate({ scrollTop: "0px" }, 600);
}
