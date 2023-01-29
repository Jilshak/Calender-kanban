import React, { useState } from 'react'
import '../Kanban/Kanban.css'
import { useDrag } from 'react-dnd'

function Kanban() {
  const [input, setInput] = useState("")
  const [todos, setTodos] = useState<string[]>([])
  const [inProgress, setProgress] = useState<string[]>([])
  const [done, setDone] = useState<string[]>([])

  //this function will only add task to the todo if there-
  // actually is some content in the input field
  const handleAddtodo = (e: any) => {
    if (e.key === "Enter" && input !== '') {
      setTodos([...todos, input])
      setInput("")
    }
  }

  //functions to delete tasks from the todo/inprogress and done
  const handleDeletetodo = (index: number) => {
    let newtodos = [...todos]
    newtodos.splice(index, 1)
    setTodos(newtodos)
  }
  const handleDeleteInProgress = (index: number) => {
    let newProgress = [...inProgress]
    newProgress.splice(index, 1)
    setProgress(newProgress)
  }
  const handleDeleteDone = (index: number) => {
    let newDone = [...done]
    newDone.splice(index, 1)
    setDone(newDone)
  }

  //function to add the inprogress todo to the inprogress state
  const handleToProgress = (todo: string) => {
    let newProgress = [...inProgress]
    if (todo in inProgress === false) newProgress.push(todo)
    setProgress(newProgress)

    let newTodos = [...todos]
    let index = newTodos.indexOf(todo)
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }


  const handleDone = (task: string) => {
    let newDone = [...done]
    newDone.push(task)
    setDone(newDone)

    let newProgress = [...inProgress]
    let index = newProgress.indexOf(task)
    newProgress.splice(index, 1)
    setProgress(newProgress)
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
                    {todos.map((todo, index) => (
                      <div key={index} className="flex flex-row justify-between p-3 mb-2 border border-gray-300 rounded-md hover:shadow-violet-200 shadow-xl text-center ">
                        <div style={{ color: 'black' }}>{todo}</div>
                        <div className='text-sm text-center'>
                          <button className=" rounded-md p-2" onClick={() => handleDone(todo)}>✅</button>
                          <button className=" rounded-md p-2" onClick={() => handleToProgress(todo)}>🟠</button>
                          <button className=" rounded-md p-2" onClick={() => handleDeletetodo(index)}>❌</button>

                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-1/3" style={{ height: '65vh', marginLeft: '10px' }}>
                  <div className="bg-white shadow-md rounded-md p-3 h-full overflow-y-scroll">
                    <h2 className="text-center text-orange-500 mb-5 text-lg">In Progress</h2>
                    {inProgress.map((task, index) => (
                      <div key={index} className="flex flex-row justify-between p-3 mb-2 border border-gray-300 rounded-md hover:shadow-orange-200 shadow-xl text-center ">
                        <div style={{ color: 'black' }}>{task}</div>
                        <div className='text-sm text-center'>
                          <button className=" rounded-md p-2" onClick={() => handleDone(task)}>✅</button>
                          <button className=" rounded-md p-2" onClick={() => handleDeleteInProgress(index)}>❌</button>

                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-1/3" style={{ height: '65vh', marginLeft: '10px' }}>
                  <div className="bg-white shadow-md rounded-md p-3 h-full overflow-y-scroll">
                    <h2 className="text-center text-green-500 mb-5 text-lg">Done</h2>
                    {done.map((task, index) => (
                      <div key={index} className="flex flex-row justify-between p-3 mb-2 border border-gray-300 rounded-md hover:shadow-green-200 shadow-xl text-center ">
                        <div style={{ color: 'black' }}>{task}</div>
                        <div className='text-sm text-center'>
                          <button className=" rounded-md p-2" onClick={() => handleDeleteDone(index)}>❌</button>
                        </div>
                      </div>
                    ))}
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
              placeholder='Add todo'
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyPress={handleAddtodo}
            />
          </div>
        </div>
      </div>
    </div>
  )
}


export default Kanban