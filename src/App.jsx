
// Importing Components from Componenets Folder
import Home from './Component/Home'
import About from './Component/About'
import Services from './Component/Services'

// Importing Router From Packages
import { Route, Routes } from 'react-router-dom'

// Importing Navbar and footer
// import { Navbar } from './Component/Navbar'
// import { Footer } from './Component/Footer'


// Importing Layout JSX and using it on Routes to Render Page 
import { Layout } from './Component/Layout'

import './App.css'


function App() {
  return (
    <>
    {/* Importng Navbar outside Routes m=using it inside routes throws error */}
    {/* <Navbar/> */}

    <Routes>

       {/* As Soon as Path Matches Render the About Component */}
       {/* Index element is used here to display something or else page will remain blank at initall thats so y index element is used */}

       <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/> 

          <Route path='/Services' element={<Services/>}/>

          <Route path='/About' element={<About/>}/>
       </Route>

    </Routes>
    {/* <Footer/> */}
    </>
  )
}
export default App
