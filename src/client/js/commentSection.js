const videoContainer = document.getElementById("videoContainer");
const form = document.getElementById("commentForm");
const textarea = form.querySelector("textarea");
const button = form.querySelector("button");

const handleSubmit = (event) => {
    event.preventDefault();
    const text = textarea.value;
    const video = videoContainer.dataset.id;
};

form.addEventListener("submit", handleSubmit);