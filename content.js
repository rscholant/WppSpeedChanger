
const interval = setInterval(() => {
  const header  = document.querySelector(".LhZF7")
  if(header) {
    clearInterval(interval)

    const button = document.createElement("button")
    button.innerHTML = '2x'
    button.classList.add("twoTimesButton")

    button.addEventListener("click", () => {
      const audios = document.querySelectorAll("audio");
      audios.forEach((audio)=>{
        audio.playbackRate = 1.5;
      })
    })
    
    header.appendChild(button)
  }
}, 1000)


