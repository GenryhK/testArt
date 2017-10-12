function rating(n) {
  let r = document.createElement(`div`);
  r.setAttribute(`class`, `rating`);

  let input = document.createElement(`input`);
  input.setAttribute(`type`, `radio`);
  input.setAttribute(`name`, `star${n}`);
  input.setAttribute(`id`, `star${n}`);
  input.setAttribute(`checked`, `checked`);
  r.appendChild(input);
  let lable = document.createElement(`label`);
  lable.setAttribute(`for`, `star${n}`);
  let divStar = document.createElement(`div`);
  divStar.setAttribute(`class`, `star`);
  lable.appendChild(divStar);
  r.appendChild(lable);
  divRei.appendChild(r);
};


let katalog = [];

class Katalog {
  constructor(img, description) {
    this.img = img;
    this.description = description;
  }
};
katalog.push(new Katalog(`img/p1.png`, `Свадебное платье “Lady M”`));
katalog.push(new Katalog(`img/p1.png`, `Свадебное платье “Lady M”`));
katalog.push(new Katalog(`img/p1.png`, `Свадебное платье “Lady M”`));


katalog.push(new Katalog(`img/p2.png`, `Свадебное платье “Sabrina”`));
katalog.push(new Katalog(`img/p2.png`, `Свадебное платье “Sabrina”`));
katalog.push(new Katalog(`img/p2.png`, `Свадебное платье “Sabrina”`));

katalog.push(new Katalog(`img/p3.png`, `Свадебное платье “Lady M”`));
katalog.push(new Katalog(`img/p3.png`, `Свадебное платье “Lady M”`));
katalog.push(new Katalog(`img/p3.png`, `Свадебное платье “Lady M”`));
console.log(katalog);

function push(item, i) {
  let divAll = document.createElement(`div`);
  divAll.setAttribute(`class`, `allT`)
  let divPic = document.createElement(`div`);
  let img = document.createElement(`img`);
  img.setAttribute(`src`, katalog[i].img);
  let divDescription = document.createElement(`div`);
  divDescription.textContent = katalog[i].description;
  divPic.appendChild(img);
  divPic.setAttribute(`class`, `pic`);
  divAll.appendChild(divPic);
  divAll.appendChild(divDescription);
  let divRei = document.createElement(`div`);

  function rating(n) {
    let r = document.createElement(`div`);
    r.setAttribute(`class`, `rating`);

    let input = document.createElement(`input`);
    input.setAttribute(`type`, `radio`);
    input.setAttribute(`name`, `star${n}`);
    input.setAttribute(`id`, `star${n}`);
    input.setAttribute(`checked`, `checked`);
    r.appendChild(input);
    let lable = document.createElement(`label`);
    lable.setAttribute(`for`, `star${n}`);
    let divStar = document.createElement(`div`);
    divStar.setAttribute(`class`, `star`);
    lable.appendChild(divStar);
    r.appendChild(lable);
    divRei.appendChild(r);
  };



  rating(1);
  rating(2);
  rating(3);
  rating(4);
  rating(5);
  divAll.appendChild(divRei);


  let button = document.createElement(`div`);
  button.setAttribute(`class`, `button`);
  let span = document.createElement(`span`);
  span.textContent = `просмотреть`;
  button.appendChild(span);
  divAll.appendChild(button);


  document.querySelector(`#all`).appendChild(divAll);
};
katalog.map(push);

function over(event) {
  if (event.target.className == `allT` || event.target.className.tagName ==
    `img`) {
    event.target.style.border = '2px solid #85334A'
  }
};
let allM = document.querySelector(`#all`);
allM.addEventListener(`mouseover`,
  over
);

function out(event) {
  if (event.target.className == `allT` || event.target.className.tagName ==
    `img`) {
    event.target.style.border = ''
  }
};
allM.addEventListener(`mouseout`,
  out
);
