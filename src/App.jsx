import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="wrapper">
          <div className="page__logo">
            <img src="../images/logo.svg" alt="logo" />
          </div>
          <div className="page__image">
            <img src="../images/illustration-mockups.svg" alt="illustration" />
          </div>
          <h2 className="page__title">
            Build The Community Your Fans Will Love
          </h2>
          <p className="page__text">
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <div className="page__btn">
            <a className="page__btn-register" href="#">
              Register
            </a>
          </div>
          <ul className="page__social">
            <li>
              <a
                href="https://www.facebook.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i class="fa-brands fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i class="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i class="fa-brands fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
