import { useNavigate } from "react-router";
import "./output.css";

function App() {
  const github_links = [
    "https://github.com/Sandstorm831/learning-backend/tree/main/toDoApp",
    "https://github.com/Sandstorm831/Learning-react/tree/main/recipie-app",
    "https://github.com/Sandstorm831/Learning-react/tree/main/weather-app",
    "https://github.com/Sandstorm831/Learning-react/tree/main/learning",
    "https://github.com/Sandstorm831/Learning-react/tree/main/shopping_cart",
    "https://github.com/Sandstorm831/Learning-react/tree/main/coalition_project",
    "https://github.com/Sandstorm831/Learning-react/tree/main/businessCards",
    "https://github.com/Sandstorm831/Learning-react/tree/main/Tic_Tac_Toe",
  ];
  const live_demo_links = [
    "/todoapp",
    "/recipeapp",
    "/weatherapp",
    "/learningreact",
    "/shoppingcart",
    "/coalitionproject",
    "/businesscardapp",
    "/tictactoe",
  ];
  const sources = [
    "/static/images/todo_fullstack1.png",
    "/static/images/recipe_app2.png",
    "/static/images/weatherApp2.png",
    "static/images/learningReact.png",
    "static/images/shoppingCart.png",
    "/static/images/coalitionProject.png",
    "/static/images/skullCard.png",
    "/static/images/tictactoe.png",
  ];
  const titles = [
    "To-Do Applicatoin",
    "Recipe Web Applicatoin",
    "Weather Web Application",
    "Custom React Components",
    "Shopping Web Application",
    "Coalition CSS Project",
    "Business Card Application",
    "Tic-Tac-Toe Game",
  ];
  const descriptions = [
    "This is a simple To-Do app where users can create tasks, mark them as done, and delete them.",
    "Recipe App is a web application that offers a wide variety of recipes for different dishes. Simply enter an ingredient, and the app will display recipes that include it. You can then view detailed recipe instructions, save your favorites for later, and access all your saved recipes on the Favorites page.",
    "Weather App is a user-friendly web application that provides real-time weather information for any city worldwide. To enhance performance, I implemented a debouncer and an API aborter to handle requests efficiently. Additionally, I included a sleek loading animation to improve the overall user experience.",
    "These projects are my initial React learning journey, featuring around 18 custom components inspired by common website elements like scroll-indicators, accordions, image-sliders and more. Each project is minimally styled but fully functional with all necessary features and interactivity.",
    "This a minimal shopping cart, here you can find the products, include them in your cart. All the products you have included in cart will be shown in the Cart page and the total price will also be displayed there. This project uses Recoil library for state management instead of Context API.",
    "This is a CSS-intensive project that I completed as an assignment for a company called Coalition. The task was to precisely replicate a given webpage, and this is the final result. I used ChartJS for the graph and TailwindCSS for styling. Functionality was not included, as it was not required for the assignment.",
    "This is my first project in the direction of learning serious CSS and styling skills. In this project, each card have an embedded animation. On hovering on any of card, the title of card moves up, and a description about the card holder and it's social media handles appears in smooth transition, and disappears smoothly on hovering out.",
    "Made a simple tic-tac-toe game while learning React, this was my first project in React and made it by following the instructions from react.dev website's learning section. I made two versions, first one was my original, but was very verbose, second was of the website's which was short and easy to understand.",
  ];
  let counter = 0;
  const divArray = [];
  for (let i = 0; i < titles.length; i++) {
    if (counter % 2 === 0) {
      divArray.push(
        <LeftDiv
          Title={titles[i]}
          Source={sources[i]}
          Description={descriptions[i]}
          github_link={github_links[i]}
          live_demo_link={live_demo_links[i]}
        />
      );
    } else {
      divArray.push(
        <RightDiv
          Title={titles[i]}
          Source={sources[i]}
          Description={descriptions[i]}
          github_link={github_links[i]}
          live_demo_link={live_demo_links[i]}
        />
      );
    }
    counter += 1;
  }
  return (
    <div className="bg-black flex flex-col h-max font-pixelated">
      <div className="text-white flex justify-center mb-8 text-[150px] ">
        Project Deployements
      </div>
      <div className="w-full flex justify-center px-8 pb-8">
        <div className="flex justify-center flex-wrap  w-full">
          {divArray && divArray.length ? divArray.map((elem) => elem) : null}
        </div>
      </div>
    </div>
  );
}

export default App;

function LeftDiv({ Source, Title, Description, github_link, live_demo_link }) {
  const navigate = useNavigate();
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
              <div
                onClick={() => navigate(live_demo_link)}
                className="text-[#212121] mx-2 mb-2 text-3xl w-36 h-16 rounded-lg shadow-md flex flex-col justify-center shadow-[#104F55] cursor-pointer"
              >
                <div className="flex justify-center">Live Demo</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RightDiv({ Source, Title, Description, github_link, live_demo_link }) {
  const navigate = useNavigate();

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
              <div
                onClick={() => navigate(live_demo_link)}
                className="text-[#212121] mx-2 mb-2 text-3xl w-36 h-16 rounded-lg shadow-md flex flex-col justify-center shadow-[#104F55] cursor-pointer"
              >
                <div className="flex justify-center">Live Demo</div>
              </div>
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
