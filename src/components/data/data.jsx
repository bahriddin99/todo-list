import { useDispatch } from "react-redux";
import { deletTask,editTask } from "../../redux/reducer/todo";


import React from "react";

export const Data = ({ taskName, id }) => {
    const [show, setShow] = React.useState(false);
    const [input, setInput] = React.useState(taskName);
    const dispatch = useDispatch();



  const deleteItem = () => {
    dispatch(deletTask({ id }));
  };

  const submit = (e) => {
    e.preventDefault();
    dispatch(editTask({taskName:input,id}))
    setShow(false);
  };

  return (
    <div className="flex items-center  gap-6 pt-5">
      {show ? 
        <form onSubmit={submit} className=""> 
          <input
          className="  p-3 rounded-xl  text-white font-bold bg-slate-400 ml-10 outline-none w-[1080px] "
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
          />
        </form>
       : 
        <h1 className=" text-white flex font-bold  w-full p-3 rounded-xl container bg-slate-400  ml-10"> {taskName}</h1>
        }

      {!show && (
        <div className="flex gap-3 ">
          <button onClick={deleteItem} className="bg-red-700 rounded-xl p-3  text-white font-bold text-center flex justify-center">delete</button>
          <button onClick={() => setShow(true)} className="bg-emerald-600 text-white font-bold rounded-xl p-3">edit</button>
        </div>
      )}
    </div>
  );
};
