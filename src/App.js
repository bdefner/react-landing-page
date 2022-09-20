/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const containerWrapStyle = css`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    max-width: 1100px;
    padding-left: 50px;
    padding-right: 50px;
  }

  .wide-container {
    max-width: 1280px;
  }

  .section-padding {
    padding-top: 100px;
    padding-bottom: 100px;
  }
  .section-center {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`;

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

const testStyle = css`
  padding: 100px;
  background-color: white;
  min-height: 100vh;
`;

const heroSectionStyles = css`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
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
    & > a {
      color: var(--blue);
    }
    &:last-child {
      color: #9f9fa1;
    }
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

const showRoomSectionStyles = css`
  width: 100%;
  display: flex;
  align-items: center;

  div > img {
    width: 100%;
    height: 100%;
  }

  div:first-child {
    max-width: 70vw;
  }

  #showRoomTabletWrap {
    border-radius: 8px;
    overflow: hidden;
    margin-left: 50px;
  }
  #showRoomPhoneWrap {
    height: 600px;
    position: relative;
    right: 120px;
    z-index: 2;
  }
`;

const cardWrap = css`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  margin-bottom: 60px;

  .card {
    width: 33%;
    min-width: 300px;
    padding-right: 80px;
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 900px) {
    .card {
      width: 50%;
    }
  }

  .icon {
    width: 40px;
    height: 40px;
  }

  h4 {
    font-size: 32px;
    font-weight: 900;
    text-transform: none;
    letter-spacing: 0em;
    margin-top: 8px;
    margin-bottom: 8px;
  }

  p {
    color: var(--grey);
    line-height: 1.4em;
    font-weight: 600;
    font-size: 17px;
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
        <section css={containerWrapStyle}>
          <div className="wide-container" css={showRoomSectionStyles}>
            <div id="showRoomTabletWrap">
              <img src={require('./desktop-light-1.png')} alt="" />
            </div>
            <div id="showRoomPhoneWrap">
              <img src={require('./phone-daily.png')} alt="" />
            </div>
          </div>
        </section>
        <section css={containerWrapStyle}>
          <div className="container section-padding section-center">
            <h4>Expressive Spatial Note-taking</h4>
            <h2 className="giant-h2">
              Note-taking meets <br />
              whiteboarding.
            </h2>
            <p className="big-paragraph">
              Traditional text docs are great for <em>writing</em>, but{' '}
              <em>thinking </em>
              requires something more. Introducing the Surface – a new type of
              document that combines the power of a text editor with the
              flexibility of a whiteboard for better brainstorming, enhanced
              memory, intuitive organization, and workflows you simply can’t
              achieve elsewhere.
            </p>
          </div>
        </section>
        <section css={containerWrapStyle}>
          <div className="container section-padding">
            <div css={cardWrap}>
              <div className="card">
                <img className="icon" src={require('./icon1.png')} alt="" />
                <h4>Infinite Canvas</h4>
                <p>
                  The power of a text editor with the flexibility of a freeform
                  design tool. Clover combines the best of productivity and
                  creativity tools.
                </p>
              </div>
              <div className="card">
                <img className="icon" src={require('./icon2.png')} alt="" />
                <h4>Infinite Canvas</h4>
                <p>
                  Markdown formatting, code blocks with syntax highlighting,
                  inline task features, slash inserter, dynamic references, and
                  much more.
                </p>
              </div>
              <div className="card">
                <img className="icon" src={require('./icon3.png')} alt="" />
                <h4>Infinite Canvas</h4>
                <p>
                  Add wireframes, notations, and sketches right on top of your
                  notes. Create diagrams and flow maps with Smart Lines, which
                  attach to objects.
                </p>
              </div>
            </div>
            <div className="flex-row" css={cardWrap}>
              <div className="card">
                <img className="icon" src={require('./icon4.png')} alt="" />
                <h4>Infinite Canvas</h4>
                <p>
                  Draw frames around important areas of your Surface. Hit play
                  to present your frames as a slideshow.
                </p>
              </div>
              <div className="card">
                <img className="icon" src={require('./icon5.png')} alt="" />
                <h4>Infinite Canvas</h4>
                <p>
                  Clover is built on web tech, so you can embed and interact
                  with just about anything you find on the internet: YouTube,
                  Figma, SoundCloud, and more.
                </p>
              </div>
              <div className="card">
                <img className="icon" src={require('./icon6.png')} alt="" />
                <h4>Infinite Canvas</h4>
                <p>
                  Network your ideas together. Link to other pages or deep link
                  to specific blocks and Clover will automatically add backlinks
                  to connect the pages.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section css={containerWrapStyle}>
          <div className="container section-padding">
            <div className="quote-wrap">
              <p>
                I can’t tell you what an impact this app has made on my creative
                life. Everything I do starts in Clover now.
              </p>
              <div>
                <img src={require('./neilprice.jpeg')} alt="" />
                <div>Neil Price</div>
                <div>Illustrator – Harry Potter, Dreamworks, etc</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
