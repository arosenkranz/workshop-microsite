type FooterProps = {
  banner: string;
};

const Footer = ({ banner }: FooterProps) => {
  return (
    <footer className='w-full flex flex-col items-center p-6'>
      {banner && <img src={banner} alt='banner' />}
    </footer>
  );
};

export default Footer;
