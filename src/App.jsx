import { Routes, Route } from "react-router-dom";
import "normalize.css";
import "./index.css";
import AllGoals from "./views/AllGoals";
import Wrapper from "./components/Wrapper/Wrapper";
import Main from "./views/Main";
import Profile from "./views/Profile";
import AddGoal from "./views/AddGoal";
import Goal from "./views/Goal";
import NoFound from "./views/NoFound";

function App() {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/goals" element={<AllGoals />} />
        <Route path="/goals/:id" element={<Goal />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/addgoal" element={<AddGoal />} />
        <Route path="*" element={<NoFound />} />
      </Routes>
    </Wrapper>
  );
}

export default App;
