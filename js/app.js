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
      console.log(data);
      const user_login_name = data.name;
      const user_login_password = data.password;

      // console.log(user_login_name);
      // console.log(user_login_password);

      if (
        login_name.value === user_login_name &&
        pass.value === user_login_password
      ) {
        // console.log('Valid');
        const passError = get('.login-passwrd');
        const nameError = get('.login-name');
        if (passError.classList.contains('error'))
          passError.classList.remove('error');
        if (nameError.classList.contains('error'))
          nameError.classList.remove('error');
        window.location.replace('home.php');
        const loginValidation = (field, select, value) => {
          if (field.value != value) {
            const input = get(select);
            input.classList.add('error');
          }
        };
        loginValidation(pass, '.login-passwrd', user_login_name);
        loginValidation(login_name, '.login-name', user_login_password);
      } else {
        console.log('Invalid');
      }
    };

    get_login_details();
  });
});
