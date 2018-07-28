let addBtn = document.querySelector("button");
let i = 0;

addBtn.addEventListener('click', function() {
  let btn = document.createElement("button");
  btn.innerText = i++;
  btn.style.background = (i % 2 == 0) ? "skyblue" : "pink";
  document.body.appendChild(btn);
})

setTimeout(addBtn, 100);

