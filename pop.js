<script>
      // Function to show the popup
      function showPopup() {
          document.getElementById("popup").style.display = "block";
      }

      // Function to close the popup
      function closePopup() {
          document.getElementById("popup").style.display = "none";
          // Set a cookie to indicate that the popup has been shown once
          document.cookie = "popupShown=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
      }

      // Check if the popup has been shown before
      function checkPopupCookie() {
          var popupShown = document.cookie.replace(/(?:(?:^|.*;\s*)popupShown\s*\=\s*([^;]*).*$)|^.*$/, "$1");
          if (popupShown !== "true") {
              showPopup();
          }
      }

      // Run the function when the page loads
      window.onload = checkPopupCookie;
  </script>
