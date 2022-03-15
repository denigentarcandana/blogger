// disable copy

if (typeof document.onselectstart != "undefined") { document.onselectstart = new Function("return false"); } else { document.onmousedown = new Function("return false");
  document.onmouseup = new Function("return false"); }


// Notifikasi "Tidak Dapat Di Salin"

var message = " PERINGATAN !\n Maaf, teks tersebut tidak dapat disalin.\n\nBila anda tertarik dengan script artikel kami, silahkan hubungi admin melalui media sosial Instagram kami.\n@zonber.official\n\n\n________________________________________\nAlamat Redaksi\n gentaropolis.my.id\n\nJl. Raya Bayah-Cikotok No.Km. 01, Bayah Bar., Kec. Bayah, Kabupaten Lebak, Banten 42393, Indonesia\nEmail: gentaropolis@gmail.com\nTelp: (0813) 1498 78 21\nFax: (0813) 1498 78 21\n\n";

///////////////////////////////////
function clickIE4() {
  if (event.button == 2) {
    alert(message);
    return false;
  }
}

function clickNS4(e) {
  if (document.layers || document.getElementById && !document.all) {
    if (e.which == 2 || e.which == 3) {
      alert(message);
      return false;
    }
  }
}

if (document.layers) {
  document.captureEvents(Event.MOUSEDOWN);
  document.onmousedown = clickNS4;
}
else if (document.all && !document.getElementById) {
  document.onmousedown = clickIE4;
}

document.oncontextmenu = new Function("alert(message);return false")
