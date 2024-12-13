export const setUser = (user) => {
  localStorage.setItem('user', user);
}

export const getUser = () => {
  return localStorage.getItem('user');
}

export const removeUser = () => {
  localStorage.removeItem('user');
}