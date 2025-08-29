let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

//  HEART BUTTONS
document.getElementById("heart1").onclick = function() {
  heartCount++; document.getElementById("heartCount").textContent = "heart1" + heartCount;
};
document.getElementById("heart2").onclick = function() {
  heartCount++; document.getElementById("heartCount").textContent = "heart2" + heartCount;
};
document.getElementById("heart3").onclick = function() {
  heartCount++; document.getElementById("heartCount").textContent = "heart3" + heartCount;
};
//  COPY BUTTONS
document.getElementById("copy1").onclick = function() {
  let number = document.getElementById("num1").textContent;
  navigator.clipboard.writeText(number);
  copyCount++; document.getElementById("copyCount").textContent = "num1" + copyCount;
  alert("Number copied: " + number);
};
document.getElementById("copy2").onclick = function() {
  let number = document.getElementById("num2").textContent;
  navigator.clipboard.writeText(number);
  copyCount++; document.getElementById("copyCount").textContent = "num1" + copyCount;
  alert("Number copied: " + number);
};
document.getElementById("copy3").onclick = function() {
  let number = document.getElementById("num3").textContent;
  navigator.clipboard.writeText(number);
  copyCount++; document.getElementById("copyCount").textContent = "num3" + copyCount;
  alert("Number copied: " + number);
};
//  CALL BUTTONS
function makeCall(serviceName, numberId) {
  let serviceNumber = document.getElementById(numberId).textContent;
  if (coinCount >= 20) {
    coinCount -= 20;
    document.getElementById("coinCount").textContent = "coinCount" + coinCount;
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
//  CLEAR HISTORY
document.getElementById("clearHistory").onclick = function() {
  document.getElementById("historyList").innerHTML = "";
};