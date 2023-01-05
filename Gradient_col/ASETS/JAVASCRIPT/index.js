$(document).ready(function () {
  let value = "0deg";
  let format = "linear";

  // HERE GET THE VALUE OF ANGLE

  $(".direction button").click(function () {
    value = $(this).attr("id");
    console.log(value);
  });

  // HERE GET THE VALUE OF FORMATE LIKE LINEAR RADIAL CONIC

  $(".style button").click(function () {
    format = $(this).attr("id");
    console.log(format);
  });

  /// HERE IS START GET RANDOM VALUE

  const chars = "0123456789123456789abcdefABCDEF";
  let random = "#";
  let random2 = "#";
  $(".random #more").click(function () {
    random = "#";
    random2 = "#";
    for (var i = 0; i < 6; i++) {
      random += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    for (var i = 0; i < 6; i++) {
      random2 += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    console.log(random);
    console.log(random2);
    $(".color #first").attr("value", random);
    $(".color #second").attr("value", random2);
    $(".col-lg-9").css(
      "background",
      `${format}-gradient(${value},${random},${random2})`
    );
  });
  // HERE IS SOME DEFAULT COLOR

  $(".color #first").attr("value", "#6398dA");
  $(".color #second").attr("value", "#791Eb7");
  let q = $(".color #first").attr("value");
  let p = $(".color #second").attr("value");

  //HERE IS CHANGE COLOR USING INPUT 
  
  $(".col-lg-9").css("background", `linear-gradient(${q},${p})`);
  $(document).on("input change", function () {
    let r = $("#first").val();
    let g = $("#second").val();
    $(".col-lg-9").css("background", `${format}-gradient(${value},${r},${g})`);
  });
});
