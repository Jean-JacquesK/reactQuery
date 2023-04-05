import { useParams } from "react-router-dom";
import { fetchAlbumID, fetchPhotosWithAlbumID } from "../../utils/fetchApi";
import { useQuery } from "react-query";
import { Photos } from "../../interfaces/Photos";
import PhotoItem from "../PhotoItem/PhotoItem";
import { Albums } from "../../interfaces/Albums";

function PhotosList() {
  const { albumId } = useParams();
  const IdAlbum = Number(albumId);

  const album = useQuery<Albums>({
    queryKey: ["album"],
    queryFn: () => fetchAlbumID(IdAlbum),
  });

  const { isLoading, data, error } = useQuery<Photos[]>({
    queryKey: ["photos", albumId],
    queryFn: () => fetchPhotosWithAlbumID(IdAlbum),
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
      <h3 className='m-0 mb-5'>Album : {album.data?.title}</h3>
      <div className='card-container d-flex flex-wrap justify-content-center'>
        {data?.map((photo) => {
          return <PhotoItem key={photo.id} photo={photo} />;
        })}
      </div>
    </>
  );
}

export default PhotosList;
