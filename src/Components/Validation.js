const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

export const validateEmail = (email) => {
  if (!emailRegex.test(email)) {
    return "Please enter a valid email address";
  }
  return "";
};

export const validatePassword = (password) => {
  if (password.length < 8 || !/\d/.test(password) || !/[a-zA-Z]/.test(password)) {
    return "Password must be at least 8 characters long and include at least one letter and one number";
  }
  return "";
};

export const validateConfirmPassword = (password, confirmPassword) => {
  if (password !== confirmPassword) {
    return "Passwords do not match";
  }
  return "";
};
