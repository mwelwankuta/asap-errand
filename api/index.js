const url = 'http://mybudgetapplication.com/App';

async function createBudget(data) {
  return await fetch(url + '/create-budget.php', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

async function getMarkets() {
  return await fetch(url + '/markets.php');
}

async function getProducts(id) {
  return await fetch(url + '/products', {
    method: 'POST',
    body: JSON.stringify({ id }),
  });
}

// login
async function login({ emailphone, password }) {
  return await fetch(url + '/login.php', {
    method: 'POST',
    body: JSON.stringify({ email: emailphone, password }),
  });
}

// create account
async function signup(data) {
  return await fetch(url + '/create-account.php', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export { createBudget, getMarkets, getProducts, login, signup };
