export default async function page({ params }) {
  const { id } = params;
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const result = await data.json();
  const userDetail = result.find((user) => user.id === parseInt(id));

  return (
    <div className='min-h-screen'>
      <h2>{userDetail.name}</h2>
      <h2>{userDetail.username}</h2>
      <h2>{userDetail.email}</h2>
      <h2>{userDetail.website}</h2>
    </div>
  );
}
