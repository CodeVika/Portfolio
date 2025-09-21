document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  let isValid = true;
  if (!name) {
    isValid = false;
    document.getElementById("name-error-message").classList.add("eror-input");
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    isValid = false;
    document.getElementById("email-error-message").classList.add("eror-input");
  }
  if (!message) {
    isValid = false;
    document
      .getElementById("message-error-message")
      .classList.add("eror-input");
  }
  if (isValid) {
    alert(
      "Thank you for your message, " + name + "! I will get back to you soon."
    );
    document.querySelector("form").reset();

    ["name", "email", "message"].forEach((id) => {
      const wrapperId =
        id === "message" ? "message-error-message" : `${id}-error-message`;
      document.getElementById(wrapperId).classList.remove("eror-input");
    });
  }
});
["name", "email", "message"].forEach((id) => {
  document.getElementById(id).addEventListener("input", () => {
    document
      .getElementById(`${id}-error-message`)
      .classList.remove("eror-input");
  });
});
