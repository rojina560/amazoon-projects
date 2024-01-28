import { useLoaderData } from "react-router-dom";
import Album from "../Album/Album";

const Albums = () => {
    const albums = useLoaderData();
    return (
      <div>
        <h1>this is album</h1>
        <h1> album:{albums.length}</h1>
        <div className="user-container">
          {albums.map((album) => (
            <Album key={album.id} album={album}></Album>
          ))}
        </div>
      </div>
    );
};

export default Albums;