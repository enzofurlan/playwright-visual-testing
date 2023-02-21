import Guy from "../img/cool-guy.jpeg";
import "../css/main.css";

export default function Welcome() {
  return (
    <>
      <div className="wrapper">
        <h1>Visual Testing Studies</h1>
        <p>This is a very simple app so we can practice visual testing. =)</p>
        <img src={Guy} alt="Cool Guy" width={300} height={300} />
      </div>
    </>
  );
}
