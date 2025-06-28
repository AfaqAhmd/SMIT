// Declare the users array BEFORE using it
let users = [];

function signup(name, email, password) {
  // Check if email already exists
  for (let i = 0; i < users.length; i++) {
  if (users[i].email === email) {
   return console.log("❌ Email already exists");
  }
}


  // Add new user
  const newUser = {
    name: name,
    email: email,
    password: password // In real apps, NEVER store plain passwords!
  };

  users.push(newUser);
  console.log("✅ Signup successful!");
}

// Test signup
signup("afaq", "afaq@yahoo.com", "1234");
signup("afaq", "aafaq@yahoo.com", "1234");
signup("afaq", "aafaq@yahoo.com", "1234");
signup("afaq", "aafaq@yahoo.com", "1234");
console.log(users);
