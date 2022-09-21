import { css, Global } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

/** @jsxImportSource @emotion/react */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Global
      styles={css`
        * {
          box-sizing: border-box;
        }
        :root {
          --black: #0e1115;
          --black-pure: 0, 0, 0;
          --blue: #6ea4f7;
          --blue-bright: 106, 54, 255;
          --cyan: 123, 168, 255;
          --magenta: 248, 50, 151;
          --yellow: 255, 239, 94;
          --link-color: 110, 164, 248;
          --primary-vertical-section-spacing: 200px;
          --pink: 249, 65, 197;
          --orange: 252, 174, 57;
          --green: 17, 197, 100;
          --purple: 156, 21, 219;
          --red: 230, 29, 91;
          --teal: 9, 186, 198;
          --light-blue: 17, 198, 255;
          --grey: #86878a;
          --font-family: 'Inter var', -apple-system, BlinkMacSystemFont,
            'Open Sans', sans-serif;
          --display-font-family: 'InterDisplay var', -apple-system,
            BlinkMacSystemFont, 'Open Sans', sans-serif;
          --gradient-discrete: radial-gradient(
            150px at 98% 42%,
            rgba(255, 255, 255, 0.25) 0,
            rgba(255, 255, 255, 0) 100%
          );
          --gradient1: linear-gradient(
            153deg,
            rgba(206, 78, 193, 1) 0%,
            rgba(207, 99, 123, 1) 52%,
            rgba(206, 189, 107, 1) 100%
          );
          --gradient2: linear-gradient(
            153deg,
            rgba(24, 120, 107, 1) 0%,
            rgba(72, 125, 173, 1) 50%,
            rgba(206, 183, 107, 1) 100%
          );
          --gradient-text1: linear-gradient(
            163deg,
            rgba(192, 31, 134, 1) 0%,
            rgba(204, 47, 122, 1) 35%,
            rgba(244, 97, 83, 1) 56%,
            rgba(224, 239, 167, 1) 100%
          );
          --font-size1: 1rem;
          --font-size2: 1.4rem;
          --font-size3: 2rem;
          --highlight-color1: #fe4a49;
          --highlight-color2: #2ab7ca;
          --highlight-color3: #fed766;
          --highlight-color4: #548687;
          --highlight-color5: #473335;
        }
        *,
        *::before,
        *::after {
          box-sizing: border-box;
          font-weight: 500;
        }

        h4 {
          text-transform: uppercase;
          color: #fefefe;
          letter-spacing: 0.2rem;
        }

        .giant-h2 {
          font-size: 100px;
          font-family: var(--display-font-family);
          font-weight: 900;
          text-align: center;
          background: var(--gradient-text1);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin: 23px 0 23px 0;
          line-height: 1.2em;

          & .force-left-align {
            text-align: left;
            align-items: left;
          }
        }

        .big-paragraph {
          font-weight: 600;
          line-height: 1.4em;
          font-size: 24px;
          max-width: 750px;
        }

        .force-left-align {
          text-align: left;
          align-items: left;
        }

        body {
          margin: 0px;
          background-color: var(--black);
          color: white;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          font-size: 16px;
        }
      `}
    />
    <App />
  </React.StrictMode>,
);

reportWebVitals();
