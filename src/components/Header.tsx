type HeaderProps = {
  banner: string;
};

const Header = ({ banner }: HeaderProps) => {
  return (
    <header className='w-full flex flex-col items-center bg-storedog text-white'>
      {banner && <img className='my-3' src={banner} alt='banner' />}
      <div className='w-full p-3 bg-storedog-dark'>
        <nav className='w-10/12 mx-auto flex flex-wrap items-center'>
          <img
            className=' w-1/4'
            src='/assets/images/logo_nobg.png'
            alt='logo'
          />
          <div className='md:ml-auto mt-3 md:mt-0'>
            <h1 className=' text-2xl font-medium'>Storedog Discount List</h1>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
