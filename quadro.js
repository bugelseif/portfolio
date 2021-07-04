const tamanho = document.querySelector('#tamanho')

for (let i = 0; i < 50; i++) {
    x = Math.floor(Math.random()*16777215).toString(16);
    const createQuadro = document.createElement('div')
    createQuadro.setAttribute('class','quadros')
    createQuadro.style['background-color'] = '#'+x
    createQuadro.addEventListener('mouseover', ()  => {move(createQuadro)})
    tamanho.appendChild(createQuadro)    
}


const move = function(item){
    let xm = Math.random() * 1500
    gsap.to(item, {duration: 5, x:xm})
    let ym = Math.random() * 500
    gsap.to(item, {duration: 5, y:ym})
    let r = Math.random() * 360
    gsap.to(item, {duration: 10, rotation:r})
}