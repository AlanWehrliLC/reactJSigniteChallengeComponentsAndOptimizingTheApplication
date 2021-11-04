import { createContext, useEffect, useState, ReactNode, useContext } from 'react'
import { api } from '../services/api';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface GenerAndMoviesProviderProps{
  children: ReactNode
}

interface GenerAndMoviesContextData {
  setSelectedGenreId: (id: number) => void
  selectedGenreId: number
  selectedGenre: GenreResponseProps
  movies: MovieProps[]
}


const GenerAndMoviesContext = createContext<GenerAndMoviesContextData>(
  {} as GenerAndMoviesContextData
)

export function GenerAndMoviesProvider({children}: GenerAndMoviesProviderProps){

  const [selectedGenreId, setSelectedGenreId] = useState(1);

  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);


  useEffect(() => {
    api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
      setMovies(response.data);
    });

    api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
    })
  }, [selectedGenreId]);


  return (
    <GenerAndMoviesContext.Provider value={{setSelectedGenreId, selectedGenreId, selectedGenre, movies }}>
      {children}
    </GenerAndMoviesContext.Provider>
  )

}

export function useGenerAndMovies(){
  const context = useContext(GenerAndMoviesContext)

  return context
}