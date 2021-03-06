import "./App.scss";
import illustration from "../images/illustration-mockups.svg";
import logo from "../images/logo.svg";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="page">
          <div className="page__logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="main">
            <div className="page__image">
              <img src={illustration} alt="illustration" />
            </div>
            <div className="page__description">
              <h2 className="page__title">
                Build The Community Your Fans Will Love
              </h2>
              <p className="page__text">
                Huddle re-imagines the way we build communities. You have a
                voice, but so does your audience. Create connections with your
                users as you engage in genuine discussion.
              </p>
              <div className="page__btn">
                <a className="page__btn-register" href="#">
                  Register
                </a>
              </div>
            </div>
          </div>
          <ul className="page__social">
            <li>
              <a
                href="https://www.facebook.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i class="fa-brands fa-facebook-f fa"></i>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i class="fa-brands fa-twitter fa"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i class="fa-brands fa-instagram fa"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
