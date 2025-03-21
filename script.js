document.addEventListener('DOMContentLoaded', () => {
    const avatars = document.querySelectorAll('.avatar-wrapper');
    
    avatars.forEach(avatar => {
        avatar.addEventListener('click', (e) => {
            e.preventDefault();
            avatar.classList.add('click-animation');
            
            setTimeout(() => {
                window.location.href = avatar.parentElement.href;
            }, 400);
        });
    });
});
