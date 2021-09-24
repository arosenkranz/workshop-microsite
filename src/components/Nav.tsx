const Nav = () => {
  return (
    <div className='w-full p-3 bg-storedog-dark'>
      <nav className='w-10/12 mx-auto flex flex-wrap items-center'>
        <a href={`${process.env.REACT_APP_STOREDOG_URL}`}>
          <img
            className='w-1/4 h-logo'
            src='/assets/images/logo_nobg.png'
            alt='logo'
          />
        </a>
        <div className='md:ml-auto mt-3 md:mt-0'>
          <h1 className=' text-2xl font-medium'>Storedog Discount List</h1>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
