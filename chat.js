const chatWindow = document.getElementById("chat");
const messageInput = document.getElementById("message");
const sendButton = document.getElementById("send-button");

function addMessage(username, message) {
  const messageElement = document.createElement("div");
  messageElement.innerHTML = `<strong>${username}:</strong> ${message}`;
  chatWindow.appendChild(messageElement);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

sendButton.addEventListener("click", () => {
  const username = document.getElementById("username").value;
  const message = messageInput.value;
  addMessage(username, message);
  messageInput.value = "";
});
