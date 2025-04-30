import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';
import { faEarthAsia } from '@fortawesome/free-solid-svg-icons';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Product = () => {
  const [product, setProducts] = useState([]);
  const [productCount, setProductCounts] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(null); // State to track the selected brand
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch all products
  useEffect(() => {
    axios
      .get('https://myriadtechbackend.onrender.com/api/getAllAvailable')
      .then((response) => {
     
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the products!', error);
      });

      axios
      .get('https://myriadtechbackend.onrender.com/api/getAllProduct')
      .then((response) => {
      
        setProductCounts(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the products!', error);
      });

  }, []);

  // Function to count products by type
  function countProductsByType(products, type) {
    return products.filter((product) => product.type === type).length;
  }

  // Function to count products by brand
  function countProductsByBrand(products, brand) {
    return products.filter((product) => product.brand === brand).length;
  }

  function countProductsByBrandType(products, brand) {
    return products.filter((product) => product.brandType === brand).length;
  }
  

 

  const filteredProducts = product.filter((item) => {
    let matchesBrandOrType = true;
  
    if (selectedBrand) {
      if (["AMD", "INTEL", "NVIDIA"].includes(selectedBrand)) {
        matchesBrandOrType = item.brandType === selectedBrand;
      } else {
        matchesBrandOrType = item.brand === selectedBrand || item.type === selectedBrand;
      }
    }
  
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
  
    return matchesBrandOrType && matchesSearch;
  });

  // Get the count of GPUs and Processors
  const gpuCount = countProductsByType(productCount, 'Graphics Card');
  const processorCount = countProductsByType(productCount, 'Processor');
  const sapphireBrand = countProductsByBrand(productCount, 'Sapphire');
  const samsungBrand = countProductsByBrand(productCount, 'Samsung');
  const asusBrand = countProductsByBrand(productCount, 'Asus');
  const evgaBrand = countProductsByBrand(productCount, 'EVGA');
  const asrockBrand = countProductsByBrand(productCount, 'ASRock');
  const corsairBrand = countProductsByBrand(productCount, 'Corsair');
  const msiBrand = countProductsByBrand(productCount, 'MSI');
  const palitBrand = countProductsByBrand(productCount, 'Palit');
  const gigabyteBrand = countProductsByBrand(productCount, 'Gigabyte');
  const zotacBrand = countProductsByBrand(productCount, 'Zotac');
  const pnyBrand = countProductsByBrand(productCount, 'PNY');
  const powerColorBrand = countProductsByBrand(productCount, 'PowerColor');
  const xfxBrand = countProductsByBrand(productCount, 'XFX');
  const arktekBrand = countProductsByBrand(productCount, 'Arktek');
const nvidiaCount = countProductsByBrandType(productCount, "NVIDIA");
const amdCount = countProductsByBrandType(productCount, "AMD");
const intelCount = countProductsByBrandType(productCount, "INTEL");


  // Function to handle brand selection
  const handleBrandClick = (brand) => {
    if (selectedBrand === brand) {
      setSelectedBrand(null); // Deselect if the same brand is clicked again
    } else {
      setSelectedBrand(brand); // Set selected brand
    }
  };


  return (
    <div className="productBody">
      <nav className="navBar">
      <Link to={`/`} className="navMyriad"><span className="Myr">Myri</span>ad
      </Link>
        <div>
               <Link to={`/`}>Home</Link>
            
                <Link to={`/product`}>Product</Link>
                <Link to={`/contact`}>Contact</Link>
                <Link to={`/blog`}>Blog</Link>
            </div>
      </nav>

      <div className="Container">
        <div className="productContainer">
          <div className="productType">
          <div className="parts">
  <p>
    <FontAwesomeIcon icon={faChevronDown} className='chevron'/> Category
  </p>
  <div onClick={() => handleBrandClick('Processor')}>Processor ({processorCount})</div>
  <div onClick={() => handleBrandClick('Graphics Card')}>Graphics Card (
  <span style={{ color: gpuCount > 0 ? 'orange' : 'inherit' }}>
    {gpuCount}
  </span>
  )</div>
  <div onClick={() => handleBrandClick('Memory')}>Computer Memory (0)</div>
  <div onClick={() => handleBrandClick('Power Supply')}>Power Supply (0)</div>
  <div onClick={() => handleBrandClick('Storage HDD')}>Storage (HDD) (0)</div>
  <div onClick={() => handleBrandClick('Storage SSD')}>Storage (SSD) (0)</div>
</div>

            <div className="brands">
  <p>
    <FontAwesomeIcon icon={faChevronDown} /> Brands
  </p>
  <div style={{color:'red'}}  onClick={() => handleBrandClick('AMD')}>
    AMD (
  <span style={{ color: amdCount > 0 ? 'orange' : 'inherit' }}>
    {amdCount}
  </span>
  )
  </div>
  <div style={{color:'blue'}} onClick={() => handleBrandClick('Intel')}>
    INTEL (
  <span style={{ color: intelCount > 0 ? 'orange' : 'inherit' }}>
    {intelCount}
  </span>
  )
  </div>
  <div style={{color:'green'}} onClick={() => handleBrandClick('NVIDIA')}>
    NVIDIA (
  <span style={{ color: nvidiaCount > 0 ? 'orange' : 'inherit' }}>
    {nvidiaCount}
  </span>
  )
  </div>
  <div onClick={() => handleBrandClick('Sapphire')}>
  Sapphire (
  <span style={{ color: sapphireBrand > 0 ? 'orange' : 'inherit' }}>
    {sapphireBrand}
  </span>
  )
</div>
<div onClick={() => handleBrandClick('Samsung')}>
  Samsung (
  <span style={{ color: samsungBrand > 0 ? 'orange' : 'inherit' }}>
    {samsungBrand}
  </span>
  )
</div>
<div onClick={() => handleBrandClick('Asus')}>
  ASUS (
  <span style={{ color: asusBrand > 0 ? 'orange' : 'inherit' }}>
    {asusBrand}
  </span>
  )
</div>
<div onClick={() => handleBrandClick('EVGA')}>
  EVGA (
  <span style={{ color: evgaBrand > 0 ? 'orange' : 'inherit' }}>
    {evgaBrand}
  </span>
  )
</div>
<div onClick={() => handleBrandClick('ASRock')}>
  ASRock (
  <span style={{ color: asrockBrand > 0 ? 'orange' : 'inherit' }}>
    {asrockBrand}
  </span>
  )
</div>
<div onClick={() => handleBrandClick('Corsair')}>
  Corsair (
  <span style={{ color: corsairBrand > 0 ? 'orange' : 'inherit' }}>
    {corsairBrand}
  </span>
  )
</div>
<div onClick={() => handleBrandClick('MSI')}>
  MSI (
  <span style={{ color: msiBrand > 0 ? 'orange' : 'inherit' }}>
    {msiBrand}
  </span>
  )
</div>
<div onClick={() => handleBrandClick('Palit')}>
  Palit (
  <span style={{ color: palitBrand > 0 ? 'orange' : 'inherit' }}>
    {palitBrand}
  </span>
  )
</div>
<div onClick={() => handleBrandClick('Gigabyte')}>
  Gigabyte (
  <span style={{ color: gigabyteBrand > 0 ? 'orange' : 'inherit' }}>
    {gigabyteBrand}
  </span>
  )
</div>
<div onClick={() => handleBrandClick('Zotac')}>
  ZOTAC (
  <span style={{ color: zotacBrand > 0 ? 'orange' : 'inherit' }}>
    {zotacBrand}
  </span>
  )
</div>
<div onClick={() => handleBrandClick('PNY')}>
  PNY (
  <span style={{ color: pnyBrand > 0 ? 'orange' : 'inherit' }}>
    {pnyBrand}
  </span>
  )
</div>
<div onClick={() => handleBrandClick('PowerColor')}>
  PowerColor (
  <span style={{ color: powerColorBrand > 0 ? 'orange' : 'inherit' }}>
    {powerColorBrand}
  </span>
  )
</div>
<div onClick={() => handleBrandClick('XFX')}>
  XFX (
  <span style={{ color: xfxBrand > 0 ? 'orange' : 'inherit' }}>
    {xfxBrand}
  </span>
  )
</div>
<div onClick={() => handleBrandClick('Arktek')}>
  ARKTEK (
  <span style={{ color: arktekBrand > 0 ? 'orange' : 'inherit' }}>
    {arktekBrand}
  </span>
  )
</div>

</div>

          </div>

          <div className="productList">

            <div className='productHeadingContainer'>

            <p className="productHeading">
              Myriad - All Stock ({filteredProducts.length})
            </p>

            <input
  type="text"
  placeholder="Search by name..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  className="searchInput"
/>

            </div>
          

            <div className="cardContainer">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => {
                 
                  return (
                    <Link
                      to={`/item/${product._id}`}
                      key={product._id}
                      className="productListCard"
                    >
                      <div className="productTypeName">
                        <p>{product.type}</p>
                        <FontAwesomeIcon icon={faCartShopping} />
                      </div>

                      <img
                        src={require(`../Images/Products/Graphic Card/${product.picture}.jpg`)}
                        alt={product.picture}
                      />

                      <div className="productName">
                        <p>{product.name} ({product.condition})</p>
                        <p className="productPrice">₱{product.price.toLocaleString()}.00</p>
                      </div>
                    </Link>
                  );
                })
              ) : (
                <div className="stockStatus">
                  <FontAwesomeIcon className="Clock" icon={faClock} />
                  <h1 className="outOfStock">Out of stock</h1>
                  <p>New stock will be available shortly</p>
                  <p className="caption">
                    (Follow the page and/or visit the website for further
                    announcements on the specific dates of the release of new
                    stocks! 😃)
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="footerContainer">
        <div className="followUs">
          <p>Follow us on:</p>
          <div className="followLink">
            <a
              href="https://twitter.com/MyriadTechHub?t=Bku0daU8A8h2GoJVEBIlIg&s=09"
              target="_blank" rel="noreferrer noopener"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>

            <a
              href="https://www.instagram.com/myri.adtech/?igshid=MzNlNGNkZWQ4Mg%3D%3D"
              target="_blank" rel="noreferrer noopener"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100094288234085"
              target="_blank" rel="noreferrer noopener"
            >
              <FontAwesomeIcon icon={faSquareFacebook} />
            </a>
          </div>
        </div>
        <div className="myriadContact">
          <p className="contactLogo">
            <span className="myria">Myri</span>ad
          </p>
          <p>
            <FontAwesomeIcon icon={faHeadset} /> +639938818364
          </p>
          <p>
            <FontAwesomeIcon icon={faEarthAsia} /> Nationwide
          </p>
          <p>
            <FontAwesomeIcon icon={faUserGroup} /> Friendly
          </p>
        </div>
        <div className="copyRight">
          <p>© 2023 MYRIAD TECHHUB, ALL RIGHTS RESERVED</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
