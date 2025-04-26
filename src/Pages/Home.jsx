import graphicCard from '../Images/graphic-card.png';
import ram from '../Images/ram.png';
import cpu from '../Images/cpu.png';
import hdd from '../Images/hdd.png';
import psu from '../Images/psu.png';
import desktop from '../Images/desktop.png';
import motherboard from '../Images/motherboard.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';
import { faEarthAsia } from '@fortawesome/free-solid-svg-icons';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';



const Home = () =>{
    return(
<div> <nav className="navBar">
<Link to={`/`} className="navMyriad"><span class="Myr">Myri</span>ad
</Link>
     <div>
               <Link to={`/`}>Home</Link>
            
                <Link to={`/product`}>Product</Link>
                <Link to={`/contact`}>Contact</Link>
                <Link to={`blog`}>Blog</Link>
            </div>
 </nav>

 <div className="landingPage">
<h1><span className="Myr">Myri</span>ad Store</h1>
<p>Affordable for anyone to thousand</p>
<Link to={`/product`} className="landingBtn">SHOP NOW </Link>
<div className="landingLink">
 <Link className='landingIcons' to={`/product`}>   <img src={graphicCard} alt='graphic-card'/>  Graphic Card</Link>
 <Link className='landingIcons' to={`/product`}> <img src={ram} alt='graphic-card'/>  Memory Ram</Link>
 <Link className='landingIcons' to={`/product`}> <img src={cpu} alt='graphic-card'/>  Processor</Link>
 <Link className='landingIcons' to={`/product`}> <img src={hdd} alt='graphic-card'/>  Storage</Link>
 <Link className='landingIcons' to={`/product`}> <img src={desktop} alt='graphic-card'/>  Monitor</Link>
 <Link className='landingIcons' to={`/product`}> <img src={psu} alt='graphic-card'/> PSU</Link>
 <Link className='landingIcons' to={`/product`}> <img src={motherboard} alt='graphic-card'/>  Motherboard</Link>
</div>
 </div>
 

<div className="footerContainer">
<div className="followUs">
<p>Follow us on:</p>
<div className="followLink">

 <a href="https://twitter.com/MyriadTechHub?t=Bku0daU8A8h2GoJVEBIlIg&s=09" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faTwitter} /></a>
 
 <a href="https://www.instagram.com/myri.adtech/?igshid=MzNlNGNkZWQ4Mg%3D%3D" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faInstagram} /></a>
 <a href="https://www.facebook.com/profile.php?id=100094288234085" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faSquareFacebook} /></a>
</div>
</div>
<div className="myriadContact">
<p className="contactLogo"><span className="myria">Myri</span>ad</p>
<p><FontAwesomeIcon icon={faHeadset} />   +639938818364</p>
<p><FontAwesomeIcon icon={faEarthAsia} />   Nationwide</p>
<p><FontAwesomeIcon icon={faUserGroup} />   Friendly</p>
</div>
<div className="copyRight">
<p>© 2023 MYRIAD TECHHUB, ALL RIGHTS RESERVED</p>
</div>
</div>

 
</div>
    )
}

export default Home;