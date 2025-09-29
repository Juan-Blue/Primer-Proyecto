const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const p = document.querySelector('#p');
const content = document.querySelector('.bg-contenedor');

btn.addEventListener('click', (e)=>{
    e.preventDefault();

    if (input.value.trim() === '16/09/2022'){
        
    p.innerHTML = `Ajooo si te la sabes 😍💙`;
    setTimeout(() => {
        window.location.assign('./web.html');
        }, 500);
        
    }else if(input.value === ''){
        p.innerHTML = `Ingresa algo 😉`;

        content.classList.add('shake');

        setTimeout(()=>{
            content.classList.remove('shake')
        },400)

    }else{
        p.innerHTML = `Esta mala, intentalo de nuevo 🥺`;
        content.classList.add('shake');

        setTimeout(()=>{
            content.classList.remove('shake')
        },400)

}});

console.log('Este es un mensaje nuevo');