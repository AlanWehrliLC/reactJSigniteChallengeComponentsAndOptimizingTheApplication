import { useEffect, useState, useCallback } from "react";
import { useGenerAndMovies } from "../hooks/useGenerAndMovies";
import { api } from "../services/api";
import { Button } from "./Button";

import '../styles/sidebar.scss';

interface GenresProps{
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export function SideBar() {
  const {selectedGenreId, setSelectedGenreId} = useGenerAndMovies()
  const [genres, setGenres] = useState<GenresProps[]>([]);

  useEffect(() => {
    api.get<GenresProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  const handleClickButton = useCallback((id: number) => {
    setSelectedGenreId(id);
  }, [selectedGenreId])

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}