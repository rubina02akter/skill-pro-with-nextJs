import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='min-h-screen text-white text-center font-extrabold font-sherif mt-24'>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className='btn bg-linear-to-bl from-violet-500 to-fuchsia-900 text-white  font-bold  hover:underline'>Return Home</Link>
    </div>
  )
}