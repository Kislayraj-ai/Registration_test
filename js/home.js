import { get, getAll } from './get.js';

/* ----- logout action-------- */

const logoutBtn = get('#logout');
const user_name = get('#user_name');

const success = localStorage.getItem('success');

// console.log(success);
if (parseInt(success) == 1) {
  const login_name = JSON.parse(localStorage.getItem('data'));
  user_name.textContent = login_name.name;
}

logoutBtn.addEventListener('click', () => {
  window.location.replace('index.php');
});
