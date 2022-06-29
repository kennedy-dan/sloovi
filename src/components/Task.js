import React, { useState, useEffect } from "react";
import { GrFormAdd } from "react-icons/gr";
import moment from "moment";
import { postTasks } from "../actions/taskActions";
import { useSelector ,useDispatch } from "react-redux";
import { users } from "../actions/user.Action";

const Task = () => {
  const [show, setShow] = useState(false);
  const [task_date, setDate] = useState();
  const [time, setTime] = useState("");
  const [assigned_user, setassigned_user] = useState("");
  const [task_msg, settaskmsg] = useState("");
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(users())
  }, [])
  
   
  const user = useSelector((state) => state.user);

  const currentTime = new Date();
  console.log(currentTime);
  const numbe = moment(currentTime, ["HH.mm"]).format("hh:mm a");
  console.log(numbe); // "02:00 pm"
  const currentTimeHour = numbe.substring(0, 2);
  const currentTimeMins = numbe.substring(3, 5);
  console.log(currentTimeHour);
  console.log(currentTimeMins);

  const convertHrToSec = currentTimeHour * 3600;
  const covertMinsToSec = currentTimeMins * 60;

  const time_zone = convertHrToSec + covertMinsToSec;

  const number = moment(time, ["HH.mm"]).format("hh:mm a");
  console.log(number); // "02:00 pm"
  const nop = number.substring(0, 5);
  console.log(nop);
  const no = number.substring(0, 2);
  const no2 = number.substring(3, 5);

  const hrs = no * 3600;
  const mins = no2 * 60;

  const task_time = mins + hrs;

  const newTask = () => {
    setShow(true);
  };

  const addTask = () => {
    dispatch(postTasks({assigned_user, task_msg, time_zone, task_time}))
  }
  return (
    <div className="flex justify-center">
      <div>
        <p className="font-bold text-lg">// Could not complete the add task because i was getting CORS error when making the post request to the api provided</p>
        <div className="bg-gray-300  h-10 w-80 flex justify-between items-center">
          <p>Tasks</p>
          <GrFormAdd onClick={newTask} />
        </div>
        <div className={`bg-blue-200 px-2 w-80 h-60 ${show ? "" : "hidden"}`}>
          <div>
            <p>Task Description</p>
            <input value={task_msg} onChange={e => settaskmsg(e.target.value)} className="border-2 w-full " />
          </div>
          <div className="flex justify-between">
            <input
              type="date"
              name="end"
              placeholder="yyyy-mm-dd"
              value={task_date}
              onChange={(e) => setDate(e.target.value)}
            />
            <input
              type={"time"}
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
          <div>
            <select
              className="w-full mt-5"
              onChange={(e) => setassigned_user(e.target.value)}
            >
              {user.user.data?.map((name) => (
                <option value={name.name}>{name.name}</option>
              ))}
            </select>
          </div>
          <div className="flex justify-end mt-5">
                <button className="mr-5">Cancel</button>
                <button className="bg-green-500 py-2 px-4 text-white rounded" onClick={addTask}>save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
