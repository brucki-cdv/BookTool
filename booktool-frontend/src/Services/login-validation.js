export const checkIfEmailIsValid = (email) => {
  if (!email) {
    return "This field is required";
  }

  if (email.length < 8) {
    return "Email must be at least 8 characters";
  }

  if (!(email.includes("@") || email.includes("."))) {
    return "Email has to contain @ and .";
  }

  return undefined;
};

export const checkIfPasswordIsValid = (password) => {
  if (!password) {
    return "This field is required";
  }

  if (password.length < 8) {
    return "Password must be at least 8 characters";
  }

  return undefined;
};
