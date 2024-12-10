import "./output.css";

function App() {
  return (
    <div className="bg-black flex flex-col h-max font-pixelated">
      <div className="text-white flex justify-center mb-8 text-[150px] ">
        Project Deployements
      </div>
      <div className="w-full flex justify-center px-8 pb-8">
        <div className="flex justify-center flex-wrap  w-full">
          <LeftDiv
            Source={"/static/images/todo_fullstack1.png"}
            Title={"To-Do Applicatoin"}
            Description={
              "This is a simple To-Do app where users can create tasks, mark them as done, and delete them."
            }
            github_link={
              "https://github.com/Sandstorm831/learning-backend/tree/main/toDoApp"
            }
            live_demo_link={"https://portfoliodeployements.vercel.app/todoapp"}
          />

          <RightDiv
            Source={"/static/images/recipe_app2.png"}
            Title={"Recipe Web Applicatoin"}
            Description={
              "Recipe App is a web application that offers a wide variety of recipes for different dishes. Simply enter an ingredient, and the app will display recipes that include it. You can then view detailed recipe instructions, save your favorites for later, and access all your saved recipes on the Favorites page."
            }
            github_link={
              "https://github.com/Sandstorm831/Learning-react/tree/main/recipie-app"
            }
            live_demo_link={
              "https://portfoliodeployements.vercel.app/recipeapp"
            }
          />
          <LeftDiv
            Source={"/static/images/weatherApp2.png"}
            Title={"Weather Web Application"}
            Description={
              "Weather App is a user-friendly web application that provides real-time weather information for any city worldwide. To enhance performance, I implemented a debouncer and an API aborter to handle requests efficiently. Additionally, I included a sleek loading animation to improve the overall user experience."
            }
            github_link={
              "https://github.com/Sandstorm831/Learning-react/tree/main/weather-app"
            }
            live_demo_link={
              "https://portfoliodeployements.vercel.app/weatherapp"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default App;

function LeftDiv({ Source, Title, Description, github_link, live_demo_link }) {
  return (
    <div className="flex justify-start w-full mt-8 font-pixelated">
      <div className="flex max-xl:flex-col max-xl:w-full xl:w-11/12 justify-start border-r-8 border-t-[#EAF2EF] border-r-[#EAF2EF] rounded-lg bg-[#EAF2EF] text-[#212121]">
        <div className="max-xl:w-full xl:w-4/5">
          <img
            src={Source}
            alt="LeftImage"
            className="rounded-lg shadow-lg shadow-slate-700 w-full"
          />
        </div>
        <div className="flex flex-col xl:w-1/5 max-xl:my-8 xl:my-1 max-xl:mx-24 xl:mx-5">
          <div className="text-5xl mb-5 text-[#104f55] max-xl:flex max-xl:justify-center ">{`{ ${Title} }`}</div>
          <div className="text-2xl max-xl:flex max-xl:justify-center">
            {Description}
          </div>
          <div className="flex flex-col justify-end w-full h-full mt-5">
            <div className="w-full h-max flex justify-center">
              <a
                href={github_link}
                className="text-[#212121] mx-2 mb-2 text-3xl w-36 h-16 rounded-lg shadow-md flex flex-col justify-center shadow-[#104F55]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex justify-center">GitHub Repo</div>
              </a>
              <a
                href={live_demo_link}
                className="text-[#212121] mx-2 mb-2 text-3xl w-36 h-16 rounded-lg shadow-md flex flex-col justify-center shadow-[#104F55]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex justify-center">Live Demo</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RightDiv({ Source, Title, Description, github_link, live_demo_link }) {
  return (
    <div className="flex justify-end w-full mt-8 font-pixelated">
      <div className="flex max-xl:flex-col max-xl:w-full xl:w-11/12 justify-end w-11/12 bg-[#E6DB74] border-[#E6DB74] border-l-8 border-l-[#E6DB74] rounded-lg ">
        <div className="flex flex-col xl:w-1/5 max-xl:my-8 xl:my-1 max-xl:mx-24 xl:mx-5">
          <div className="text-5xl mb-5 text-[#26547c] max-xl:flex max-xl:justify-center ">{`{ ${Title} }`}</div>
          <div className="text-2xl max-xl:flex max-xl:justify-center">
            {Description}
          </div>
          <div className="flex flex-col justify-end w-full h-full mt-5">
            <div className="w-full h-max flex justify-center">
              <a
                href={github_link}
                className="text-[#212121] mx-2 mb-2 text-3xl w-36 h-16 rounded-lg shadow-md flex flex-col justify-center shadow-[#104F55]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex justify-center">GitHub Repo</div>
              </a>
              <a
                href={live_demo_link}
                className="text-[#212121] mx-2 mb-2 text-3xl w-36 h-16 rounded-lg shadow-md flex flex-col justify-center shadow-[#104F55]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex justify-center">Live Demo</div>
              </a>
            </div>
          </div>
        </div>
        <div className="max-xl:w-full xl:w-4/5">
          <img
            src={Source}
            alt="RightImage"
            className="rounded-lg shadow-lg shadow-slate-700 w-full"
          />
        </div>
      </div>
    </div>
  );
}
