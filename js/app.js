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
const backBtn = get('#back');
const loginBtn = get('#login');

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
    // console.log(data);
    localStorage.setItem('data', JSON.stringify(data));
  };

  sendInfo();
  login_form.classList.remove('hide');
  reg_form.classList.remove('show');
  backBtn.addEventListener('click', () => {
    login_form.classList.add('hide');
    reg_form.classList.add('show');
  });

  /* selection  for login form */
  loginBtn.addEventListener('click', () => {
    const pass = get('#pass');
    const login_name = get('#login_name');
    const data_pass = JSON.parse(localStorage.getItem('data'));
    const passwrd = data_pass.passwrd;
    const name = data_pass.name;
    console.log(passwrd);
    if (pass.value == passwrd && login_name.value == name) {
      window.location.replace('home.php');
    } else {
      console.log('Invalid');
    }
  });
});
