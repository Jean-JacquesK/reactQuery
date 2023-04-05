import { useQuery } from "react-query";
import { fetchAllAlbums } from "../../utils/fetchApi";
import { Albums } from "../../interfaces/Albums";
import AlbumItem from "../AlbumItem/AlbumItem";

function AllAlbums() {
  const { isLoading, data, error } = useQuery<Albums[]>({
    queryKey: ["albums"],
    queryFn: () => fetchAllAlbums(),
  });

  if (isLoading) {
    return <h3>Chargement..</h3>;
  }

  if (error) {
    return <h3>Erreur : {error.toString()} </h3>;
  }
  if (!data) {
    return <h4>Oups.. Nous Rencontrons un problème</h4>;
  }

  return (
    <>
      <h3 className='m-0 mb-5'>Retrouver ici toutes nos albums</h3>
      <div className='card-container d-flex flex-wrap justify-content-center'>
        {data?.map((album) => {
          return <AlbumItem key={album.id} album={album} />;
        })}
      </div>
      <button className='btn btn-warning m-3'> + </button>
    </>
  );
}

export default AllAlbums;
