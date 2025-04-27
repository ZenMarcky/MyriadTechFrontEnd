import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas, faTruck } from "@fortawesome/free-solid-svg-icons";
import { faHandshake } from "@fortawesome/free-regular-svg-icons";
import { faShop } from "@fortawesome/free-solid-svg-icons";
import { faHeadset } from '@fortawesome/free-solid-svg-icons';
import { faEarthAsia } from '@fortawesome/free-solid-svg-icons';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import axios from 'axios';




const Item = () => {
    const { id } = useParams(); // gets the ID from URL
    const [product, setProduct] = useState(null);
  
    useEffect(() => {
      const fetchProduct = async () => {
        try {
          const res = await axios.get(`https://myriadtechbackend.onrender.com/api/getOneById/${id}`);
          console.log("Fetched Product:", res.data);
          setProduct(res.data);
        } catch (err) {
          console.error("Error fetching product:", err);
        }
      };
  
      fetchProduct();
    }, [id]);
  
    if (!product) return <p className='Loading'>Loading...</p>;
  
    return (
        <div className='adjustment'>

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
        
        <div class="detailBody">
        
        
        <div class="detail">
        <img
            src={require(`../Images/Products/Graphic Card/${product.picture}.png`)}
            alt="none"
          />
        
        <div class="productDetail">
        <p class="detailName">{product.name}</p>
        <p class="detailPrice">₱{product.price.toLocaleString()}.00</p>
        <ul>
        
        <li>Memory Size: {product.memorySize}</li>
        <li>Shading Units: {product.shadingUnits}</li>
        <li>Memory Type: {product.memoryType}</li>
        <li>Ports: {product.ports}</li>
        <li>Engine Clock: {product.engineClock}</li>
        
        <li>Suggested PSU: {product.SuggestedPsu}</li>
        </ul>
        
        <a href="https://www.facebook.com/profile.php?id=100094288234085" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faShop} /> Message to Order </a>
        <p>Stock Available: {product.quantity}</p>
        </div>
        
        <div class="delivery">
        <div class="deliveryOption">
        <p class="deliverOpt">Delivery Options</p>
        <div>
  <p>
    <FontAwesomeIcon icon={faEarthAmericas} /> Nationwide Delivery
  </p>
  <p>
    <FontAwesomeIcon icon={faHandshake} /> Pickup
  </p>
  <p>
    <FontAwesomeIcon icon={faTruck} /> Cash on Delivery
  </p>
</div>
        </div>
        <div class="warrantyReturn">
        <p class="deliverOpt">Warranty</p>
        <p>14 Days Warranty</p>
        </div>
        </div>
        </div>
        
        
        <div class="overviewSection">
        <p class="overviewHead">Overview</p>
        <div class="overviewContent">
    <div class="tableContainer">
        <table>
            <tr>
                <th>Graphics Processor</th>
            </tr>
            <tr>
                <td>GPU Name: {product.gpuName}</td>
            </tr>
            <tr>
                <td>GPU Variant: {product.gpuVariant}</td>
            </tr>
            <tr>
                <td>Architecture: {product.architecture}</td>
            </tr>
            <tr>
                <td>Foundry: {product.foundry}</td>
            </tr>
            <tr>
                <td>Process Size: {product.processSize}</td>
            </tr>
            <tr>
                <td>Transistors: {product.transistors}</td>
            </tr>
            <tr>
                <td>Density: {product.density}</td>
            </tr>
            <tr>
                <td>Die Size: {product.dieSize}</td>
            </tr>
            <tr>
                <td>Chip Package: {product.chipPackage}</td>
            </tr>
        </table>

        <table>
            <tr>
                <th>Memory</th>
            </tr>
            <tr>
                <td>Memory Size: {product.memorySize}</td>
            </tr>
            <tr>
                <td>Memory Type: {product.memoryType}</td>
            </tr>
            <tr>
                <td>Memory Bus: {product.memoryBus}</td>
            </tr>
            <tr>
                <td>Shader Model: {product.shaderModel}</td>
            </tr>
            <tr>
                <td>Bandwidth: {product.bandwidth}</td>
            </tr>
        </table>

        <table>
            <tr>
                <th>Clock Speed</th>
            </tr>
            <tr>
                <td>Base Clock: {product.baseClock}</td>
            </tr>
            <tr>
                <td>Boost Clock: {product.boostClock}</td>
            </tr>
            <tr>
                <td>Memory Clock: {product.memoryClock}</td>
            </tr>
        </table>

        <table>
            <tr>
                <th>Render Config</th>
            </tr>
            <tr>
                <td>Shading Units: {product.shadingUnits}</td>
            </tr>
            <tr>
                <td>TMUs: {product.tmus}</td>
            </tr>
            <tr>
                <td>ROPs: {product.rops}</td>
            </tr>
            <tr>
                <td>Compute Units: {product.computeUnits}</td>
            </tr>
            <tr>
                <td>L1 Cache: {product.l1Cache}</td>
            </tr>
            <tr>
                <td>L2 Cache: {product.l2Cache}</td>
            </tr>
        </table>

        <table>
            <tr>
                <th>Graphics Features</th>
            </tr>
            <tr>
                <td>DirectX: {product.directX}</td>
            </tr>
            <tr>
                <td>OpenGL: {product.openGL}</td>
            </tr>
            <tr>
                <td>OpenCL: {product.openCL}</td>
            </tr>
            <tr>
                <td>Vulkan: {product.vulkan}</td>
            </tr>
        </table>
    </div>
    <div class="imageContainer">
        <img src={require(`../Images/Products/Graphic Card/${product.pictureTwo}.png`)} alt="none" />
        <img src={require(`../Images/Products/Graphic Card/${product.pictureThree}.png`)} alt="none" />
      
        
    </div>
</div>
        
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
                <div class="copyRight">
                <p>© 2023 MYRIAD TECHHUB, ALL RIGHTS RESERVED</p>
                </div>
                </div>
        
        </div>
    );
  };
  

export default Item;