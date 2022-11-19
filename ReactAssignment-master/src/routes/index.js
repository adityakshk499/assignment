import React, { useEffect, useState } from "react";
import Discover from "./Discover";
import axios from "axios";
import { Route, Routes as Routess } from "react-router-dom";
import Search from "./Search";
import Favourites from "./Favourites";
import Playlists from "./Playlists";
import Charts from "./Charts";

export default function Routes() {
  const [flag, setFlag] = useState(false);
  const [apidata, setApidata] = useState([]);

  // Here you'd return an array of routes

  useEffect(() => {
    axios("https://accounts.spotify.com/api/token", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " +
          btoa(
            process.env.REACT_APP_CLIENT + ":" + process.env.REACT_APP_SECRET
          ),
      },
      data: "grant_type=client_credentials",
      method: "POST",
    }).then((tokenResponse) => {
      const endpoints = [
        "https://api.spotify.com/v1/browse/new-releases",
        "https://api.spotify.com/v1/browse/categories",
        "https://api.spotify.com/v1/browse/featured-playlists",
      ];
      const promise1 = axios.get(endpoints[0], {
        method: "GET",
        headers: {
          Authorization: "Bearer " + tokenResponse.data.access_token,
        },
      });
      const promise2 = axios.get(endpoints[1], {
        method: "GET",
        headers: {
          Authorization: "Bearer " + tokenResponse.data.access_token,
        },
      });
      const promise3 = axios.get(endpoints[2], {
        method: "GET",
        headers: {
          Authorization: "Bearer " + tokenResponse.data.access_token,
        },
      });

      Promise.all([promise1, promise2, promise3]).then((Promisedvalues) => {
        setApidata(Promisedvalues);
        setFlag(true);
      });
    });
  }, [flag]);

  return (
    <Routess>
      <Route path="/" element={flag?(<Discover apidata={apidata} />):<div style={{ fontSize: "2rem" }}>Loading.....</div>} />
      <Route path="/search" element={<Search />} />
      <Route path="/favourites" element={<Favourites/>} />
      <Route path="/playlists" element={<Playlists/>} />
      <Route path="/charts" element={<Charts/>} />
    </Routess>
  );
}

// {
//   flag ? (
//     <Discover apidata={apidata} />
//   ) : (
//     <div style={{ fontSize: "2rem" }}>Loading.....</div>
//   )
// }
