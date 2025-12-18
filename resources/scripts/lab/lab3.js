const toggle = document.getElementById('swap');
const col1 = document.querySelectorAll('.col1');
const col2 = document.querySelectorAll('.col2');

toggle.addEventListener('click', function () {
  this.classList.toggle('bi-palette');
  const fill = this.classList.toggle('bi-palette-fill');

  col1.forEach(section => {
    section.style.transition = '2s';
    section.style.background = fill ? '#a7c957' : '#bc4749';
    section.style.color = fill ? '#000000' : '#fff';
  });

  col2.forEach(section => {
    section.style.transition = '2s';
    section.style.background = fill ? '#bc4749' : '#a7c957';
    section.style.color = fill ? '#fff' : '#000000';
  });
});

function showImage(src) {
  const overlay = document.getElementById('overlay');
  const largeImage = document.getElementById('largeImage');
  const fullImage = document.getElementById('fullImage');

  fullImage.src = src;
  overlay.classList.add('show');
  overlay.style.display = 'block';
  largeImage.style.display = 'block';
  largeImage.style.animation = 'zoomFadeIn 0.4s ease forwards';

  function hideImage() {
    largeImage.style.animation = 'zoomFadeOut 0.4s ease forwards';
    overlay.classList.remove('show');
    setTimeout(() => {
      largeImage.style.display = 'none';
      overlay.style.display = 'none';
    }, 400);
  }
  overlay.onclick = hideImage;
  document.getElementById('closeImage').onclick = hideImage;
}
function readMore() {
  let dots = document.getElementById("dots");
  let more = document.getElementById("more");
  let btn = document.getElementById("btn");

  if (dots.style.display === "none") {
    dots.style.display = "inline"
    more.style.display = "none"
    btn.innerHTML = "Показать больше"
  } else {
    more.style.display = "inline"
    dots.style.display = "none";
    btn.innerHTML = "Скрыть"
  }
}

let i = 0;
document.getElementById('plus').addEventListener('click', function () {
  if (i < 10) {
    i++;
    document.getElementById("c").textContent = i;
  }
  if (i === 10) {
    document.getElementById("msg").innerHTML = "Достигнуто максимальное значение";
  }
});

let checks = document.querySelectorAll("#sect5 input[type='checkbox']");
function total() {
  let cost = 0;
  for (let i = 0; i < checks.length; i++) {
    if (checks[i].checked) {
      cost += parseFloat(checks[i].value);
    }
  }
  document.getElementById("price").innerHTML = `Итого ${cost} какуликс`;
}

document.addEventListener('click', function (e) {
  if (e.target.closest('#up')) {
    cont = document.querySelector('.window');
    cont.scrollTo({ top: 0, behavior: 'smooth' });
  }
});
