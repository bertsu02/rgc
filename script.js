(function() {
  const wheel = document.querySelector('.wheel');
  const startButton = document.querySelector('.button');
  const messageContainer = document.querySelector('.message-container');
  let deg = 0;

  // Initialize particles.js
  document.addEventListener('DOMContentLoaded', function() {
    particlesJS("particles-js", {
      "particles": {
        "number": {
          "value": 100,
          "density": {
            "enable": true,
            "value_area": 1000
          }
        },
        "color": {
          "value": ["#aa73ff", "#f8c210", "#83d238", "#33b1f8"]
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#fff"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.6,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 2,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 120,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          },
          "onclick": {
            "enable": false
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 140,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });
  });

  startButton.addEventListener('click', () => {
    startButton.style.pointerEvents = 'none';
    deg = Math.floor(1000 + Math.random() * 1000);
    wheel.style.transition = 'all 5s ease-out';
    wheel.style.transform = `rotate(${deg}deg)`;
    wheel.classList.add('blur');
  });

  wheel.addEventListener('transitionend', () => {
    wheel.classList.remove('blur');
    startButton.style.pointerEvents = 'auto';
    wheel.style.transition = 'none';
    const actualDeg = deg % 360;
    wheel.style.transform = `rotate(${actualDeg}deg)`;

    const area = determineArea(actualDeg);

    displayMessage(area);
  });

  function determineArea(deg) {
    const areas = [
      { name: 'Try Again', startDeg: 0, endDeg: 22.49 },
      { name: '2$ Tip Gamdom', startDeg: 22.5, endDeg: 45 },
      { name: 'Try Again', startDeg: 45.01, endDeg: 67.49 },
      { name: '5$ On Roulette', startDeg: 67.5, endDeg: 90 },
      { name: 'Try Again', startDeg: 90.01, endDeg: 112.49 },
      { name: '20 Spins on 0.2$', startDeg: 112.5, endDeg: 135 },
      { name: 'Try Again', startDeg: 135.01, endDeg: 157.49 },
      { name: '5$ Tip Gamdom', startDeg: 157.5, endDeg: 180 },
      { name: 'Try Again', startDeg: 180.01, endDeg: 202.49 },
      { name: '2$ Tip Gamdom', startDeg: 202.5, endDeg: 225 },
      { name: 'Try Again', startDeg: 225.01, endDeg: 247.49 },
      { name: '5$ On Dice', startDeg: 247.5, endDeg: 270 },
      { name: 'Try Again', startDeg: 270.01, endDeg: 292.49 },
      { name: '10 Spins on 0.4$', startDeg: 292.5, endDeg: 315 },
      { name: 'Try Again', startDeg: 315.01, endDeg: 337.49 },
      { name: '1$ Tip Gamdom', startDeg: 337.5, endDeg: 360 },
    ];

    for (const area of areas) {
      if (deg >= area.startDeg && deg < area.endDeg) {
        return area.name;
      }
    }

    return 'Dead center, RE-SPIN!';
  }

  function displayMessage(area) {
    const messageContainer = document.getElementById('message-container');
    if (area === 'Kevin Spin') {
      const proceedButton = document.createElement('button');
      messageContainer.innerText = `You have won a Kevin Spin!`;
      messageContainer.style.display = 'block';
      proceedButton.innerText = 'Proceed';
      proceedButton.onclick = function() {
        window.location.href = 'https://bertsu02.github.io/kevin-spin/';
      };
      messageContainer.appendChild(document.createElement('br'));
      messageContainer.appendChild(proceedButton);
    } else {
      messageContainer.innerText = `${area}`;
      messageContainer.style.display = 'block';
      setTimeout(() => {
        messageContainer.style.display = 'none';
      }, 3000);
    }
  }
})();
