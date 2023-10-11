export const checkEmailValidity = (email: string): boolean => {
  return /^\S+@\S+\.\S+$/.test(email);
};
