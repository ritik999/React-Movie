import react from "react"

const Img_url = "https://image.tmdb.org/t/p/w300/";
const Movies = (props) => {
    // const game="football";
    const {data}=props;
    return (
        <>
                <div className="rows">
                    <img src={data.poster_path ? (Img_url + data.poster_path) : "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1159&q=80"} alt="img" />
                    <div className="movie_title">
                        <h3>{data.title}</h3>
                        <h3>{data.vote_average}</h3>
                    </div>
                    <div className="movie_info">
                        <h2>Overview:</h2>
                        <p>{data.overview}</p>
                    </div>
                </div>
        </>
    )
}

export default Movies;