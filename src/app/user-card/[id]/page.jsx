export default async function page({ params }) {
  const { id } = params;
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const result = await data.json();
  const userDetail = result.find((user) => user.id === parseInt(id));

  return (
    <div className='min-h-screen text-white text-center flex flex-col justify-center items-center'>
     <div className='h-[200px] w-96 border text-start rounded-2xl flex flex-col justify-center items-center'>
   <div>
   <h2>Name : {userDetail.name}</h2>
      <h2>User-Name : {userDetail.username}</h2>
      <h2>Email : {userDetail.email}</h2>
      <h2>Website : {userDetail.website}</h2>
   </div>
     </div>
    </div>
  );
}
