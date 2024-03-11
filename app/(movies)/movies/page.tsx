export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies"; 

async function getMovies() {
    const res = await fetch(API_URL);
    const json = await res.json();
    return json;
}


export default async function Page() {
    const movies = await getMovies();
    return <div>
        <h1>Movies</h1>
        <ul>
            {movies.map((movie) => (
                <a href={`/movies/${movie.id}`}>
                    <li key={movie.id}>{movie.title}</li>
                </a>
            ))}
        </ul> 
    </div>
}
