let login = prompt('Введите логин', '');
const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
let allLogins = logins.includes(login);

function isLoginValid(login) {
  if (login.length >= 4 && login.length <= 16) {
    return true;
  } else { 
    return false;
  }
};

function isLoginUnique(allLogins) {

  if (allLogins === true) {
    return false;
  } else {
    return true;
  }
};

function addLogin(login, allLogins) { 
  if (isLoginValid(login) === true && isLoginUnique(allLogins) === true ) {
    logins.push(login);
    alert('Логин успешно добавлен!');
      } else if (isLoginUnique(allLogins) === false) {
            alert('Такой логин уже используется!');
      } else if (isLoginValid(login) === false) {
           alert('Ошибка! Логин должен быть от 4 до 16 символов');
      } else {
          alert("Опа!!!");
      }
}; 
addLogin(login, allLogins);
console.log(logins);