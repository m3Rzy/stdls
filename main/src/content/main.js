import "../styles/main.css";
import logo from "../resources/logo.png";

function Main() {
  document.title = "Админ панель — myliss";
  return (
    <div className="container__wrapper">
      <div className="container__padding">
        <div className="logo__container">
          <img src={logo} className="logo__img" />
          <div className="logo__text">Админ панель</div>
          
          <div className="container__exit">
            <a href="#" className="button__exit">
              Выйти
            </a>
          </div>
        </div>
        <div className="hello__widget">Здравствуйте, name!</div>
        <div className="table__center">
          <table class="table">
            <thead>
              <tr>
                <th>Имя</th>
                <th>Фамилия</th>
                <th>Номер телефона</th>
                <th>Почта</th>
                <th>Ставка</th>
                <th>Класс</th>
                <th />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ильючес</td>
                <td>Орсичев</td>
                <td>
                  <a href="#" className="td__phone">
                    +79533658890
                  </a>
                </td>
                <td>gentledemeiz@gmail.com</td>
                <td>800 ₽/час</td>
                <td>5</td>
                <td>
                  <a href="#" className="button__edit">
                    i
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="button__container">
        <a href="/auth" className="button__add">
          Добавить ученика
        </a>
      </div>
    </div>
  );
}

export {Main};
