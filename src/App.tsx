import { GenerAndMoviesProvider } from './hooks/useGenerAndMovies';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';

export function App() {

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <GenerAndMoviesProvider>
        <SideBar />

        <Content />
      </ GenerAndMoviesProvider>
    </div>
  )
}