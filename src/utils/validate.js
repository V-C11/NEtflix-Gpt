export const CheckValidateData = (email, password, name) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );

  const isPasswordValid =
    /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);

  const isNameValid = /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/.test(name)

  if (!isEmailValid) return "Email is not Valid!!!!";
  if (!isPasswordValid) return "Password is not Valid!!!!";
  if (!isNameValid) return "Name is not Valid!!!!";

  return null;
};
