import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import AddRecipeForm from './components/AddRecipeForm';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><AddRecipeForm /><RecipeList /></>} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
