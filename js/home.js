import { get, getAll } from './get.js';

/* ----- logout action-------- */

const logoutBtn = get('#logout');
logoutBtn.addEventListener('click', () => {
  window.location.replace('index.php');
});
