import React from 'react'
import Row from '../Row/Row'
import requests from '../../../utils/requests';
const Rowlist = () => {
  return (
    <div>
      <Row
        title="NETFLIX ORIGIGNAL"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargerRow={true}
      ></Row>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}></Row>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies}></Row>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}></Row>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}></Row>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}></Row>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}></Row>
      <Row title="TV Shows" fetchUrl={requests.fetchTvShow}></Row>
      <Row title="Documentrais" fetchUrl={requests.fetchDocumentaries}></Row>
    </div>
  );
}

export default Rowlist
