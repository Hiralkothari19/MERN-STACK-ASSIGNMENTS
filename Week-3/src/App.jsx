import React from "react";
import TextUpdater from "./components/TextUpdater";
import FormComponent from "./components/FormComponent";
import UserCard from "./components/UserCard";
import ButtonComponent from "./components/ButtonComponent";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center">MERN STACK React Assignment</h1>
      {/* Test element */}
      <div className="bg-blue-500 text-white text-3xl p-4 my-4">
        Tailwind is working!
      </div>
      <TextUpdater />
      <FormComponent />
      <UserCard />
      <ButtonComponent />
      <LoginForm />
    </div>
  );
}

export default App;
