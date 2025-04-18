import Link from "next/link";
import { FaArrowCircleRight } from "react-icons/fa";


export default async function homeCard() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  const cards = data.slice(0,6);
  return (
    <div>
 <div className="w-11/12 mx-auto text-white font-serif">
      <h2 className="text-start  font-extrabold text-2xl py-4" >Top Instructors : </h2>
      <div className="grid lg:grid-cols-3 py-4 md:grid-cols-2 grid-cols-1 gap-4">
        {cards.map(({id, name, username, email,  phone }) => (
          <div key={id} className="border rounded-2xl p-5 space-y-2" >
            <h3 className=' underline font-extrabold text-xl'>{name}</h3>
            <p><span className="font-bold">Username:</span> {username}</p>
            <p><span className="font-bold"> Email:</span>{email}</p>
            <p><span className="font-bold">Phone:</span> {phone}</p>
          <Link href={`/user-card/${id}`} className='btn bg-linear-to-bl from-violet-500 to-fuchsia-900 text-white'>Details <FaArrowCircleRight /></Link>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}
