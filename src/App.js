/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const navBarStyles = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 44px 32px 44px;
  transition: all 0.5s ease;

  .logo-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  nav {
    display: flex;
    gap: 8px;
  }

  button:hover {
    background: var(--gradient-discrete);
  }

  button:last-child {
    background: var(--gradient1);

    &:hover {
      background: var(--gradient2);
    }
  }
`;

const heroSectionStyles = css`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;

  h1 {
    font-size: 100px;
    font-family: var(--display-font-family);
    font-weight: 900;
    text-align: center;
    background: var(--gradient-text1);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 23px 0 23px 0;
    line-height: 1em;
  }

  @media (max-width: 1000px) {
    h1 {
      font-size: 10vw;
    }
  }

  @media (max-width: 400px) {
    h1 {
      font-size: 40px;
    }
  }

  h2 {
    font-size: var(--font-size2);
    font-weight: bold;
    max-width: 700px;
    text-align: center;
    margin-bottom: 40px;
  }

  .more-info-wrap {
    margin-top: 40px;
    max-width: 600px;
    text-align: center;
  }
  .more-info-wrap > a {
    color: var(--blue);
  }
`;

const buttonStyles = css`
  text-decoration: none;
  font-size: 17px;
  font-weight: 600;
  color: white;
  border: solid 0px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0);
  cursor: pointer;

  div {
    padding: 10px 20px 10px 20px;
    border: solid 0px;
    border-radius: 5px;
    cursor: pointer;
    transition: all 1.5s ease;

    &:hover {
      background: var(--gradient-discrete);
    }
  }
  .highlight {
    background: var(--gradient1);
    transition: all 1s ease-out;
    &:hover {
      background: var(--gradient2);
      transition: all 1s ease-out;
    }
  }
`;

function App() {
  return (
    <div>
      <div css={navBarStyles}>
        <div>
          <a className="logo-wrap" href="index.html">
            <img src={require('./logo.png')} alt="Clover Logo" />
            <img src={require('./logo-text.png')} alt="Clover logo text" />
          </a>
        </div>
        <nav>
          <a css={buttonStyles}>
            <div>Pricing</div>
          </a>
          <a css={buttonStyles}>
            <div>Log in</div>
          </a>
          <a css={buttonStyles}>
            <div className="highlight">Get Started</div>
          </a>
        </nav>
      </div>
      <main>
        <section css={heroSectionStyles}>
          <h1>
            Think better.
            <br />
            Achieve more.
          </h1>
          <h2>
            Clover is a digital notebook that blends notes, tasks, whiteboards,
            and a daily planner into one streamlined app.
          </h2>
          <a css={buttonStyles}>
            <div className="highlight">Get started for Free</div>
          </a>
          <div className="more-info-wrap">
            <a>Product Hunt's Tool of the Year (Design).</a>
            <p>Available on Mac, Windows, iPad, iPhone, and the web.</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
