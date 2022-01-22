import React, { useEffect, useState } from "react";
import Movies from "./Movies";

const API_url = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=dc93f18846a55f8b41c2c1fc2191bc39";

const Search_url = "https://api.themoviedb.org/3/search/movie?api_key=dc93f18846a55f8b41c2c1fc2191bc39&query=";

const MoviesContainer = () => {
    const [moviess, setMoviess] = useState([]);
    const [search, setSearch] = useState("");

    const fetchData = async () => {
        try {
            const res = await fetch(API_url);
            const data = await res.json();
            console.log(data.results);
                setMoviess(data.results);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const searchResult =async(e) => {
        console.log(e.target.value);
        setSearch(e.target.value);
        console.log(search);
    }

    const handleOnSubmit=async(e)=>{
        e.preventDefault();

        if (search) {
            const res = await fetch(Search_url+search);
            const data = await res.json();
            console.log(data.results);
            setMoviess(data.results);
            setSearch("");   
        }
    }

    return (
        <>
            <nav>
                <div className="container">
                    <form onSubmit={handleOnSubmit}>
                        <input type="text" value={search} onChange={searchResult} placeholder="search movie" />
                    </form>

                </div>
            </nav>
            <section className="row-wrap">
                {moviess.map((ele) => {
                    return <Movies key={ele.id} data={ele} />
                })}
            </section>
        </>
    )
}

export default MoviesContainer;