async function Page() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return (
    <div className="w-11/12 mx-auto my-12 text-white font-serif">
      <h2 className="text-start  font-extrabold text-2xl py-4" >All Instractors : </h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
        {data.map(({id, name, username, email, address, phone, website, company }) => (
          <div key={id} className="border rounded-2xl p-5 space-y-2" >
            <h3 className=' underline font-extrabold text-xl'>{name}</h3>
            <p><span className="font-bold">Username:</span> {username}</p>
            <p><span className="font-bold"> Email:</span>{email}</p>
            <p><span className="font-bold">Phone:</span> {phone}</p>
            <p><span className="font-bold">Website:</span> {website}</p>
            <p><span className="font-bold"> Address:</span>{address.suite}, {address.street}, {address.city}, {address.zipcode}</p>
            <p><span className="font-bold"> Company:</span>{company.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
