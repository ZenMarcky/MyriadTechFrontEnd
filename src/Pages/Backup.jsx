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
  const [selectedType, setSelectedType] = useState(null); // State to track the selected brand

  // Fetch all products
  useEffect(() => {
    axios
      .get('http://localhost:8000/api/getAllAvailable')
      .then((response) => {
        console.log('📦 Products from API:', response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the products!', error);
      });

      axios
      .get('http://localhost:8000/api/getAllProduct')
      .then((response) => {
        console.log('📦 Products from API:', response.data);
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

  // Filter products based on the selected brand
  const filteredProducts = selectedBrand
  ? product.filter(
      (item) =>
        item.brand === selectedBrand || item.type === selectedBrand
    )
  : product;



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

  // Function to handle brand selection
  const handleBrandClick = (brand) => {
    if (selectedBrand === brand) {
      setSelectedBrand(null); // Deselect if the same brand is clicked again
    } else {
      setSelectedBrand(brand); // Set selected brand
    }
  };
// Function to handle type Selection
  const handleTypeClick = (type) => {
    if ( selectedBrand === type) {
      setSelectedBrand(null); // Deselect if the same brand is clicked again
    } else {
      setSelectedBrand(type); // Set selected brand
    }
  };

  return (
    <body className="productBody">
      <nav className="navBar">
        <a href="./index.html" className="navMyriad">
          <span className="Myr">Myri</span>ad
        </a>
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
              <FontAwesomeIcon icon={faChevronDown}/> Category
              </p>
              <a href="#" onClick={() => handleBrandClick('Processor')}>Processor ({processorCount})</a>
              <a href="#" onClick={() => handleBrandClick('Graphics Card')} >Graphic Card ({gpuCount})</a>
              <a href="#" onClick={() => handleBrandClick('Memory')} >Computer Memory (0)</a>
              <a href="#" onClick={() => handleBrandClick('Power Supply')} >Power Supply (0)</a>
              <a href="#" onClick={() => handleBrandClick('Storage HDD')}>Storage (HDD) (0)</a>
              <a href="#" onClick={() => handleBrandClick('Storage SSD')}>Storage (SSD) (0)</a>
            </div>
            <div className="brands">
              <p>
              <FontAwesomeIcon icon={faChevronDown} /> Brands
              </p>
              <a href="#" onClick={() => handleBrandClick('AMD')}>
                AMD ({countProductsByBrand(filteredProducts, 'AMD')})
              </a>
              <a href="#" onClick={() => handleBrandClick('Intel')}>
                Intel ({countProductsByBrand(filteredProducts, 'Intel')})
              </a>
              <a href="#" onClick={() => handleBrandClick('NVIDIA')}>
                NVIDIA ({countProductsByBrand(filteredProducts, 'NVIDIA')})
              </a>
              <a href="#" onClick={() => handleBrandClick('Sapphire')}>
                Sapphire ({sapphireBrand})
              </a>
              <a href="#" onClick={() => handleBrandClick('Samsung')}>
                Samsung ({samsungBrand})
              </a>
              <a href="#" onClick={() => handleBrandClick('Asus')}>
                ASUS ({asusBrand})
              </a>
              <a href="#" onClick={() => handleBrandClick('EVGA')}>
                EVGA ({evgaBrand})
              </a>
              <a href="#" onClick={() => handleBrandClick('ASRock')}>
                ASRock ({asrockBrand})
              </a>
              <a href="#" onClick={() => handleBrandClick('Corsair')}>
                Corsair ({corsairBrand})
              </a>
              <a href="#" onClick={() => handleBrandClick('MSI')}>
                MSI ({msiBrand})
              </a>
              <a href="#" onClick={() => handleBrandClick('Palit')}>
                Palit ({palitBrand})
              </a>
              <a href="#" onClick={() => handleBrandClick('Gigabyte')}>
                Gigabyte ({gigabyteBrand})
              </a>
              <a href="#" onClick={() => handleBrandClick('Zotac')}>
                ZOTAC ({zotacBrand})
              </a>
              <a href="#" onClick={() => handleBrandClick('PNY')}>
                PNY ({pnyBrand})
              </a>
              <a href="#" onClick={() => handleBrandClick('PowerColor')}>
                PowerColor ({powerColorBrand})
              </a>
              <a href="#" onClick={() => handleBrandClick('XFX')}>
                XFX ({xfxBrand})
              </a>
            </div>
          </div>

          <div className="productList">
            <p className="productHeading">
              Myriad - All Stock ({filteredProducts.length})
            </p>

            <div className="cardContainer">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => {
                  console.log(`Item #${product.id}:`);
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
                        src={require(`../Images/Products/Graphic Card/${product.picture}.png`)}
                        alt={product.picture}
                      />

                      <div className="productName">
                        <p>{product.name} ({product.condition})</p>
                        <p className="productPrice">₱{product.price}</p>
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
              target="_blank"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>

            <a
              href="https://www.instagram.com/myri.adtech/?igshid=MzNlNGNkZWQ4Mg%3D%3D"
              target="_blank"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100094288234085"
              target="_blank"
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
    </body>
  );
};

export default Product;
