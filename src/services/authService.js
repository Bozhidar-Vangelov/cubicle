async function register(username, password, repeatPassword) {
  console.log(username, password, repeatPassword);
}

const authService = {
  register,
};

module.exports = authService;
