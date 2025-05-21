const formData = {
    password: ''
};

const passwordInput = document.getElementById('passwordInput');
const togglePassword = document.getElementById('togglePassword');
const passwordForm = document.getElementById('passwordForm');
const eyeIcon = togglePassword.querySelector('i');


togglePassword.addEventListener('click', () => {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    
    eyeIcon.classList.toggle('fa-eye');
    eyeIcon.classList.toggle('fa-eye-slash');
});


passwordInput.addEventListener('input', (e) => {
    formData.password = e.target.value;
});


passwordForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Entered password:', formData.password);
}); 