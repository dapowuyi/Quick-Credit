let modal = document.querySelector('.modal');
let verifyUser = document.querySelector('.verifyUser');
let closeBtn = document.querySelector('.closeBtn');
let modal = document.querySelector('.modal');
let verifyUser = document.querySelector('.verifyUser');
let closeBtn = document.querySelector('.closeBtn');



const displayModal = () =>
{
    modal.style.display = 'block';
}


verifyUser.addEventListener('click', () => displayModal);

const closeModal = () =>
{
    modal.style.display = 'none';
}

closeBtn.addEventListener('click', () => closeModal);
const outsideClick = (e) =>
{
    if(e.target === modal)
    {
        closeModal();
    }
}

window.addEventListener('click',() => outsideClick);
