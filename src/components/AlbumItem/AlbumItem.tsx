import { AlbumType } from "../../types/AlbumType";

import { Link } from "react-router-dom";

function AlbumItem({ album }: AlbumType) {
  return (
    <div className='card w-25 d-flex justify-content-center align-items-center m-1'>
      <div className='card-body d-flex flex-column justify-content-around align-items-center'>
        <h5 className='card-title'>{album.title}</h5>

        <Link to={`/photos/${album.id}`} className='btn btn-warning btn-sm'>
          Consulter les photos de l'album
        </Link>
      </div>
    </div>
  );
}

export default AlbumItem;
