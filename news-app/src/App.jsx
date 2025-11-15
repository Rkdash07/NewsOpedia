import { useState } from 'react'
import Navbar from './Components/Navbar.jsx'
import NewsBoard from './Components/NewsBoard.jsx'

function App() {
    const [category, setCategory] = useState('general');

  return (
    <>
      <Navbar setCategory={setCategory} />
      <NewsBoard category={category} />
    </>
  )
}

export default App
