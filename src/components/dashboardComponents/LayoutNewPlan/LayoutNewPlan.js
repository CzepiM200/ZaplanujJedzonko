import React from "react";
import "./_layoutNewPlan.scss";

class NewPlan extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className="newplan box">
        <div className="newplan__header">
          <h1>Nowy Plan</h1>
          <button className="newplan__btn-close">Zapisz i zamknij</button>
        </div>
        <div className="newplan__main-container">
          <div className="newplan__descriptions">
            <label className="newplan__description">
              <p>Nazwa Planu</p>
              <input type="text" placeholder="Nazwij swój plan" />
            </label>
            <label className="newplan__description">
              <p>Opis Planu</p>
              <textarea
                rows="5"
                col="1"
                placeholder="Dodaj krótki opis"
              ></textarea>
            </label>
          </div>
          <div className="newplan__number-of-week">
            <label className="newplan__description">
              <p>Numer tygodnia</p>
              <input type="number" min="1" placeholder=":)" />
            </label>
          </div>

          <div className="newplan__chooseMenu">
            <table className="newplan__table">
              <thead>
                <tr>
                  <th></th>
                  <th>śniadanie</th>
                  <th>drugie śniadanie</th>
                  <th>zupa</th>
                  <th>drugie danie</th>
                  <th>kolacja</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Poniedziałek</th>
                  <td>
                    <label for="selectName" />
                    <select placeholder="zapiekanka z ziemniakami" />
                  </td>

                  <td>
                    <label for="selectName"></label>
                    <select name="a" id="b">
                      <option value="drugie śniadanie">
                        jajecznica na bekonie
                      </option>
                      <option value="drugie śniadanie">omlet gruziński</option>
                      <option value="drugie śniadanie">
                        serek wiejski z karmelizowaną gruszką
                      </option>
                      <option value="drugie śniadanie">
                        a tu dupa ni ma nic
                      </option>
                    </select>
                  </td>
                  <td>
                    <label for="selectName" />
                    <select placeholder="zapiekanka z ziemniakami" />
                  </td>
                  <td>
                    <label for="selectName" />
                    <select placeholder="zapiekanka z ziemniakami" />
                  </td>
                  <td>
                    <label for="selectName" />
                    <select placeholder="zapiekanka z ziemniakami" />
                  </td>
                </tr>
                <tr>
                  <th>Wtorek</th>
                  <td>
                    <label for="selectName" />
                    <select placeholder="zapiekanka z ziemniakami" />
                  </td>
                  <td>
                    <label for="selectName" />
                    <select placeholder="zapiekanka z ziemniakami" />
                  </td>
                  <td>
                    <label for="selectName" />
                    <select placeholder="zapiekanka z ziemniakami" />
                  </td>
                  <td>
                    <label for="selectName" />
                    <select placeholder="zapiekanka z ziemniakami" />
                  </td>
                  <td>
                    <label for="selectName" />
                    <select placeholder="zapiekanka z ziemniakami" />
                  </td>
                </tr>
                <tr>
                  <th>Środa</th>
                  <td>
                    <label for="selectName" />
                    <select placeholder="zapiekanka z ziemniakami" />
                  </td>
                  <td>
                    <label for="selectName" />
                    <select placeholder="zapiekanka z ziemniakami" />
                  </td>
                  <td>
                    <label for="selectName" />
                    <select placeholder="zapiekanka z ziemniakami" />
                  </td>
                  <td>
                    <label for="selectName" />
                    <select placeholder="zapiekanka z ziemniakami" />
                  </td>
                  <td>
                    <label for="selectName" />
                    <select placeholder="zapiekanka z ziemniakami" />
                  </td>
                </tr>
                <tr>
                  <th>Czwartek</th>
                  <td>
                    <label for="selectName" />
                    <select placeholder="zapiekanka z ziemniakami" />
                  </td>
                  <td>
                    <label for="selectName" />
                    <select placeholder="zapiekanka z ziemniakami" />
                  </td>
                  <td>
                    <label for="selectName" />
                    <select placeholder="zapiekanka z ziemniakami" />
                  </td>
                  <td>
                    <label for="selectName" />
                    <select placeholder="zapiekanka z ziemniakami" />
                  </td>
                  <td>
                    <label for="selectName" />
                    <select placeholder="zapiekanka z ziemniakami" />
                  </td>
                </tr>
                <tr>
                  <th>Piątek</th>
                  <td>
                    <label for="selectName" />
                    <select placeholder="zapiekanka z ziemniakami" />
                  </td>
                  <td>
                    <label for="selectName" />
                    <select placeholder="zapiekanka z ziemniakami" />
                  </td>
                  <td>
                    <label for="selectName" />
                    <select placeholder="zapiekanka z ziemniakami" />
                  </td>
                  <td>
                    <label for="selectName" />
                    <select placeholder="zapiekanka z ziemniakami" />
                  </td>
                  <td>
                    <label for="selectName" />
                    <select placeholder="zapiekanka z ziemniakami" />
                  </td>
                </tr>
                <tr>
                  <th>Sobota</th>
                  <td>
                    <label for="selectName" />
                    <select placeholder="zapiekanka z ziemniakami" />
                  </td>
                  <td>
                    <label for="selectName" />
                    <select placeholder="zapiekanka z ziemniakami" />
                  </td>
                  <td>
                    <label for="selectName" />
                    <select placeholder="zapiekanka z ziemniakami" />
                  </td>
                  <td>
                    <label for="selectName" />
                    <select placeholder="zapiekanka z ziemniakami" />
                  </td>
                  <td>
                    <label for="selectName" />
                    <select placeholder="zapiekanka z ziemniakami" />
                  </td>
                </tr>
                <tr>
                  <th>Niedziela</th>
                  <td>
                    <label for="selectName" />
                    <select placeholder="zapiekanka z ziemniakami" />
                  </td>
                  <td>
                    <label for="selectName" />
                    <select placeholder="zapiekanka z ziemniakami" />
                  </td>
                  <td>
                    <label for="selectName" />
                    <select placeholder="zapiekanka z ziemniakami" />
                  </td>
                  <td>
                    <label for="selectName" />
                    <select placeholder="zapiekanka z ziemniakami" />
                  </td>
                  <td>
                    <label for="selectName" />
                    <select placeholder="zapiekanka z ziemniakami" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </form>
    );
  }
}

export default NewPlan;
