'use client' // Error boundaries must be Client Components
 
import Image from 'next/image'
import { useEffect } from 'react'
import errorImg from '../../public/undraw_page-not-found_6wni (1).svg';
 
export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div>
      <div>
        <Image src={errorImg} alt='error Image'/>
      </div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}