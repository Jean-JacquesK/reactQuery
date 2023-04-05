import { useQuery } from "react-query";
import { Users } from "../../interfaces/Users";
import { fetchUsers } from "../../utils/fetchApi";
import UsersItem from "../UsersItem/UsersItem";

function UsersList() {
  const { isLoading, data, error } = useQuery<Users[]>({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (error) {
    return <h1>Erreur : {error.toString()} </h1>;
  }

  return (
    <div>
      <h1 className=' m-5'> Nos artistes : </h1>

      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <div className='card-container d-flex flex-wrap justify-content-center'>
          {data?.map((user) => {
            return <UsersItem key={user.id} user={user} />;
          })}
        </div>
      )}
    </div>
  );
}

export default UsersList;
