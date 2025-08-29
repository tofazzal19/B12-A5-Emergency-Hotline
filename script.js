let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

//  HEART BUTTONS
document.getElementById("heart1").onclick = function() {
  heartCount++; document.getElementById("heartCount").textContent = "❤️ " + heartCount;
};
document.getElementById("heart2").onclick = function() {
  heartCount++; document.getElementById("heartCount").textContent = "❤️ " + heartCount;
};
document.getElementById("heart3").onclick = function() {
  heartCount++; document.getElementById("heartCount").textContent = "❤️ " + heartCount;
};
document.getElementById("heart4").onclick = function() {
  heartCount++; document.getElementById("heartCount").textContent = "❤️ " + heartCount;
};
document.getElementById("heart5").onclick = function() {
  heartCount++; document.getElementById("heartCount").textContent = "❤️ " + heartCount;
};
document.getElementById("heart6").onclick = function() {
  heartCount++; document.getElementById("heartCount").textContent = "❤️ " + heartCount;
};
document.getElementById("heart7").onclick = function() {
  heartCount++; document.getElementById("heartCount").textContent = "❤️ " + heartCount;
};
document.getElementById("heart8").onclick = function() {
  heartCount++; document.getElementById("heartCount").textContent = "❤️ " + heartCount;
};
document.getElementById("heart9").onclick = function() {
  heartCount++; document.getElementById("heartCount").textContent = "❤️ " + heartCount;
};

//  COPY BUTTONS
document.getElementById("copy1").onclick = function() {
  let number = document.getElementById("num1").textContent;
  navigator.clipboard.writeText(number);
  copyCount++; document.getElementById("copyCount").textContent = "📋 " + copyCount;
  alert("Number copied: " + number);
};
document.getElementById("copy2").onclick = function() {
  let number = document.getElementById("num2").textContent;
  navigator.clipboard.writeText(number);
  copyCount++; document.getElementById("copyCount").textContent = "📋 " + copyCount;
  alert("Number copied: " + number);
};
document.getElementById("copy3").onclick = function() {
  let number = document.getElementById("num3").textContent;
  navigator.clipboard.writeText(number);
  copyCount++; document.getElementById("copyCount").textContent = "📋 " + copyCount;
  alert("Number copied: " + number);
};
document.getElementById("copy4").onclick = function() {
  let number = document.getElementById("num4").textContent;
  navigator.clipboard.writeText(number);
  copyCount++; document.getElementById("copyCount").textContent = "📋 " + copyCount;
  alert("Number copied: " + number);
};
document.getElementById("copy5").onclick = function() {
  let number = document.getElementById("num5").textContent;
  navigator.clipboard.writeText(number);
  copyCount++; document.getElementById("copyCount").textContent = "📋 " + copyCount;
  alert("Number copied: " + number);
};
document.getElementById("copy6").onclick = function() {
  let number = document.getElementById("num6").textContent;
  navigator.clipboard.writeText(number);
  copyCount++; document.getElementById("copyCount").textContent = "📋 " + copyCount;
  alert("Number copied: " + number);
};
document.getElementById("copy7").onclick = function() {
  let number = document.getElementById("num7").textContent;
  navigator.clipboard.writeText(number);
  copyCount++; document.getElementById("copyCount").textContent = "📋 " + copyCount;
  alert("Number copied: " + number);
};
document.getElementById("copy8").onclick = function() {
  let number = document.getElementById("num8").textContent;
  navigator.clipboard.writeText(number);
  copyCount++; document.getElementById("copyCount").textContent = "📋 " + copyCount;
  alert("Number copied: " + number);
};
document.getElementById("copy9").onclick = function() {
  let number = document.getElementById("num9").textContent;
  navigator.clipboard.writeText(number);
  copyCount++; document.getElementById("copyCount").textContent = "📋 " + copyCount;
  alert("Number copied: " + number);
};

//  CALL BUTTONS
function makeCall(serviceName, numberId) {
  let serviceNumber = document.getElementById(numberId).textContent;
  if (coinCount >= 20) {
    coinCount -= 20;
    document.getElementById("coinCount").textContent = "🪙 " + coinCount;
    alert("Calling " + serviceName + " (" + serviceNumber + ")");
    let now = new Date().toLocaleString();
    let li = document.createElement("li");
    li.textContent = serviceName  +  " - "  + serviceNumber + " (" + now + ")";
    document.getElementById("historyList").appendChild(li);
  } else {
    alert("Not enough coins!");
  }
}

document.getElementById("call1").onclick = function() { makeCall("National Emergency Number", "num1"); };
document.getElementById("call2").onclick = function() { makeCall("Police Helpline Number", "num2"); };
document.getElementById("call3").onclick = function() { makeCall("Fire Service Number", "num3"); };
document.getElementById("call4").onclick = function() { makeCall("Ambulance Service", "num4"); };
document.getElementById("call5").onclick = function() { makeCall("Women & Child Helpline", "num5"); };
document.getElementById("call6").onclick = function() { makeCall("Anti-Corruption Helpline", "num6"); };
document.getElementById("call7").onclick = function() { makeCall("Electricity Helpline", "num7"); };
document.getElementById("call8").onclick = function() { makeCall("Brac Helpline", "num8"); };
document.getElementById("call9").onclick = function() { makeCall("Bangladesh Railway Helpline", "num9"); };

//  CLEAR HISTORY
document.getElementById("clearHistory").onclick = function() {
  document.getElementById("historyList").innerHTML = "";
};
