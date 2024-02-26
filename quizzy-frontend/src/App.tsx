import { Routes, Route } from "react-router-dom";
import Quiz from "./routes/Quiz";
import Home from "./routes/Home";
import styles from "./styles/App.module.css";
import Create from "./routes/Create";
import QuizInfo from "./routes/QuizInfo";
import Register from "./routes/Register";
import LoginForm from "./routes/Login";
import Admin from "./routes/Admin";
import DashBoard from "./components/Admin/Dashboard";
// import SideBar from "./components/Admin/Sidebar.jsx";

function App() {
  return (
    <div className={styles.wrapper}>
      <Routes>
        <Route element={<Home />} path={"/"} />
        <Route element={<Quiz />} path={"/quiz"} />
        <Route element={<Create />} path={"/create"} />
        <Route element={<QuizInfo />} path={"/info"} />
        <Route element={<Register />} path={"/register"} />
        <Route element={<LoginForm />} path={"/login"} />

        <Route element={<Admin />} path={"/admin/register"} />
        {/* <Route element={<SideBar />} path={"/sidebar"} /> */}

        <Route element={<DashBoard />} path={"/dashboard"} />
      </Routes>
    </div>
  );
}

export default App;
