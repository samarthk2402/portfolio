import "./App.css";
import Project from "./Components/Project";

function App() {
  return (
    <>
      <div className="App">
        <div className="titleContainer">
          <h1 className="title">Samarth Kumar</h1>
          <h1>Yr10 KEFW student</h1>
          <p>
            I go to King Edwards VI Five Ways Grammar School and my favourite
            subjects are maths and computing. I enjoy programming a lot so I
            have built this website to show some of the projects I have made
            using react.
          </p>
        </div>

        <div className="projectContainer">
          <div className="projectsList">
            <Project
              imgSrc={"./wordleClone.png"}
              imgAlt={"Wordle clone screenshot"}
              projectSrc={"https://samarthk2402.github.io/WordleClone/"}
            />
            <Project
              imgSrc={"./quoteGenerator.png"}
              imgAlt={"Quote Generator screenshot"}
              projectSrc={"https://samarthk2402.github.io/quote-generator/"}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
