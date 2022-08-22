import { get, getAll } from './get.js';

const name = get('#name');
const age = get('#age');
const mob = get('#mob');
const email = get('#email');
const submitBtn = get('#submit');

submitBtn.addEventListener('click', (e) => {
  //   console.log('Hello');
  const sendInfo = async () => {
    const jsonData = {
      name: name.value,
      age: age.value,
      mob: mob.value,
      email: email.value,
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
});
