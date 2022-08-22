export const get = (select) => {
  const element = document.querySelector(select);
  if (element) return element;
  throw new Error(`Please select ${element} selector`);
};

export const getAll = (select) => {
  const element = document.querySelectorAll(select);
  if (element) return element;
  throw new Error(`Please select ${element} selector`);
};
