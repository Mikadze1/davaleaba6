// #1

let divElement = document.createElement('div');
divElement.classList.add('wraper');



let imgElement = document.createElement('img');

imgElement.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png');
imgElement.setAttribute('alt', 'image');



let hElement = document.createElement('h2');

hElement.classList.add('title');
hElement.innerText = 'image title';
hElement.style.color = 'red';
hElement.style.color = 'red';
hElement.style.fontSize = '30px'



divElement.appendChild(imgElement);
divElement.appendChild(hElement);

document.getElementById("Id").appendChild(divElement);



// #2

let newDivElement = document.querySelectorAll('.same');

newDivElement.forEach(function(item){
    let pElement = document.createElement('p');
    pElement.classList.add('text');
    pElement.innerText = 'Hello';

    item.appendChild(pElement);
});

