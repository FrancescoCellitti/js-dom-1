const bottoneEl = document.querySelector('button')
const imgEl = document.getElementById('spenta')
const img2El = document.getElementById('accesa')

bottoneEl.addEventListener('click', accendi);

function accendi() {
    imgEl.classList.toggle('d-none');
    img2El.classList.toggle('d-none');
    document.querySelector('span').classList.toggle('d-none')
    document.querySelector('p').classList.toggle('d-none')
    
}


