import { API_URL } from "../app/(movies)/movies/page";

async function getMovie(id: string) {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const res = await fetch(API_URL + `/${id}`);
    const json = await res.json();
    return json;
}


export default async function MovieDetail({ id }: { id: string }) {
    const movie = await getMovie(id);
    return <div>
        <h6>{JSON.stringify(movie)}</h6>
    </div>
}
