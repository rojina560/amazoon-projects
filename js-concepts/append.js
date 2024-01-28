const mainContainer = document.getElementById('main-container');
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = ' food vlog';
section.appendChild(h1);
const p = document.createElement('p');
p.innerText = 'fastfood';
h1.appendChild(p);
const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText ='birani'
ul.appendChild(li1)
const li2 = document.createElement('li');
li2.innerText ='birani'
ul.appendChild(li2)
const li3 = document.createElement('li');
li3.innerText ='birani'
ul.appendChild(li3)

section.appendChild(ul)
mainContainer.appendChild(section)

// inner html

const dressSection = document.createElement('section')
dressSection.innerHTML = `
<h1> my dress section </h1>
<ul>
<li> this is li</li>
</ul>`
mainContainer.appendChild(dressSection)
