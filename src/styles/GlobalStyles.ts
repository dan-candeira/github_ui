import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

:root {
  --primary: #f4f7f9;
  --black: #1b1f23;
  --gray:#586069;
  --light-gray: #6a737d;
  --dark-gray: #24292e;
  --orange: #f9826c;

  --logo: #fff;
  --header: #24292e;
  --username: #666;
  --search: rgba(255, 255, 255, .13);
  --search-placeholder: hsla(0,0%, 100%,.75);
  --icon: #6a737d;
  --link: #0366d6;
  --border: #e1e4e8;
  --ticker: rgba(209,213,218,.5);
  --max-width: 66rem;

  --calendar-scale-0: #ebedf0;
  --calendar-scale-1: #9be9a8;
  --calendar-scale-2: #3fc463;
  --calendar-scale-3: #30a14e;
  --calendar-scale-4: #216e3a;
  --javascript: #f1e05a;
  --typescript: #2b7489;
  --other-language: #8257e5;
}

*, 
*::before, 
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
  font-family: inherit;
}

html {
  min-height: 100%;
}

body {
  box-sizing: border-box;
  background: var(--primary);
  font-family: 'Poppins', sans-serif;
}

*, button, input {
  background: none;
  border: 0;
  color: var(--color-black);
}

ul {
  list-style: none;
}

`;
