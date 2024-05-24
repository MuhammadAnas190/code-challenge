const data = [
  {
    name: "Alex Cooper",
    message: "Hello! My name is Alex, what's your name?",
    audio: true,
  },
  {
    name: "Joe Howard",
    message: "Hey Alex, my name is Joe, I’m from New Jersey",
    audio: true,
  },
  {
    name: "Alex Cooper",
    message: "Hey Joe! It's great to meet you.",
    audio: true,
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const chatMessagesContainer = document.getElementById("chat-messages");
  data.forEach((message) => {
    const messageElement = createMessageElement(message);
    chatMessagesContainer.appendChild(messageElement);
  });
});

function createMessageElement(message) {
  const messageElement = document.createElement("div");
  messageElement.classList.add("message", "flex");

  const profileIconElement = document.createElement("i");
  profileIconElement.classList.add("fa-regular", "fa-user");

  const messageContentElement = createMessageContentElement(message);

  messageElement.appendChild(profileIconElement);
  messageElement.appendChild(messageContentElement);

  return messageElement;
}

function createMessageContentElement(message) {
  const messageContentElement = document.createElement("div");
  messageContentElement.classList.add("message-content", "flex", "flex-column");

  const nameElement = document.createElement("span");
  nameElement.classList.add("name");
  nameElement.textContent = message.name;

  const textElement = document.createElement("p");
  textElement.classList.add("text");
  textElement.textContent = message.message;

  messageContentElement.appendChild(nameElement);
  messageContentElement.appendChild(textElement);

  if (message.audio) {
    const audioButtonElement = createAudioButtonElement();
    messageContentElement.appendChild(audioButtonElement);
  }

  return messageContentElement;
}

function createAudioButtonElement() {
  const audioButtonElement = document.createElement("button");
  audioButtonElement.classList.add("audio-button");
  audioButtonElement.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
  return audioButtonElement;
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scrolling behavior
  });
}

const scrollToTopButton = document.getElementById("scrollToTopButton");

scrollToTopButton.addEventListener("click", function () {
  scrollToTop();
});
