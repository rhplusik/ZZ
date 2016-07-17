var numer = Math.floor(Math.random()*5)+1;

  function schowaj()
  {
    $("#slider").fadeOut(1000);
  }

  function zmienslajd()
  {
    numer++; if (numer>3) numer=1;

    var plik = "<img style=\"width: 964px; margin-top: 10px; background-size: cover;\" src=\"img/slajd" + numer + ".jpg\" />";

    document.getElementById("slider").innerHTML = plik;
    // $ w JQ == JS document.getElementById("slider")
    $("#slider").fadeIn(1000);

    setTimeout("zmienslajd()", 10000);
    setTimeout("schowaj()", 9000);
  }
