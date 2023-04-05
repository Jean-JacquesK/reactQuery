import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { Users } from "../../interfaces/Users";
import { fetchAlbumsWithUserID, fetchUserID } from "../../utils/fetchApi";
import { Albums } from "../../interfaces/Albums";
import AlbumItem from "../AlbumItem/AlbumItem";

function AlbumList() {
  const { userId } = useParams();

  const id = Number(userId);

  const { isLoading, data, error } = useQuery<Users>({
    queryKey: ["user", id],
    queryFn: () => fetchUserID(id),
  });

  const albums = useQuery<Albums[]>({
    queryKey: ["album", id],
    queryFn: () => fetchAlbumsWithUserID(id),
  });

  if (isLoading && albums.isLoading) {
    return <h3>Chargement..</h3>;
  }

  if (error && albums.error) {
    return <h3>Erreur : {error.toString() && albums.error.toString()} </h3>;
  }

  if (!data && !albums.data) {
    return <h4>Oups.. Nous Rencontrons un problème</h4>;
  }

  return (
    <div>
      <h2> Les albums photos de {data?.name} </h2>

      <div className='card-container d-flex flex-wrap justify-content-center mt-5'>
        {albums.data?.map((album) => {
          return <AlbumItem key={album.id} album={album} />;
        })}
      </div>
    </div>
  );
}

export default AlbumList;
