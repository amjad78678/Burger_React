const Footer = () => {
  return (
    <div className="p-5 bg-black text-white mt-2">
      <div className="container mx-auto">
        <div className="mx-auto ps-40">
          <a href="/">
            <img
              className="h-20 ml-2 p-2"
              alt="logo"
              src="https://imgs.search.brave.com/ZmCJL_9pAJ-VidC97bna2eCKC8vcLELRm5fT9_ooXbk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvOC9CdXJn/ZXItUmVzdGF1cmFu/dC1UcmFuc3BhcmVu/dC5wbmc"
            />
          </a>
          <p> © {new Date().getFullYear} Amj Technologies Pvt. Ltd</p>
        </div>
      </div>
    </div>
  );
};


export default Footer;