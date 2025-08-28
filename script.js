let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

// ❤️ Heart Button
document.querySelectorAll(".heartBtn").forEach(btn => {
  btn.addEventListener("click", () => {
    heartCount++;
    document.getElementById("heartCount").textContent = "❤️ " + heartCount;
  });
});

// 📋 Copy Button
document.querySelectorAll(".copyBtn").forEach(btn => {
  btn.addEventListener("click", () => {
    const number = btn.parentElement.previousElementSibling.textContent;
    navigator.clipboard.writeText(number);
    copyCount++;
    document.getElementById("copyCount").textContent = "📋 " + copyCount;
    alert("Number copied: " + number);
  });
});

// 📞 Call Button
document.querySelectorAll(".callBtn").forEach(btn => {
  btn.addEventListener("click", () => {
    const card = btn.closest("div").parentElement;
    const serviceName = card.querySelector("h2").textContent;
    const serviceNumber = card.querySelector(".hotlineNumber").textContent;

    if (coinCount >= 20) {
      coinCount -= 20;
      document.getElementById("coinCount").textContent = "🪙 " + coinCount;
      alert(`Calling ${serviceName} (${serviceNumber})...`);

      // Add history with time
      const now = new Date().toLocaleString();
      const li = document.createElement("li");
      li.textContent = `${serviceName} - ${serviceNumber} (${now})`;
      document.getElementById("historyList").appendChild(li);
    } else {
      alert("Not enough coins!");
    }
  });
});

// 🗑️ Clear History
document.getElementById("clearHistory").addEventListener("click", () => {
  document.getElementById("historyList").innerHTML = "";
});

