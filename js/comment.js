
let allComments = [];
class AddComment {
  constructor(name, comment) {
    this.name = name;
    this.comment = comment;
  }
};
allComments.push(new AddComment(`Ирина Белая`,
  `'On the other hand, we denounce with righteous
 indignation and dislike men who are so beguiled
 and demoralized by the charms of pleasure of
 moment, so blinded by desire, that they cannot
foresee the pain and trouble that are bound.
`
));
allComments.push(new AddComment(`Алина Юрьева`,
  `On the other hand, we denounce with righteous
 indignation and dislike men who are so beguiled
 and demoralized by the charms of pleasure of
 moment, so blinded by desire, that they cannot
foresee the pain and trouble that are bound.
.
`
));
allComments.push(new AddComment(`Алина Юрьева`,
  `On the other hand, we denounce with righteous
 indignation and dislike men who are so beguiled
 and demoralized by the charms of pleasure of
 moment, so blinded by desire, that they cannot
foresee the pain and trouble that are bound.
.
`
));
allComments.push(new AddComment(`Алина Юрьева`,
  `On the other hand, we denounce with righteous
 indignation and dislike men who are so beguiled
 and demoralized by the charms of pleasure of
 moment, so blinded by desire, that they cannot
foresee the pain and trouble that are bound.
.
`
));
allComments.push(new AddComment(`Алина Юрьева`,
  `On the other hand, we denounce with righteous
 indignation and dislike men who are so beguiled
 and demoralized by the charms of pleasure of
 moment, so blinded by desire, that they cannot
foresee the pain and trouble that are bound.
.
`
));



allComments.map(getAllComments);



function getAllComments(item, i) {
  let backComment = document.createElement(`div`);
  let img = document.createElement(`img`);
  img.setAttribute(`src`, `img/flowerCom.png`);
  img.setAttribute(`class`, `flower`);

  backComment.setAttribute(`class`, `backComment`);
  let comments = document.createElement(`div`);
  comments.setAttribute(`class`, `comments`);
  let name = document.createElement(`span`);

  name.textContent = allComments[i].name;
  comments.appendChild(name);
  let description = document.createElement(`div`);
  description.textContent = allComments[i].comment;
  comments.appendChild(description);
  backComment.appendChild(comments);
  backComment.appendChild(img);
  document.querySelector(`#allComments`).appendChild(backComment);



};
let com = document.querySelectorAll(`.backComment`);
for (let i = 0; i != com.length; i++) {
  com[i].style.display = 'none'
};


let counter = 0;

function show() {
  if (counter >= com.length - 1) {
    counter = 0;
  } else if (counter < 0) {
    counter = com.length - 1

  };
  com[counter].style.display = ``;
  com[counter + 1].style.display = ``;
};


function del() {
  for (let i = 0; i != com.length; i++) {
    com[i].style.display = 'none'
  };
}

function up() {
  del();
  show(counter += 1);
};


function down() {

  del();
  show(counter -= 1)
};


show();

let buttonAll = document.querySelector(`#button`);

function seeAll() {
  for (let i = 0; i != com.length; i++) {

    com[i].setAttribute(`class`, `open`)
    com[i].style.display = ''
  };
  document.querySelector(`#allComments`).setAttribute(`id`, `open`);

};
buttonAll.addEventListener(`click`, seeAll)
