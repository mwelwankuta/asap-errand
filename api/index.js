const url = '';

async function createBudget(data) {
  return await fetch(url + '/create-budget.php', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

async function getMarkets() {
  return await fetch(url + '/markets');
}

async function getProducts(id) {
  return await fetch(url + '/products', {
    method: 'POST',
    body: JSON.stringify({ id }),
  });
}

async function login({ emailphone, password }) {
  return await fetch(url + '/login', {
    method: 'POST',
    body: JSON.stringify({ emailphone, password }),
  });
}

async function signup(data) {
  return await fetch(url + '/signup', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export { createBudget, getMarkets, getProducts, login, signup };
