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
  messageElement.classList.add("message", "flex", "flex-column");

  const messageHeaderElement = document.createElement("div");
  messageHeaderElement.classList.add(
    "message-header",
    "flex",
    "flex-base",
    "flex-row",
    "w-100"
  );

  const profileIconElement = document.createElement("i");
  profileIconElement.classList.add("fa-regular", "fa-user", "avatar");

  const nameElement = document.createElement("span");
  nameElement.classList.add("name");
  nameElement.textContent = message.name;

  const messageContentElement = createMessageContentElement(message);

  messageHeaderElement.appendChild(profileIconElement);
  messageHeaderElement.appendChild(nameElement);

  messageElement.appendChild(messageHeaderElement);
  messageElement.appendChild(messageContentElement);

  return messageElement;
}

function createMessageContentElement(message) {
  const messageContentElement = document.createElement("div");
  messageContentElement.classList.add(
    "message-content",
    "flex",
    "flex-column",
    "w-100"
  );

  const nameElement = document.createElement("span");
  nameElement.classList.add("name");
  nameElement.textContent = message.name;

  const textElement = document.createElement("p");
  textElement.classList.add("text");
  textElement.textContent = message.message;

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

// Scroll to top
function scrollToTopOfDiv(divId) {
  const div = document.getElementById(divId);
  if (div) {
    div.scrollTop = 0;
  }
}

const scrollToTopButton = document.getElementById("scrollToTopButton");
scrollToTopButton.addEventListener("click", function () {
  scrollToTopOfDiv("chat-messages");
});

// Toggle mic button
const toggleMicButton = document.getElementById("toggleMicButton");

toggleMicButton.addEventListener("click", function () {
  // Toggle mic on/off by toggling CSS class
  if (toggleMicButton.classList.contains("mic-off")) {
    toggleMicButton.classList.remove("mic-off");
    toggleMicButton.innerHTML = '<i class="fas fa-microphone-alt"></i>'; // Change icon to mic on
    // Add functionality for mic on
  } else {
    toggleMicButton.classList.add("mic-off");
    toggleMicButton.innerHTML = '<i class="fas fa-microphone-slash"></i>'; // Change icon to mic off
    // Add functionality for mic off
  }
});
