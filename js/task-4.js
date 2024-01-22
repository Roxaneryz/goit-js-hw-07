
  const loginForm = document.querySelector('.login-form');
  loginForm.addEventListener('submit', function(event){
    event.preventDefault();
    const emailInput =this.elements.email;
    const passInput = this.elements.password;

    const email = emailInput.value.trim();
    const pass = passInput.value.trim();

    if(!email || !pass){
        alert ('All form fields must be filled in');
        return;
    }
const form = {
    email: email,
    password: pass
};
console.log(form);
this.reset();

  })
