$(document).on("mousemove", 'input[type="range"]', function () {
    let r = $("#red").val();
    let g = $("#green").val();
    let b = $("#blue").val();
    $("body").css("background", `rgb(${r},${g},${b})`);
    $("#box").val(`rgb(${r},${g},${b})`);
  });