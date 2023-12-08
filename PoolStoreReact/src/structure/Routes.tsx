import App from "./../App";
import { /*Navigate,*/ createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    /* children: [
        { path: "/", element: <HomePage /> },
        { path: "/about", element: <AboutPage /> },
        { path: "/contact", element: <ContactPage /> },
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },
        { path: "/game", element: <QuizBowlHooks /> },
        { path: "/lobby", element: <Lobby /> },
        { path: "/createGame", element: <CreateGame /> },
        { path: "/winner", element: <Winner /> },
        { path: "/loser", element: <Loser /> },
        { path: "/server-error", element: <ServerError /> },
        { path: "/not-found", element: <NotFound /> },
  
        { path: "/register", element: <Register /> },
        { path: "*", element: <Navigate replace to="/not-found" /> },
      ],*/
  },
]);
