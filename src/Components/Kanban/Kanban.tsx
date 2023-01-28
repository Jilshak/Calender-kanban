import React, { useState } from 'react'
import '../Kanban/Kanban.css'
import { useDrag } from 'react-dnd'

function Kanban() {
  const [input, setInput] = useState("")
  const [tasks, setTasks] = useState<string[]>([])

  //this function will only add task to the todo if there-
  // actually is some content in the input field
  const handleAddTask = (e: any) => {
    if (e.key === "Enter" && input !== '') {
      setTasks([...tasks, input])
      setInput("")
    }
  }

  //function to delete task from the todo
  const handleDeleteTask = (index: number) => {
    let newTasks = [...tasks]
    newTasks.splice(index, 1)
    setTasks(newTasks)
  }

  return (
    <div className='mt-5' style={{ height: '100%' }}>
      <div className="flex flex-row h-screem">
        <div className="w-4/5 ml-10 p-3">
          <div className="flex flex-col h-full">
            <div className="bg-gray-100 text-gray-800 text-center rounded-t-lg p-5">
              <h1 className='text-xl'>Kanban Board</h1>
            </div>
            <div className="bg-gray-200 rounded-b-lg p-5">
              <div style={{ maxHeight: '65vh' }} className="flex flex-row ">
                <div className="w-1/3">
                  <div className="bg-white shadow-md rounded-md p-3 h-full overflow-y-scroll">
                    <h2 className="text-center mb-5 text-amber-500 text-lg ">To Do</h2>
                    {tasks.map((task, index) => (
                      <div key={index} className="flex flex-row justify-between p-3 mb-2 border border-gray-300 rounded-md hover:shadow-red-200 shadow-xl ">
                        <div style={{ color: 'black' }}>{task}</div>
                        <div>
                          <button className="bg-red-500 text-white rounded-md p-2" onClick={() => handleDeleteTask(index)}>Delete</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-1/3" style={{ height: '65vh', marginLeft: '10px' }}>
                  <div className="bg-white shadow-md rounded-md p-3 h-full">
                    <h2 className="text-center text-orange-500 mb-5 text-lg">In Progress</h2>
                    <div></div>
                  </div>
                </div>
                <div className="w-1/3" style={{ height: '65vh', marginLeft: '10px' }}>
                  <div className="bg-white shadow-md rounded-md p-3 h-full">
                    <h2 className="text-center text-green-500 mb-5 text-lg">Done</h2>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3 p-3">
          <div className="">
            <input
              className='bg-white shadow-md rounded-lg p-3 w-11/12'
              placeholder='Add Task'
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyPress={handleAddTask}
            />
          </div>
        </div>
      </div>
    </div>
  )
}


export default Kanban