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
const user_login = get('#user_login');

const loginBtn = get('#login');
const signBtn = get('#signin');

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
      // console.log(data);
      if (data == 'success') {
        alert('Sign Up Completed');
        name.value = '';
        age.value = '';
        mob.value = '';
        email.value = '';
        passwrd.value = '';
      }
    };

    sendInfo();
  }

  // login_form.classList.remove('hide');
  // reg_form.classList.remove('show');
});

/* selection  for login form */

//* signin button fucntion
signBtn.addEventListener('click', () => {
  login_form.classList.add('hide');
  reg_form.classList.add('show');
});

loginBtn.addEventListener('click', () => {
  const pass = get('#pass');
  const login_name = get('#login_name');
  const json_data = {
    name: login_name.value,
    pass: pass.value,
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
    // console.log(data);
    if (data.success == 1) {
      window.location.replace('home.php');
    } else {
      alert('Invalid User name or password');
    }
  };

  get_login_details();
});

user_login.addEventListener('click', () => {
  login_form.classList.remove('hide');
  reg_form.classList.remove('show');
});
