import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter> 
    <div> 
      <h1>Vite + React</h1>
      <Routes>
        <Route path="/" element={<h2>Welcome to the Recipe Sharing App</h2>} />
        <Route path="/recipes" element={<RecipeList />} />
        <Route path="/add-recipe" element={<AddRecipeForm />} />
      </Routes>
    </div>
    </BrowserRouter>
      
  )
}

export default App
