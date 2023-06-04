import LogoFooter from '../../assets/logofoot.png'

function Footer() {
    return (
      <div className="flex flex-col items-center justify-center dw-max bg-black ">
        <img src={LogoFooter} alt="logo Kasa" className='mt-10 mb-3'/>
        <p className="text-white mb-10">
          © 2020 Kasa. All rights reserved
        </p>
      </div>
    );
  }
  
  export default Footer;