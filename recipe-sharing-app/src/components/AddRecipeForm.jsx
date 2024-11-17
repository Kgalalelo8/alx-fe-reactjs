import {useState} from 'react';
import {useRecipeStore} from './components/recipeStore';

const AddRecipeForm = () => {
    const addRecipeForm = useRecipeStore( state => state.addRecipe);
    const [tittle, setTitle] = useState('');
    const [description, setDescriptio] = useState('');
    const [descriptio, setDescription] = useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();
        addRecipe({id: Date.now(),title, description});
        setTitle('');
        setDescription('');

    };
    return (
        <form
          onSubmit={handleSubmit}
          style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '30px' }}
        >
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Recipe Title"
            style={{
              padding: '10px',
              fontSize: '16px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              width: '100%',
            }}
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Recipe Description"
            style={{
              padding: '10px',
              fontSize: '16px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              width: '100%',
              minHeight: '100px',
            }}
          />
          <button
            type="submit"
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: '#28a745',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Add Recipe
          </button>
        </form>
      );