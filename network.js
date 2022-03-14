let online = document .getElementById("online");
    let offline = document .getElementById("offline");

     
      let messageOffline = () => {
      offline.style.display = "block";
        online.style.display = "none";
      };
      
let messageOnline = () => {
online.style.display = "block";
        offline.style.display = "none";
      };
      
      if (window.navigator.onLine) {
        messageOnline();
      } else {
        messageOffline();
      }
      window.addEventListener("online", messageOnline);
      window.addEventListener("offline", messageOffline);
