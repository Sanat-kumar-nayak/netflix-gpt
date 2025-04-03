export const checkValidate = (email, password) => {
  const checkEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const checkPwdRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(
      password
    );

  if (!checkEmailRegex) return "Email is not Valid";
  if (!checkPwdRegex) return "Password is not Valid";

  return null;
};
