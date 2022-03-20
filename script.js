const input = document.querySelector('#input');
const btn = document.querySelector('#btn');
let output = document.querySelector('.output');
const ol = document.createElement('ol');
const error = document.querySelector("#error")
//  add event listen on click
btn.addEventListener('click', () => {
  let inputval=input.value
  if (inputval=="") {
    error.textContent="please add todo"
  } else {
    error.remove()
    const li = document.createElement('li');
    li.innerHTML = input.value;
    output.appendChild(ol);
    ol.appendChild(li);
    let delbtn = document.createElement('button');
    let markbtn = document.createElement('button');
    delbtn.textContent = 'Delete';
    delbtn.style.margin = '5px';
    markbtn.textContent = 'Mark Task';
    markbtn.style.marginLeft = '5px';
    li.append(markbtn);
    li.append(delbtn);
    input.value = '';
    delbtn.addEventListener('click', () => {
      li.remove();
    });
    markbtn.addEventListener('click', (e) => {
      li.classList.toggle('mark');
    });
  }
});
