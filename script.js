const btn = document.querySelector('.btn-main');
const containerModal = document.querySelector('.container-modal');
const btnFechar = document.querySelector('.btn-fecha__modal');

btn.addEventListener('click', ()=>{
    containerModal.classList.add('ativo');
});
btnFechar.addEventListener('click',()=>{ 
    containerModal.classList.remove('ativo')
});