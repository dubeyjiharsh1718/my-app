export default function Button({ switchTheme, theme }) {
    return <button onClick={switchTheme}>{theme}!</button>;
  }