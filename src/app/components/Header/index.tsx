import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail, BiLogoLinkedin } from "react-icons/bi";
import { FaCartShopping } from "react-icons/fa6";
export default function Header() {
    return (
        <header className='w-full h-28 justify-around flex items-center  fixed bg-purple-800 align-middle text-white'>
        <div className='flex gap-3'>
          <div className='w-40 h-24'>
            <img className="p-2 w-40 h-24 rounded-xl" src='logo3.png' />
          </div>
        </div>
        <nav className="justify-center gap-2 self-center relative max-sm:hidden">
          <span className="relative uppercase">Siga nas redes sociais </span>
          <ul className='flex gap-2 relative justify-center'>    
            <li>
                <Link href="">                        
                    <FaInstagram style={{border: '1px solid white', fontSize: '2.5rem', color:'white', padding: '5px', borderRadius: '5px' }}/>
                </Link>
            </li>
            {/*
            <li> 
            <Link href=""> 
            <BiLogoLinkedin style={{background: 'blue', color: 'white', fontSize: '2.5rem', borderRadius: '5px'}}/>  
            </Link>
            </li>
            */}
            <li>
                  <Link href="https://api.whatsapp.com/send?phone=5511987877320&text=Texto%20aqui">
                      <FaWhatsapp style={{ background: 'green', color: 'white', fontSize: '2.5rem', padding: '5px', borderRadius: '5px'}} /> 
                  </Link>
            </li>
            <li> 
              <Link href="">
                    <BiLogoGmail  style={{background: 'white', color:'red', fontSize: '2.5rem', borderRadius: '5px' }} /> 
              </Link> 
         </li>
          </ul>
        </nav>
        <div className="flex gap-2 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative ">
        <span className="relative text-white">Entrar</span>
        <FaCartShopping className="relative text-white"  style={{color:'white', fontSize: '2.5rem', padding: '5px', borderRadius: '5px'}} />
        </div>

      </header>
    )
}