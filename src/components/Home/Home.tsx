import { useQuery } from "react-query";
import { fetchAllPhotos } from "../../utils/fetchApi";

function Home() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["photos"],
    queryFn: fetchAllPhotos,
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
    <div>
      <h1>Bienvenu chez JsonAlbumsPhotos</h1>
      <p>
        Découvrez nos artistes ainsi que leurs albums mais aussi toutes leurs
        photos.
      </p>
      <p>En voici un échantillon :</p>

      <div className='card-container d-flex flex-wrap justify-content-center'>
        {data?.map((photo) => {
          return (
            <div
              key={photo.id}
              className='card w-25 d-flex justify-content-center align-items-center m-2'
            >
              <div className='card-body d-flex flex-column justify-content-around align-items-center'>
                <img src={photo.thumbnailUrl} alt='' />
                <p>{photo.title}</p>
              </div>
            </div>
          );
        })}
      </div>
      <button className='btn btn-warning m-3'> + </button>
    </div>
  );
}

export default Home;
