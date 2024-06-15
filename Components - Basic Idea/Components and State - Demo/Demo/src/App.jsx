import { useState } from 'react'
import MovieList from './components/MovieList';
import movies from './assets/movies';
import './App.css'
import Counter from './components/Counter';

const moviesList = [
    {
        title: 'The Matrix',
        description: 'Description here!',
    },
    {
        title: 'Man of Steel',
        description: 'Description here!',
    },
    {
        title: 'Harry Potter',
        description: 'Description here!',
    }
];

function App() {
  let [count, setCount] = useState(0);

  return (
    <div>
       
       <Counter />

    </div>
  )
}

export default App
