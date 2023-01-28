import {Routes, Route} from 'react-router-dom'
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'
import Calender from '../src/Components/Calender/Calendar'
import HomePage from './Components/HomePage'
import Kanban from './Components/Kanban'
import Navbar from './Components/Navbar'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/calender' element={<Calender/>}/>
        <Route path='/kanban' element={<Kanban/>}/>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
    </div>
  )
}

export default App
