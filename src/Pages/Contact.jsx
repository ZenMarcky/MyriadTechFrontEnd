


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';
import { faEarthAsia } from '@fortawesome/free-solid-svg-icons';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Contact = ()=>{
return(
    <div className="contactBody">
    <nav class="navBar">
        <Link to={`/`} className="navMyriad"><span class="Myr">Myri</span>ad
        </Link>
        <div>
               <Link to={`/`}>Home</Link>
            
                <Link to={`/product`}>Product</Link>
                <Link to={`/contact`}>Contact</Link>
                <Link to={`/blog`}>Blog</Link>
            </div>
    </nav>

    <div className="contactLanding">
        <p className="contactHeading">Get in touch</p>
        <p>Myriad TechHub will help you!, so If you have any question and needs just say hi! , We try our best to get back to you!</p>
        <a href="https://www.facebook.com/profile.php?id=100094288234085" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faSquareFacebook} /> Message</a>
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
        <div class="copyRight">
        <p>© 2023 MYRIAD TECHHUB, ALL RIGHTS RESERVED</p>
        </div>
        </div>
</div>
)
};

export default Contact;