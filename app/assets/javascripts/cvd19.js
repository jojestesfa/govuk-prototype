var BANNER_VERSION = 1,
  GLOBAL_BAR_SEEN_COOKIE = "global_bar_seen",
  globalBarInit = {
    getBannerVersion: function() {
      return BANNER_VERSION
    },
    getLatestCookie: function() {
      var e = window.GOVUK.getCookie(GLOBAL_BAR_SEEN_COOKIE);
      console.log(e);
      if (e == null){
        var header = document.getElementsByClassName("govuk-header");
        header[0].classList.add("no-bottom-border");
        document.getElementById("global-bar").style.display = "block";
      }
      return e
    },
    checkDuplicateCookie: function() {
      for (var e = document.cookie.split(";"), o = 0, n = 0; n < e.length; n++) e[n] && -1 !== e[n].indexOf("global_bar_seen") && o++;
      if (1 < o) {
        var i = window.location.pathname.split("/"),
          t = "";
        for (n = 0; n < i.length; n++) "" !== i[n] && (t = t + "/" + i[n], document.cookie = "global_bar_seen=; expires=Thu, 01 Jan 1970 00:00:01 GMT;path=" + t)
      }
      else {
      }
    },
    setBannerCookie: function() {
      var hide = document.getElementsByClassName("global-bar__dismiss")
      hide[0].onclick = function () {
        var n = JSON.stringify({
          version: globalBarInit.getBannerVersion()
        })
        window.GOVUK.setCookie(GLOBAL_BAR_SEEN_COOKIE, n, {
          days: 42
        })
        var header = document.getElementsByClassName("govuk-header");
        header[0].classList.remove("no-bottom-border");
        document.getElementById("global-bar").style.display = "none";
      }
    },
    init: function() {
      globalBarInit.getBannerVersion();
      globalBarInit.getLatestCookie();
      globalBarInit.checkDuplicateCookie();
      globalBarInit.setBannerCookie();
    }
  };
window.GOVUK.globalBarInit = globalBarInit;
window.GOVUK.globalBarInit.init();