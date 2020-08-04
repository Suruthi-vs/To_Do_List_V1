import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Title from "./Components/Title";
import InputField from "./Components/Inputfield";

const $rootElement = document.querySelector("#root");

const App = () => {
  const [tasks, setTasks] = useState(
    window.localStorage.getItem("tasks-data")
      ? JSON.parse(window.localStorage.getItem("tasks-data"))
       :[
          {
            text: "Buy Grocery",
            isComplete: true,
            priority:"Low"
          },
          {
            text: "Car Wash",
            isComplete: false,
            priority:"high"
          }
        ]
  );

  const [inputText, setInputText] = useState("");

  const inputChangeHandler = event => {
    setInputText(event.target.value);
  };

  const addTask = () => {
    if (inputText) {
      const newTask = {
        text: inputText,
        isComplete: false,
        priority: currentValue
      };
      setTasks(tasks.concat(newTask));
      // setTasks([...tasks, newTask]);
      setInputText("");
    }
  };

  const toggleStatus = selectedTaskIndex => {
    setTasks(
      tasks.map((task, taskIndex) => {
        if (taskIndex === selectedTaskIndex) {
          return {
            ...task,
            isComplete: !task.isComplete
          
          };
        }

        return task;
      })
    );
  };

  const deletetask=(index)=>{
    var newlist= tasks;
    newlist.splice(index,1)
    setTasks([...newlist])
    console.log(index)
  }


  const [currentValue, setCurrentValue] = useState("");

  const prioritychangehandler = event => {
    console.log(event.target.value);
    setCurrentValue(event.target.value)
  };

  useEffect(() => {
    window.localStorage.setItem("tasks-data", JSON.stringify(tasks));
  });

  useEffect(() => {
    console.log("Smart use effect", Math.random());
  }, [inputText]);

  useEffect(() => {
    console.log("This will execute only once", Math.random());
  }, []);

  //Assigning count values
  let count1=0;
  let count2=0;
  let count3=0;
  let count4=0;
  let count5=0;
  //High priority
  for (var i = 0; i < tasks.length; i++){
      if(tasks[i].priority==="High"){
        count1+=1
      }
      else if(tasks[i].priority==="Medium"){
        count2+=1
      }
      else{
        count3+=1
      }
  }
  //Pending and Completed

  for (var j = 0; j < tasks.length; j++){
      if(tasks[j].isComplete===true){
        count4+=1
      }
      else{
        count5+=1
      }
  }

  return (
    <div>
      <Title title="Todo List App!" />
      <InputField
        inputText={inputText}
        inputChangeHandler={inputChangeHandler}
        submit={addTask}
        placeholder="Add new task..."
        currentValue={currentValue}
        prioritychangehandler={prioritychangehandler}
      />
      <ul>
        {tasks.map((task, taskIndex,index) => {
          const checkBoxChangeHandler = () => toggleStatus(taskIndex);
          return (
            <li key={taskIndex}>
              <input
                type="checkbox"
                onChange={checkBoxChangeHandler}
                checked={task.isComplete}
              />
              {task.text} 
            <br/>
            
             <button onClick={()=>deletetask(index)}>Delete</button>
            </li>
         
          );
        })}
      </ul>
        <p>No of pending tasks:{count5}</p>
        <p>No of completed tasks:{count4}</p>
        <p>No of high priority tasks:{count1}</p>
        <p>No of medium priority tasks:{count2}</p>
        <p>No of low priority tasks:{count3}</p>
    </div>
  );
};

ReactDOM.render(<App />, $rootElement);
