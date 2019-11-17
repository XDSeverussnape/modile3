let login = prompt('Введите логин', '');
const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];






function isLoginValid() {
  if (login.length >4 && login.length < 16) {
    return true;
  } else { 
    return false;
  }
};


function isLoginUnique() {
  let allLogins = logins.includes(login);
  if (allLogins === true) {
    return false;
  } else {
    return true;
  }
};



function addLogin() { 
  if (isLoginValid() === true && isLoginUnique() === true ) {
    logins.push(login);
    alert('Логин успешно добавлен!');
      } else if (isLoginUnique() === false) {
            alert('Такой логин уже используется!');
      } else if (isLoginValid() === false) {
           alert('Ошибка! Логин должен быть от 4 до 16 символов');
      } else {
          alert("Опа!!!");
      }
}; 
addLogin();
console.log(logins);