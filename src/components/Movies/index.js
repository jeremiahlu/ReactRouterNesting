import { NavLink, Route, Switch, useParams} from 'react-router-dom';
import MovieDetails from '../MovieDetails';
// import { useParams } from 'react';

function Movies({movies}) {
  return (
    <div className='comp orange'>
      <h1>Movies Component</h1>
      <nav> {
          movies.map((movieId) => {
              return(
                  <NavLink to={`/movies/${movieId.id}`}>
                     <h1>
                         MovieDetails Component
                     </h1>
                  </NavLink>
              )
          })
        }
      </nav>
      <Switch>
      <Route path='/movies/:movieId'>
          <MovieDetails movies={movies}/>
      </Route>
      </Switch>
    </div>
  );
}

export default Movies;