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



//Remove date

// Copyright (c) 2022 @denigentarcandana.id
// Scrip ini diperuntukkan untuk menghilangkan data tanggal pada URL artikel web blog

let urlTotal, nextPageToken, postsDatePrefix = !1,
  accessOnly = !1,
  useApiV3 = !1,
  apiKey = "",
  blogId = "",
  postsOrPages = ["pages", "posts"],
  jsonIndex = 1,
  secondRequest = !0,
  feedPriority = 0,
  amp = "&" [0];

function urlVal() { var e = window.location.pathname,
    t = e.length; return ".html" === e.substring(t - 5) ? 0 : t > 1 ? 1 : 2 }

function urlMod() { var e = window.location.pathname; "p" === e.substring(1, 2) ? (e = (e = e.substring(e.indexOf("/", 1) + 1)).substr(0, e.indexOf(".html")), history.replaceState(null, null, "../" + e)) : (e = (e = postsDatePrefix ? e.substring(1) : e.substring(e.indexOf("/", 7) + 1)).substr(0, e.indexOf(".html")), history.replaceState(null, null, "../../" + e)) }

function urlSearch(e, t) { var n = e + ".html";
  t.forEach(function(e) {-1 !== e.search(n) && (window.location = e) }) }

function urlManager() { var e = urlVal();
  0 === e ? accessOnly || urlMod() : 1 === e ? getJSON(postsOrPages[feedPriority], 1) : 2 === e && (accessOnly || history.replaceState(null, null, "/")) }

function getJSON(e, t) { var n = document.createElement("script"); if (useApiV3) { var o = "https://www.googleapis.com/blogger/v3/blogs/" + blogId + "/" + e + "?key=" + apiKey + "#maxResults=500#fields=nextPageToken%2Citems(url)#callback=bloggerJSON";
    nextPageToken && (o += "#pageToken=" + nextPageToken), nextPageToken = void 0 } else o = window.location.protocol + "//" + window.location.hostname + "/feeds/" + e + "/default?start-index=" + t + "#max-results=150#orderby=published#alt=json-in-script#callback=bloggerJSON";
  o = o.replace(/#/g, amp), n.type = "text/javascript", n.src = o, document.getElementsByTagName("head")[0].appendChild(n) }

function bloggerJSON(e) { var t = []; if (useApiV3 || void 0 === urlTotal && (urlTotal = parseInt(e.feed.openSearch$totalResults.$t)), useApiV3) { try { e.items.forEach(function(e, n) { t.push(e.url) }) } catch (e) {} nextPageToken = e.nextPageToken } else try { e.feed.entry.forEach(function(n, o) { var r = e.feed.entry[o];
      r.link.forEach(function(e, n) { "alternate" === r.link[n].rel && t.push(r.link[n].href) }) }) } catch (e) {} urlSearch(window.location.pathname, t), urlTotal > 150 ? (jsonIndex += 150, urlTotal -= 150, getJSON(postsOrPages[feedPriority], jsonIndex)) : nextPageToken ? getJSON(postsOrPages[feedPriority]) : secondRequest && (nextPageToken = void 0, urlTotal = void 0, jsonIndex = 1, secondRequest = !1, 0 === feedPriority ? (feedPriority = 1, getJSON("posts", 1)) : 1 === feedPriority && (feedPriority = 0, getJSON("pages", 1))) }

function bloggerJS(e) { e && (feedPriority = e), urlManager() } bloggerJS();
/*
function setText() {
    var a = document.getElementById("footer");
     var arr = a.childNodes;
     for(var x=0;x<arr.length;x++) {
       arr[x].innerHTML = "©by@denigentarcandana.id";
     }
}

setTimeout(setText, 1000);
*/
