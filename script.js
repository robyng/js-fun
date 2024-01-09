
function firstBro() {
  document.getElementById("first-bro-text").style.display = "block";
    document.getElementById("second-bro-text").style.display="none";
    document.getElementById("third-bro-text").style.display = "none";
    document.getElementById("first-brother").classList.add("bridge-green");
    document.getElementById("second-brother").classList.remove("bridge-green");
    document.getElementById("third-brother").classList.remove("bridge-green");
  }

  function secondBro() {
    document.getElementById("first-bro-text").style.display = "none";
    document.getElementById("second-bro-text").style.display="block";
    document.getElementById("third-bro-text").style.display = "none";
    document.getElementById("first-brother").classList.remove("bridge-green");
    document.getElementById("second-brother").classList.add("bridge-green");
    document.getElementById("third-brother").classList.remove("bridge-green");
  }

  function thirdBro() {
    document.getElementById("first-bro-text").style.display = "none";
    document.getElementById("second-bro-text").style.display="none";
    document.getElementById("third-bro-text").style.display = "block";
    document.getElementById("first-brother").classList.remove("bridge-green");
    document.getElementById("second-brother").classList.remove("bridge-green");
    document.getElementById("third-brother").classList.add("bridge-green");
  }

//battery animatiom
const bridge = document.querySelector('.bridge');
const secondBroEl = document.querySelector('#second-brother');
const thirdBroEl = document.querySelector('#third-brother');
const observer = new IntersectionObserver(entries => {
  secondBroEl.classList.toggle('animation', entries[0].isIntersecting);
  thirdBroEl.classList.toggle('animation2', entries[0].isIntersecting);
  console.log(entries)
});

observer.observe(bridge);

  