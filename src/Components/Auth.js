// authService.js

let users = []; // Array to store user details

export const signUp = (userData) => {
  users.push(userData); // Add new user to the array
};

export const signIn = (email, password) => {
  const user = users.find(user => user.email === email && user.password === password);
  return user; // Return the user if found, otherwise return undefined
};
