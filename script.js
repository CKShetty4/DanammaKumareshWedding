// Loader
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});

// Dynamic Names
const params = new URLSearchParams(window.location.search);
const type = params.get("c");

let names = "Kumaresh 💍 Danamma";

if (type === "bride") {
  names = "Danamma 💍 Kumaresh";
}

document.getElementById("names").innerText = names;


// Countdown (accurate)
const eventDate = new Date("May 14, 2026 00:00:00").getTime();

function updateCountdown(){
  const now = new Date().getTime();
  const diff = eventDate - now;

  if(diff <= 0){
    document.getElementById("countdown").innerText = "Today!";
    return;
  }

  const days = Math.floor(diff / (1000*60*60*24));
  const hours = Math.floor((diff % (1000*60*60*24))/(1000*60*60));

  document.getElementById("countdown").innerText =
    `${days} days ${hours} hrs to go`;
}

setInterval(updateCountdown, 1000);
updateCountdown();


// Open Invitation
document.getElementById("openBtn").addEventListener("click", () => {

  document.getElementById("intro").style.display = "none";
  document.getElementById("site").style.display = "block";

  // music (best possible autoplay workaround)
  document.getElementById("music").play().catch(()=>{});

  window.scrollTo(0,0);
});


// Map redirect
function openMap(){
  window.open("https://maps.app.goo.gl/a1kjDRT166sAsBd18?g_st=aw","_blank");
}