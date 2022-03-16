import { MovieCard } from "./MovieCard"

interface ContentProps{
  movies: {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
 }[]
 categoria: string
}
export function Content({categoria, movies}: ContentProps) {
  return (
    <div className="container">
    <header>
      <span>Categoria: {categoria}</span>
    </header>
    <main>
     <div className="movies-list">
     {movies.map(movie => (
              <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
      </div>
    </main>
    
    </div>
    )
}