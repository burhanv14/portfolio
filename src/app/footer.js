'use client'

import {
    FaLinkedin,
    FaGithub,
    FaInstagram
  } from "react-icons/fa6";
  import { SiLeetcode } from "react-icons/si";
  import { SiCodeforces } from "react-icons/si";
  import { useRouter } from "next/navigation"
  import submitEmail from './action.js'

  const Footer = () => {

    
    const socialLinks = [
      { label: "Github", icon: FaGithub ,site:"https://github.com/burhanv14"},
      { label: "LinkedIn", icon: FaLinkedin,site:"https://www.linkedin.com/in/burhanuddin-vora-b84817251/" },
      { label: "LeetCode", icon: SiLeetcode, site:"https://leetcode.com/u/22ucc123/" },
      { label: "Codeforces", icon: SiCodeforces ,site:"https://codeforces.com/profile/burhan_vora"},
      {label : "Instagram", icon : FaInstagram, site:"https://www.instagram.com/burhan._.vora/"},
    ];

    const links = [
      [
        { label: "Contact", key: "header-1" },
        { label: "+91-8153916526", key: "item-1-1" },
        { label: "22ucc123@lnmiit.ac.in", key: "item-1-2" },
        { label: "Jaipur, Rajasthan", key: "item-1-3" },
      ],
      [
      ],
    ];
  
    const Router = useRouter()

    const handleSubmit = async (formData)=>
    {
        const response = await submitEmail(
          {
            email : formData.email,
          }
        ); 
    }

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
                const refLink = socialLink.site;
                return (
                  <Icon
                    key={`social-${index}`}
                    className="w-12 h-12 p-2 rounded-full bg-zin-950 hover:bg-white hover:text-zinc-600 cursor-pointer"
                    onClick={()=>{Router.push(refLink)}}
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
            <form action={handleSubmit} onSubmit={handleSubmit}>
            <input
              name = 'email'
              id = 'email'
              type="email"
              placeholder=":)"
              className="mt-2 w-full border-none rounded-lg py-3 px-6 text-zinc-950"
            />
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;