const btn = document.getElementById("btn");
const advice = document.getElementById("advice");
const spanId = document.getElementById("advice-id");

const getSound = (fuente) => {
  const sound = document.createElement("audio");
  sound.src = fuente;
  sound.setAttribute("preload", "auto");
  sound.setAttribute("controls", "none");
  sound.style.display = "none";
  document.body.appendChild(sound);
  return sound;
};

const fetchData = async () => {
  try {
    const res = await fetch("https://api.adviceslip.com/advice");
    // check for 404 error
    if (!res.ok) {
      throw new Error(res.status);
    }
    const data = await res.json();

    spanId.innerHTML = data.slip.id;
    advice.innerHTML = data.slip.advice;
  } catch (error) {
    console.log(error);
  }
};

const sound = getSound("button.mp3");

btn.addEventListener("click", () => {
  sound.play();
  fetchData();
});
