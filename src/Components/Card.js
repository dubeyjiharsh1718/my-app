import Button from "./Button";
 
export default function Card({ switchTheme, title, theme }) {
  return (
    <div className="card">
      <p>I am a {title} card</p>
      <Button switchTheme={switchTheme} theme={theme} />
    </div>
  );
}