let panel = document.querySelector(`#upPanel`);

function upMenuClick(event) {
  let name = event.target.getAttribute(`name`);
  switch (name) {
    case `Katalog`:
      (function() {
        alert(`katalog`)
      }());
      break;
    case `AboutUs`:
      (function() {
        document.location.href = "aboutUs.html";
      }());
      break;

    case `Koments`:
      (function() {
        document.location.href = "comment.html"
      }());
      break;

    case `Galery`:
      (function() {
        alert(`Galery`)
      }());
      break;

    case `sendMassege`:
      (function() {
        alert(`sendMassege`)
      }());
      break;

  }

};
panel.addEventListener(`click`, upMenuClick);
document.querySelector(`#button`).addEventListener(`click`, function() {
  alert(`записаться на примерку`)
});
