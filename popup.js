status = "Mr.Linhkool";
var a = new Array(),
  n = "";
a[1] = "B";
a[2] = "é";
a[3] = " ";
a[4] = "h";
a[5] = "ỏ";
a[6] = "n";
a[7] = "g";
a[8] = " ";
a[9] = "c";
a[10] = "ó";
a[11] = " ";
a[12] = "n";
a[13] = "h";
a[14] = "ư";
a[15] = " ";
a[16] = "a";
a[17] = "n";
a[18] = "h";
a[19] = " ";
a[20] = "n";
a[21] = "g";
a[22] = "h";
a[23] = "ĩ";
a[24] = " ";
a[25] = "đ";
a[26] = "â";
a[27] = "u";
function one() {
  t = document.f.txt.value;
  j = t.length;
  if (j > 0) {
    for (var i = 1; i <= j; i++) {
      n = n + a[i];
      if (i == 28) {
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
    "</br><h2>Thật ra thì anh nói năng khó nghe quá<img src='img/2.gif'</img></h2>"
  );
  $("#divResult").fadeIn(3000, function () {
    $("#divResult2").fadeOut(0);
    $("#divResult2").html(
      "<h2>Anh muốn xin lỗi bé :v<img src='img/2 (1).gif'/></h2></br>"
    );

    $("#divResult2").fadeIn(4000, function () {
      $("#divResult3").fadeOut(0);
      $("#divResult3").html(
        "<h2>Nhưng có lẽ lời nói của anh lạnh nhạt quá<img src='img/2.gif'/></h2></br>"
      );

      $("#divResult3").fadeIn(5000, function () {
        $("#divResult4").fadeOut(0);
        $("#divResult4").html(
          "<h2>Nên anh sẽ hành động luôn cho nóng<img src='img/1.gif'/></h2></br>"
        );

        $("#divResult4").fadeIn(5000, function () {
          $("#divResult5").fadeOut(0);
          $("#divResult5").html(
            "<h2>Bé dừng giận anh nữa nha!, Anh biết lỗi của mình ròi<img src='img/4.gif'/></h2></br>"
          );
          $("#divResult5").fadeIn(2000);
        });
      });
    });
  });
}
