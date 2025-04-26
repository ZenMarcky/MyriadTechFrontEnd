import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';
import { faEarthAsia } from '@fortawesome/free-solid-svg-icons';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import axios from 'axios';



const Blog = ()=>{

      const [blog, setBlogs] = useState([]);


useEffect(() => {
    axios
      .get('https://myriadtechbackend.onrender.com/api/getAllBlog')
      .then((response) => {
        console.log('📦 Blog Posts from API:', response.data);

        // Rotate the data by reversing the array
        const rotatedBlogs = [...response.data].reverse();

        setBlogs(rotatedBlogs); // Set the rotated blogs to state
      })
      .catch((error) => {
        console.error('There was an error fetching the blog posts!', error);
      });
  }, []);



    return (
<div class="blogBody">`
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

    <div class="blogContainer">
   
    {blog.length > 0 ? (
                            blog.map((data) => {
                             
                              return (
                                <div class="blogContent">     
<div class="blogDescription">
<div class="blogDate">
    <p>Blog |</p>
    <p>{data.date}</p>
</div>
<h3>{data.title}</h3>
<p class="blogPost">{data.description}.</p>
</div>
<img src={require(`../Images/Blog/${data.picture}.png`)}   alt={data.picture}  />
        </div>
                              );
                            })
                          ) 
                          
                          : (
                          <div>NO BLOG</div>
                          )}
                  





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
        <script src="https://kit.fontawesome.com/8aa738893f.js" crossorigin="anonymous"></script>
</div>
    )
}


export default Blog;