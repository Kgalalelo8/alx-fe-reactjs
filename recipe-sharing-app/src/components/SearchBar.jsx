import React from 'react';
import { useRecipeStore } from '../stores/recipeStore';

const SearchBar = () => {
    const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
    return (
        <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
          <input
            type="text"
            placeholder="Search recipes by name..."
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              padding: '10px',
              fontSize: '16px',
              width: '100%',
              maxWidth: '400px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            }}
          />
        </div>
      );