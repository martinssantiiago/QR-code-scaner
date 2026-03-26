      function toggleDropdown() {
        document.getElementById("dropdownMenu").style.display =
          document.getElementById("dropdownMenu").style.display === "block"
            ? "none"
            : "block";
      }

      function selectItem(element) {
        document.querySelector(".dropdown-btn").innerText = element.innerText;
        document.getElementById("dropdownMenu").style.display = "none";
      }