import { PhotoType } from "../../types/PhotoType";

function PhotoItem({ photo }: PhotoType) {
  return (
    <div className='card w-25 d-flex justify-content-center align-items-center m-1'>
      <div className='card-body d-flex flex-column justify-content-around align-items-center'>
        <img src={photo.thumbnailUrl} alt={photo.title} />
        <p className='m-0'>{photo.title}</p>
      </div>
    </div>
  );
}

export default PhotoItem;
