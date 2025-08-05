function updateTime() {
  const time = document.getElementById("time");
  const now = new Date();
  time.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}
setInterval(updateTime, 1000);
updateTime();

function openApp(appName) {
  const appWindow = document.getElementById("app-window");
  const appTitle = document.getElementById("app-title");
  const appContent = document.getElementById("app-content");
  appWindow.style.display = "flex";

  appTitle.textContent = appName.charAt(0).toUpperCase() + appName.slice(1);

  switch (appName) {
    case "roblox":
      appContent.innerHTML = `<iframe src="https://uvp-damifidy.koyeb.app/uv/service/hvtrs8%2F-wuw%2Crmbnoz.aoo%2F" style="width:100%;height:100%;border:none;"></iframe>`;
      break;
    case "playstore":
      appContent.innerHTML = `<iframe src="https://alexx743.github.io/Alexx743-games/" style="width:100%;height:100%;border:none;"></iframe>`;
      break;
    case "phone":
      appContent.innerHTML = "<p>Phone app placeholder</p>";
      break;
    case "mail":
      appContent.innerHTML = "<p>Mail app placeholder</p>";
      break;
    case "music":
      appContent.innerHTML = "<p>Music app placeholder</p>";
      break;
    case "settings":
      appContent.innerHTML = "<p>Settings app placeholder</p>";
      break;
    case "photos":
      appContent.innerHTML = "<p>Photos app placeholder</p>";
      break;
    case "safari":
      appContent.innerHTML = `<iframe src="https://www.apple.com" style="width:100%;height:100%;border:none;"></iframe>`;
      break;
    case "notes":
      appContent.innerHTML = "<p>Notes app placeholder</p>";
      break;
    case "messages":
      appContent.innerHTML = "<p>Messages app placeholder</p>";
      break;
    case "camera":
      appContent.innerHTML = "<p>Camera app placeholder</p>";
      break;
    default:
      appContent.innerHTML = `<p>Welcome to the ${appName} app!</p>`;
  }
}

function closeApp() {
  document.getElementById("app-window").style.display = "none";
  document.getElementById("app-content").innerHTML = "";
}

function fullscreenApp() {
  const iframe = document.querySelector("#app-content iframe");
  if (iframe) {
    iframe.style.position = "fixed";
    iframe.style.top = "0";
    iframe.style.left = "0";
    iframe.style.width = "100vw";
    iframe.style.height = "100vh";
    iframe.style.zIndex = "9999";
  }
}

document.addEventListener("keydown", e => {
  if (e.key === "`") closeApp();
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js').then(() => {
    console.log("Service Worker Registered");
  });
}
