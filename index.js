
    const button = document.getElementById("toastButton");
    const toastContainer = document.getElementById("toastContainer");

    function showToast(message, type = "success") {
      const toast = document.createElement("div");

      toast.classList.add("toast");
      toast.classList.add(type);

      toast.innerText = message;

      toastContainer.appendChild(toast);

      setTimeout(function () {
        toast.classList.add("show");
      }, 100);

      setTimeout(function () {
        toast.classList.remove("show");

        setTimeout(function () {
          toast.remove();
        }, 400);
      }, 3000);
    }

    button.addEventListener("click", function () {
      const messages = [
        "✅ Weather Loaded",
        "❌ Failed To Load Data",
        "⚠️ Connection Slow",
        "🌍 Country Selected",
      ];

      const randomIndex = Math.floor(Math.random() * messages.length);

      const randomMessage = messages[randomIndex];

      if (randomMessage.includes("Failed")) {
        showToast(randomMessage, "error");
      } else if (randomMessage.includes("Slow")) {
        showToast(randomMessage, "warning");
      } else {
        showToast(randomMessage, "success");
      }
    });
