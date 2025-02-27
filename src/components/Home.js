import React from "react";


// config 
import {
  BACKDROP_SIZE,
  IMAGE_BASE_URL,
  POSTER_HOME_SIZE,
} from "../config";

// components
import HeroImage from "./HeroImage";
import Grid from "./Grid";
import Thumb from "./Thumb";
import Spinner from "./Spinner";
import SearchBar from "./SearchBar";
import Button from "./Button";


// hook
import useHomeFetch from "../hooks/useHomeFetch";


// image
import NoImage from "../images/no_image.jpg";


const Home = () => {
    const { state, loading, error, setSearchTerm, searchTerm, setIsLoadingMore } = useHomeFetch();
    console.log(state)

    if(error){
      return (
        <div>Something went wrong...</div>
      )
    }
   
   
    return (
      <>
        {state.results[0] ? (
          <HeroImage
            image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
            title={state.results[0].original_title}
            text={state.results[0].overview}
          />
        ) : null}

        <SearchBar setSearchTerm={setSearchTerm} />

        <Grid header={searchTerm ? "Search results" : "Popular Movies"}>
          {state.results.map((movie) => (
            <Thumb
              key={movie.id}
              clickable
              image={
                movie.poster_path
                  ? IMAGE_BASE_URL + POSTER_HOME_SIZE + movie.poster_path
                  : NoImage
              }
              movieId={movie.id}
            />
          ))}
        </Grid>
        {loading && <Spinner />}
        {state.page < state.total_pages && !loading && (
          <Button text="Load More" callback={() => setIsLoadingMore(true)} />
        )}
      </>
    ); 
}

export default Home;
