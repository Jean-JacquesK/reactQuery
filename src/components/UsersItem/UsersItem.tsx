import { UserType } from "../../types/UserType";
import { Link } from "react-router-dom";

function UsersItem({ user }: UserType) {
  return (
    <Link
      to={`/albums/${user.id}`}
      className='card m-1 w-25 h-100 text-decoration-none'
    >
      <div className='card-body'>
        <h3 className='card-title'> {user.name} </h3>
      </div>
    </Link>
  );
}
export default UsersItem;
