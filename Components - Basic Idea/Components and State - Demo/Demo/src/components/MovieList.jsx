export default function MovieList(props) {
    console.log(props.allMovies);
    return (
       <div className="movie-list">
            <h2>Movie List</h2>        
            <ul>
                <li>{props.allMovies[0].title}</li>
                <li>{props.allMovies[1].title}</li>
                <li>{props.allMovies[2].title}</li>
            </ul>
       </div>
    );
}