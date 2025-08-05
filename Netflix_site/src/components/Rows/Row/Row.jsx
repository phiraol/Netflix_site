import React, {useState, useEffect} from 'react'
import "./row.css"
import axios from "../../../utils/axios"
import movietrailer from "movie-trailer"
import Youtube from "react-youtube";
const Row = ({ title, fetchUrl, isLargerRow }) => {
      const [movie, setMovie] = useState([]);
      const [trailerUrl, setTrailerUrl] = useState(" ")
      const base_url = "https://image.tmdb.org/t/p/original";
    useEffect(() => {
        (async () => {
            try {
                console.log(fetchUrl)
                const request = await axios.get(fetchUrl)
                console.log(request)
                setMovie(request.data.results)
            }
            catch (error) {
                console.log("error", error)
            }
            
        })()
    }, [fetchUrl]);
  const handleClick = (movie) => {
    if (trailerUrl) {
        setTrailerUrl('')
    } else {
      movietrailer(movie?.title || movie?.name || movie?.orginal_name)
        .then((url) => {
          console.log(url)
          const urlParams = new URLSearchParams(new URL(url).search)
          console.log(urlParams)
          console.log(urlParams.get('v'))
          setTrailerUrl(urlParams.get('v'))
      })
      }
  }
  // const opts = {
  //   height : '390',
  //   width: "100%",
  //   playerVars: {
  //     autoplay:1,
  //   }
  // }

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row_posters">
        {movie?.map((movie, index) => (
          <img
            onClick={() => handleClick(movie)}
            key={index}
            src={`${base_url}${
              isLargerRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            className={`row_poster ${isLargerRow && "row_posterLarge"}`}
          />
        ))}
      </div>

      {/* <div >
        {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
      </div> */}
    </div>
  );
}

export default Row
