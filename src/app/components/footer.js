import {
    FaInstagram,
    FaDribbble,
    FaXTwitter,
    FaYoutube,
  } from "react-icons/fa6";
  
  const Footer = () => {
    const socialLinks = [
      { label: "YouTube", icon: FaYoutube },
      { label: "Instagram", icon: FaInstagram },
      { label: "Twitter", icon: FaXTwitter },
      { label: "Dribbble", icon: FaDribbble },
    ];
  
    const links = [
      [
        { label: "Contact", key: "header-1" },
        { label: "+91-8153916526", key: "item-1-1" },
        { label: "burhanuddin.vora@gmail.com", key: "item-1-2" },
        { label: "Jaipur, Rajasthan", key: "item-1-3" },
      ],
      [
      ],
    ];
  
    return (
      <div className="app h-36 flex items-end justify-center font-poppins pt-64">
        <div className="py-16 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 bg-stone-900 text-white w-full p-4 relative">
          <div className="  ">
            <div className="footer-img flex items-center">
              <span className="text-4xl font-bold text-amber-50 pb-5" style={{fontFamily:'Kalnia'}}>
                Burhanuddin Vora
              </span>
            </div>
            <div className="footer-icons flex items-center space-x-3">
              {socialLinks.map((socialLink, index) => {
                const Icon = socialLink.icon;
                return (
                  <Icon
                    key={`social-${index}`}
                    className="w-12 h-12 p-2 rounded-full bg-zin-950 hover:bg-white hover:text-zinc-600 cursor-pointer"
                  />
                );
              })}
            </div>
          </div>
          <div className="mx-2 grid w-full py-5 sm:py-0 grid-cols-2 ">
            {links.map((col, index) => {
              return (
                <ul className={`col col-${index + 1}`} key={`col-${index}`}>
                  {col.map((link, index) => {
                    return (
                      <li
                        key={`link-${col}-${index}`}
                        className={`text-amber-50 cursor-pointer ${
                          link.key === "header-1"
                            ? "text-3xl text-amber-50 pb-5" 
                            : " pb-1"
                        }`}
                        style={{fontFamily:'Kalnia'}}>
                        {link.label}
                      </li>
                    );
                  })}
                </ul>
              );
            })}
          </div>
          <div className="footer-form flex flex-col  ">
            <label className="text-lg font-semibold text-amber-50" style={{fontFamily:'Kalnia'}}>
              Drop your mail for a waveback!
            </label>
            <input
              type="email"
              placeholder=":)"
              className="mt-2 w-full border-none rounded-lg py-3 px-6 text-zinc-950"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;