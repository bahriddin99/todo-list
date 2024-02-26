import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import { useDispatch } from "react-redux";
import { add } from "../../redux/reducer/todo";

export const Form = () => {
  const [input, setIput] = React.useState("");
  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();
    dispatch(add({ taskName: input, id: nanoid() }));
    setIput("");
  };
  return (
    <div className=" text-center pt-10 flex justify-center ">
      <form onSubmit={submit} className="flex gap-5 font-bold">
        <input
          value={input}
         className="bg-slate-300 w-96 p-3 rounded-xl  outline-none  "
          onChange={(e) => setIput(e.target.value)}
          type="text"
        />
        <button type="submit" className="bg-emerald-500 p-3 rounded-xl font-bold text-white">submit</button>
      </form>
    </div>
  );
};
