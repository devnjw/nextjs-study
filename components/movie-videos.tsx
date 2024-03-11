import { API_URL } from "../app/(movies)/movies/page";

async function getVideos(id: string) {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const res = await fetch(API_URL + `/${id}/videos`);
    const json = await res.json();
    return json;
}


export default async function MovieVideos({ id }: { id: string }) {
    const videos = await getVideos(id);
    return <div>
        <h6>{JSON.stringify(videos)}</h6>
    </div>
}
