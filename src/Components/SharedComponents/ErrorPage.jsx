import { FaceFrownIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import NavButton from './Button/NavButton'

const ErrorPage = () => {
  const { error, status } = useRouteError()
  return (
    <>
    <section className='flex items-center h-screen p-16'>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
        <FaceFrownIcon className='w-40 h-40 text-red-500' />
        <div className='max-w-md text-center'>
          <h2 className='mb-8 font-extrabold text-9xl text-[#00d0ff]'>
            <span className='sr-only'>Error</span>
            {status || 404}
          </h2>
          <p className='text-2xl font-semibold text-[#00d0ff] md:text-3xl mb-8'>
            {error?.message}
          </p>
          <Link to='/' className=''>
          <NavButton value={"Back To Home Page"} padding={"px-1"}/>
          </Link>
        </div>
      </div>
      </section>
      </>
  )
}

export default ErrorPage