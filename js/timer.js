var dzisiaj = new Date();
var dd = 22-dzisiaj.getDate();
var godz = 17-dzisiaj.getHours();
var min = 30-dzisiaj.getMinutes();
var sek = 0-dzisiaj.getSeconds();

function odliczanie()
{
  if(dd<=0 && godz<=0 && min<=0 && sek<=0)
	{ document.getElementById('zegar').innerHTML='<strong>Rekrutacja zakończona</strong>';}

	sek=sek-1;
	if (sek<0) {sek=59; min=min-1;}
	if (min<0) {min=59; godz=godz-1;}
  if (godz<0) {godz=23; dd=dd-1;}

	if(dd>=0 && godz>=0 && min>=0 && sek>=0)
	{
  var czas = '<strong style=\"color: red; \"> Do końca rekrutacji zostało &rarr; '+dd+'dni '+godz+'godz. '+min+'min '+sek+'sek</strong>';
	document.getElementById('zegar').innerHTML= czas;
	setTimeout("odliczanie()",1000);
	}
}
