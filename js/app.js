import { get, getAll } from './get.js';

const name = get('#name');
const age = get('#age');
const mob = get('#mob');
const email = get('#email');
const submitBtn = get('#submit');
const passwrd = get('#passwrd');

/*===form selection ====*/
const reg_form = get('.reg-form');
const login_form = get('.login-form');

submitBtn.addEventListener('click', (e) => {
  //   console.log('Hello');
  const sendInfo = async () => {
    const jsonData = {
      name: name.value,
      age: age.value,
      mob: mob.value,
      email: email.value,
      passwrd: passwrd.value,
    };
    const response = await fetch('./php_data/form_data.php', {
      method: 'POST',
      body: JSON.stringify(jsonData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    console.log(data);
  };

  sendInfo();
  login_form.classList.remove('hide');
  reg_form.classList.remove('show');
});
