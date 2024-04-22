import React from 'react'
import { Button } from '../components/Button';
import { useEffect } from 'react';
import { Link } from 'react-router-dom'
const NotFoundPage = () => {
  useEffect(() => {
    document.title = `Page Not Found / Nomin`;
  });

  return (
    <main>
      <section className="flex flex-col justify-center items-center px-2">
          <p className="text-7xl text-gray-700 font-bold my-10">404, Oops!</p>
        <div className="my-4">
          <Link to="/">
            <Button>Back To Home</Button>
          </Link>          
        </div>
      </section>
    </main>
  )
}
export default NotFoundPage;
