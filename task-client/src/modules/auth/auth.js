import React from "react";
import "./auth.css";
import taskBuddy from "../../assets/taskBuddy.png";
import googleLogin from "../../assets/googleLogin.png";
import circles_bg from "../../assets/circles_bg.png";
import taskList from "../../assets/taskList.png";

const Auth = () => {
  return (
    <div>
      <div className="login-layout">
        <img className="task-buddy" src={taskBuddy} alt="Task Buddy" />
        <p className="content mb-5">
          Streamline your workflow and track progress effortlessly with our
          all-in-one task management app.
        </p>
        <img className="googleLogin" src={googleLogin} alt="googleLogin" />
      </div>
      <div>
        <img className='circles' src={circles_bg} alt="circles"/>
        <img className="taskList" src={taskList} alt="tasklist"/>
      </div>
    </div>
  );
};

export default Auth;
