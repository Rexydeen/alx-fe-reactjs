import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import DeleteRecipeButton from './components/DeleteRecipeButton'
import EditRecipeForm from './components/EditRecipeForm'
import RecipeDetails from './components/RecipeDetails'
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
        <Route path="/edit-recipe/:recipeId" element={<EditRecipeForm />} />
        <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
        <Route path="/delete-recipe/:recipeId" element={<DeleteRecipeButton />} />
      </Routes>
    </div>
    </BrowserRouter>
      
  )
}

export default App
