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
            using react. Click on the projects to see them in action!
          </p>
        </div>

        <div className="projectContainer">
          <div className="projectsList">
            <Project
              imgSrc={"./wordleClone.png"}
              imgAlt={"Wordle clone screenshot"}
              projectSrc={"https://samarthk2402.github.io/WordleClone/"}
              projectInfo={"This wordle clone was my first react project and it taught me a lot of the basic hooks such as useState and useEffect. I also played around with some css animations which I hadn't done before."}
            />
            <Project
              imgSrc={"./quoteGenerator.png"}
              imgAlt={"Quote Generator screenshot"}
              projectSrc={"https://samarthk2402.github.io/quote-generator/"}
              projectInfo={"I made this quote generator as a very small project so I could better understand how to make API requests. It only took me a couple of hours to make but I feel I learnt a lot from it."}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
