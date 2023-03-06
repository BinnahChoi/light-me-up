export const controller = () => {
    const date = document.querySelector('.date');
    date.innerHTML = new Date().toLocaleDateString();
}

