/** @jsx h */
import {h} from 'preact'
import { Handlers, PageProps } from "$fresh/server.ts";
import {tw} from "@twind";
export const handler: Handlers = {
    async GET(req, ctx) {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        const data = await response.json();
        return ctx.render(data)
    }
}
interface Photo{
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}
function PhotosPage({data}: PageProps) {
  return (
    <div>
        <h1 class={tw`text-center text-blue-500 text-5xl`}>Photos Page</h1>
        <div class={tw`flex flex-wrap justify-center`}>
        {
            data.map((photo:Photo) => (
                <div key={photo.id}>
                    <img src={photo.url} alt={photo.title} />
                    <p>{photo.title}</p>
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default PhotosPage