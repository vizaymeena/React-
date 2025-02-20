
// Importing Components from Componenets Folder
import Home from './Component/Home'
import About from './Component/About'
import Services from './Component/Services'

// Importing Router From Packages
import { Route, Routes } from 'react-router-dom'
import './App.css'


function App() {
  return (
    <>
    <Routes>

       {/* As Soon as Path Matches Render the About Component */}
       {/* Index element is used here to display something or else page will remain blank at initall thats so y index element is used */}

       <Route index element={<Home/>}/> 

       <Route path='/Services' element={<Services/>}/>

       <Route path='/About' element={<About/>}/>

    </Routes>
    </>
  )
}
export default App
