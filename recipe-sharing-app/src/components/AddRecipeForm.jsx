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
    return(
        <form onSubmit= {handleSubmit}>
            <input
            type="text"
            value={title}
            onChange= {(e) => setTitle(e.target.value)}
            placeholder="Title"
            />
            <textarea 
            value= {descriptio}
            onChange= {(e) => stetDescription(e.target.value)}
            placeholder="Description"
            />
            <button type= "submit">Add Recipe</button>
            </form>

    );

};