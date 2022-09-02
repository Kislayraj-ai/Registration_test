import { get, getAll } from './get.js';

//*==== input field selection =====*//
const name = get('#name');
const age = get('#age');
const mob = get('#mob');
const email = get('#email');
const submitBtn = get('#submit');
const passwrd = get('#passwrd');

//*=== form selection ====*//
const reg_form = get('.reg-form');
const login_form = get('.login-form');

const loginBtn = get('#login');
const backBtn = get('#back');

submitBtn.addEventListener('click', (e) => {
  //   console.log('Hello');
  const nameVal = name.value;
  const ageVal = age.value;
  const mobVal = mob.value;
  const emailVal = email.value;
  const passVal = passwrd.value;
  if (
    nameVal != ' ' &&
    (ageVal != ' ') & (mobVal != ' ') &&
    emailVal != ' ' &&
    passVal != ' '
  ) {
    const sendInfo = async () => {
      const jsonData = {
        name: nameVal,
        age: ageVal,
        mob: mobVal,
        email: emailVal,
        passwrd: passVal,
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
  }

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
    const json_data = {
      name: login_name.value,
    };
    const get_login_details = async () => {
      const response = await fetch('./php_data/get_data.php', {
        method: 'POST',
        body: JSON.stringify(json_data),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();

      if (data.success == 1) {
        window.location.replace('home.php');
      } else {
        alert('Invalid User name or password');
      }
    };

    get_login_details();
  });
});
