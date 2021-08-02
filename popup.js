status = "Mr.Linhkool";
var a = new Array(),
  n = "";
a[1] = "B";
a[2] = "é";
a[3] = " ";
a[4] = "m";
a[5] = "u";
a[6] = "ố";
a[7] = "n";
a[8] = " ";
a[9] = "y";
a[10] = "ê";
a[11] = "u";
a[12] = " ";
a[13] = "n";
a[14] = "h";
a[15] = "i";
a[16] = "ề";
a[17] = "u";
a[18] = "♥";
a[19] = "♥";
a[20] = "♥";
a[21] = "♥";
a[22] = "♥";
a[23] = "♥";
function one() {
  t = document.f.txt.value;
  j = t.length;
  if (j > 0) {
    for (var i = 1; i <= j; i++) {
      n = n + a[i];
      if (i == 24) {
        document.f.txt.value = "";
        n = "";
      }
    }
  }
  document.f.txt.value = n;
  n = "";
  setTimeout("one()", 1);
}
function s() {}
function on() {
  one();
}

function Yeu() {
  $("#divResult").fadeOut(0);
  $("#divResult").html(
    "</br><h2>Haha Bé đừng có chối nữa nhé!<img src='img/3.gif'</img></h2>"
  );
  $("#divResult").fadeIn(2000, function () {
    $("#divResult2").fadeOut(0);
    $("#divResult2").html(
      "<h2>Anh biết hết ròi nhaaa :v<img src='img/1.gif'/></h2></br>"
    );

    $("#divResult2").fadeIn(3000, function () {
      $("#divResult3").fadeOut(0);
      $("#divResult3").html(
        "<h2>Thật ra thì anh rất muốn... <img src='img/2.gif'/></h2></br>"
      );

      $("#divResult3").fadeIn(5000, function () {
        $("#divResult4").fadeOut(0);
        $("#divResult4").html(
          "<h2>Đào sâu vào trái tim của bé<img src='img/2 (1).gif'/></h2></br>"
        );

        $("#divResult4").fadeIn(3000, function () {
          $("#divResult5").fadeOut(0);
          $("#divResult5").html(
            "<h2>Để 2 chúng ta có thể kết nối lại gần với nhau hơn.<img src='img/4.gif'/></h2></br>"
          );
          $("#divResult5").fadeIn(2000);
        });
      });
    });
  });
}
