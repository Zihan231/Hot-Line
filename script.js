document
  .getElementById("Number-card-container")
  .addEventListener("click", function (e) {
    if (
      e.target.classList.contains("heart-btn") ||
      e.target.classList.contains("fa-heart")
    ) {
      let heartCountElement = parseInt(
        document.getElementById("heart-count").innerText
      );
      document.getElementById("heart-count").innerText = heartCountElement + 1;
    }
    // Call button Functionality
    else if (
      e.target.classList.contains("call-btn") &&
      getCoinsCounts() >= 20
    ) {
      if (e.target.closest(".National-emergency")) {
        let callNumber = getPhnNumber("National-emergency-number");
        alert("📞 Calling National Emergency Service " + callNumber + "....");
        calcCoin();
        addCallHistory("National Emergency", callNumber);
      }
      // police help line Call
      else if (e.target.closest(".Police-helpline")) {
        let callNumber = getPhnNumber("Police-helpline-number");
        alert("📞 Calling Police Helpline " + callNumber + "....");
        calcCoin();
        addCallHistory("Police Helpline", callNumber);
      }
      //  Fire Service Call
      else if (e.target.closest(".Fire-Service")) {
        let callNumber = getPhnNumber("Fire-Service-number");
        alert("📞 Calling Fire Service " + callNumber + "....");

        calcCoin();
        addCallHistory("Fire Service", callNumber);
      }
      //   Ambulance call
      else if (e.target.closest(".Ambulance-Service")) {
        let callNumber = getPhnNumber("Ambulance-Service-number");
        alert("📞 Calling Ambulance Service " + callNumber + "....");

        calcCoin();
        addCallHistory("Ambulance Service", callNumber);
      }
      //   Women & Child call
      else if (e.target.closest(".WandC-Service")) {
        let callNumber = getPhnNumber("WandC-Service-number");
        alert("📞 Calling Women & Child Helpline " + callNumber + "....");

        calcCoin();
        addCallHistory("Women & Child Helpline", callNumber);
      }
      //   Anti-corruption Call
      else if (e.target.closest(".Anti-corruption-Service")) {
        let callNumber = getPhnNumber("Anti-corruption-Service-number");
        alert("📞 Calling Anti-corruption Helpline " + callNumber + "....");

        calcCoin();
        addCallHistory("Anti-corruption Helpline", callNumber);
      }
      //   Electricity Helpline call
      else if (e.target.closest(".Electricity-Helpline")) {
        let callNumber = getPhnNumber("Electricity-Helpline-number");
        alert("📞 Calling Electricity Helpline " + callNumber + "....");

        calcCoin();
        addCallHistory("Electricity Helpline", callNumber);
      }
      //   Brac
      else if (e.target.closest(".Brac-Helpline")) {
        let callNumber = getPhnNumber("Brac-Helpline-number");
        alert("📞 Calling Brac Helpline " + callNumber + "....");

        calcCoin();
        addCallHistory("Brac Helpline", callNumber);
      }
      //   BD railway
      else if (e.target.closest(".BD-Rail-Service")) {
        let callNumber = getPhnNumber("BD-Rail-Service-number");
        alert("📞 Calling Bangladesh Railway Helpline " + callNumber + "....");

        calcCoin();
        addCallHistory("Bangladesh Railway Helpline", callNumber);
      }
    } else if (
      e.target.classList.contains("call-btn") &&
      getCoinsCounts() < 20
    ) {
      alert(
        "❌ Insufficient coins. You need at least 20 coins to make a call."
      );
    }
    // Copy functionality
    else if (e.target.classList.contains("copy-btn")) {
      if (e.target.closest(".National-emergency")) {
        let copyNumber = getPhnNumber("National-emergency-number");
        copyToClipboard(copyNumber);
      } else if (e.target.closest(".Police-helpline")) {
        let copyNumber = getPhnNumber("Police-helpline-number");
        copyToClipboard(copyNumber);
      } else if (e.target.closest(".Fire-Service")) {
        let copyNumber = getPhnNumber("Fire-Service-number");
        copyToClipboard(copyNumber);
      } else if (e.target.closest(".Ambulance-Service")) {
        let copyNumber = getPhnNumber("Ambulance-Service-number");
        copyToClipboard(copyNumber);
      } else if (e.target.closest(".WandC-Service")) {
        let copyNumber = getPhnNumber("WandC-Service-number");
        copyToClipboard(copyNumber);
      } else if (e.target.closest(".Anti-corruption-Service")) {
        let copyNumber = getPhnNumber("Anti-corruption-Service-number");
        copyToClipboard(copyNumber);
      } else if (e.target.closest(".Electricity-Helpline")) {
        let copyNumber = getPhnNumber("Electricity-Helpline-number");
        copyToClipboard(copyNumber);
      } else if (e.target.closest(".Brac-Helpline")) {
        let copyNumber = getPhnNumber("Brac-Helpline-number");
        copyToClipboard(copyNumber);
      } else if (e.target.closest(".BD-Rail-Service")) {
        let copyNumber = getPhnNumber("BD-Rail-Service-number");
        copyToClipboard(copyNumber);
      }
    }
  });
document.getElementById("clear-btn").addEventListener("click", function () {
  document.getElementById("call-history").innerHTML = "";
});

// Reusable functions
function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
    alert("✅ Number " + text + " copied to clipboard.");
    document.getElementById("copyCount").innerText = parseInt(document.getElementById("copyCount").innerText) + 1;
}

function getCoinsCounts() {
  let totalCoin = parseInt(document.getElementById("coin-count").innerText);
  return totalCoin;
}
function calcCoin() {
  let totalCoin = getCoinsCounts();
  document.getElementById("coin-count").innerText = totalCoin - 20;
}

function getPhnNumber(id) {
  return document.getElementById(id).innerText;
}

// Call History
const ul = document.getElementById("call-history");
function addCallHistory(serviceName, number) {
  // Get current time in hh:mm:ss AM/PM format
  const time = new Date().toLocaleTimeString([], { hour12: true });

  // Create <li>
  const li = document.createElement("li");

  // Create main div
  const mainDiv = document.createElement("div");
  mainDiv.className =
    "border-1 flex justify-between items-center px-[10px] md:px-[5px] py-[5px] mb-[5px] border-gray-200 rounded-lg md:border-none";

  // Left div
  const leftDiv = document.createElement("div");
  leftDiv.className = "w-[70%]";

  const h3 = document.createElement("h3");
  h3.className =
    "inter text-[12px] md:text-[16px] w-[100%] md:w-[100%] mb-[5px] font-semibold";
  h3.textContent = serviceName;

  const p = document.createElement("p");
  p.className = "text-[#5C5C5C] md:text-[16px]";
  p.textContent = number;

  leftDiv.appendChild(h3);
  leftDiv.appendChild(p);

  // Right div
  const rightDiv = document.createElement("div");
  rightDiv.className = "text-[12px] md:text-[16px]";
  rightDiv.textContent = time;

  // Combine everything
  mainDiv.appendChild(leftDiv);
  mainDiv.appendChild(rightDiv);
  li.appendChild(mainDiv);
  ul.appendChild(li);
}
