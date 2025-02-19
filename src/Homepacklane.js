import './Homepacklane.css';
import { useState } from 'react';
import Logo from './Pictures/pkln-logo.svg';
import but from './Pictures/cs.png';
import dwon from './Pictures/chevron-down-solid.svg';
import buy from './Pictures/cart-shopping-solid.svg';
import serach from './Pictures/magnifying-glass-solid.svg';
import box from './Pictures/mailer-box-1.png';
import boxone from './Pictures/Packlane_Nav_Product_Boxes_Paperboard_246x207.png';
import boxtow from './Pictures/Packlane_Nav_Product_Boxes_Corrugated_246x207.png';
import boxthree from './Pictures/Packlane_Nav_Product_Boxes_Hanging_246x207.png';
import boxfuor from './Pictures/Packlane_Nav_Magnetic_Box_276x207.png';
import boxfive from './Pictures/Packlane_Nav_Set_Box_B_276x207.png';
import boxsix from './Pictures/Packlane_Nav_Standard_Shipper_288x207.png';
import boxseven from './Pictures/Packlane_Nav_Wrap-Style_Shipper_288x207.png';
import boxeight from './Pictures/Packlane_Nav_Econoflex_Shippers_288x207.png';
import boxnine from './Pictures/Packlane_Nav_Stand-Up_Pouches_276x207.png';
import boxten from './Pictures/Packlane_Nav_Flat_Pouches_276x207.png';
import boxeleven from './Pictures/Packlane_Nav_Water-Activated_Tape_288x207.png';
import boxtwelve from './Pictures/Packlane_Nav_Poly_Tape_288x207.png';
import boxthirteen from './Pictures/Packlane_Nav_Tissue_288x207.png';
import homepage from './Pictures/homepage-hero.jpg';
import redbull from './Pictures/redbull.svg';
import loreal from './Pictures/loreal.svg';
import hp from './Pictures/hp.svg';
import shopify from './Pictures/shopify.svg';
import benefit from './Pictures/benefit.svg';
import seatgeek from './Pictures/seatgeek.svg';
import google from './Pictures/google.svg';
import times from './Pictures/times.svg';
import product from './Pictures/mailer box-homepage.png';
import productone from './Pictures/product box.png';
import producttow from'./Pictures/shipping-box (2).png';
import productthree from './Pictures/econoflex shipping box.png';
import mailer from './Pictures/ico-m-mailer.svg';
import carton from './Pictures/ico-m-carton.svg';
import shipper from './Pictures/ico-m-shipper.svg';
import econoflex from './Pictures/ico-m-econoflex.svg';
import circle from './Pictures/circle.svg';
import triangle from './Pictures/triangle.svg';
import lines from './Pictures/lines.svg';
import screenshot from './Pictures/Screenshot 2025-02-19 at 4.54.53 AM.png';


function Home() {
    const [showDiv, setShowDiv] = useState(false);
    const [divShow, setDivShow] = useState(false);
    const [Showone, setShowone] = useState(false);
    const [Showtow, setShowtow] = useState(false);
    const [Showthree, setShowthree] = useState(false);
    const [Showfuor, setShowfuor] = useState(false);
    const [Showfive, setShowfive] = useState(false);
    const [Showsix, setShowsix] = useState(false);
    const [Showseven, setShowseven] = useState(false);


return(
<>
<span className='head-but-fix'>
<button className='but-fix'>LIVE CHAT</button></span>
<div className='hedar-shadow'> 
<div className='heder'>
    <div className='top-head'>
<img src={Logo} />
<span className='head-inp'>
<input type='text' placeholder="Serach for products|" className='inp'/> <img src={serach} height='20px'/></span>
<div className='head-text'>
<span onMouseEnter={() =>setShowDiv(true)}
onMouseLeave={() => setShowDiv(false)}

><img src={but} className='but-img'/> 
Help<img src={dwon} height='15px'/></span>
{/* */}

    <div className={`hover-box ${showDiv ?"show" : ""}`}
    onMouseEnter={() =>setShowDiv(true)}
    onMouseLeave={() => setShowDiv(false)}
    >comingson</div>
<span onMouseEnter={() => setDivShow(true)}
    onMouseLeave={()=> setDivShow(false)}
    >About <img src={dwon}  height='15px'/></span>
    {/* */}
    <div className={`hover-boxone ${divShow ?"showone" : ""}`}
    onMouseEnter={() => setDivShow(true)}
    onMouseLeave={() => setDivShow(false)}
    > <p>Cpmpany</p>
    <p>Our customers</p>
    <p>Blog</p>
    <p>FAQ</p>
    <p>Contact</p>

    </div>
<span 
onMouseEnter={() => setShowone(true)}
onMouseLeave={() => setShowone(false)}
>My account<img src={dwon}  height='15px'/></span>
{/* */}
<div className={`hover-boxtow ${Showone ?"show-tow" : ""}`} 
 onMouseEnter={() => setShowone(true)}
 onMouseLeave={() => setShowone(false)}
>
<p>Login</p>
<p>Sign up</p>

 </div>
<img src={buy} height='30px'/>
</div>
</div>
</div>
</div>

<div className='shadow-one'>
    
<div className='heder'>
<div className='bottom-head'>


<span className='text-span'
onMouseEnter={() => setShowtow(true)}
onMouseLeave={() => setShowtow(false)}
>Mailer Boxes</span>
{/* */}
<div className={`show-hover ${Showtow ?"show-hover-one" : ""}`} 
onMouseEnter={() => setShowtow(true)}
onMouseLeave={() => setShowtow(false)}
>
<span className='box-head'><img src={box}/>
<h3>Mailer Boxes<h5>Durable and stylish for subscription boxes, <br/>gift boxes, and more.</h5></h3>

</span>

</div>
<span className='text-span'
onMouseEnter={() => setShowthree(true)}
onMouseLeave={() => setShowthree(false)}
>Product Boxes</span>
{/* */}
<div className={`show-hover ${Showthree ?"show-hover-one" : ""}`}
onMouseEnter={() => setShowthree(true)}
onMouseLeave={() => setShowthree(false)}
>
 <span className='box-head-one'>
    <img src={boxone}/>

    <img src={boxtow}/>
    <img src={boxthree}/>
    </span>
   <div className='text-box'>
<h3>Cardstock Product Boxes<br/><h5>Picture-perfect display best for retall<br/> stores</h5></h3>

<h3>Corrugated Product Boxes <br/><h5>Flaunt the goods while protecting<br/> what's crucial.</h5></h3>
<h3> Hanging Tab Boxes<br/><h5>Reach new heights with product<br/> displays</h5></h3>

   </div>
</div>

<span className='text-span' 
onMouseEnter={() => setShowfuor(true)}
onMouseLeave={() => setShowfuor(false)}
>Rigid Boxes</span>
{/* */}
<div className={`show-hover ${Showfuor ?"show-hover-one" : ""}`}
onMouseEnter={() => setShowfuor(true)}
onMouseLeave={() => setShowfuor(false)}
>
<span className='box-head-tow'>
<img src={boxfuor} />
<img src={boxfive}/>
</span>
<div className='text-box-one'>
    <h3>Magnetic Gift Boxes<br/> <h5>Magnetic elegance in every snap.</h5></h3>
    <h3>Setup Boxes<br/> <h5>Elegance out of the box, ready to<br/> elevate your product.</h5></h3>

</div>
</div>
<span className='text-span'
onMouseEnter={() => setShowfive(true)}
onMouseLeave={() => setShowfive(false)}
> Shipping Boxes</span>
{/* */}
<div className={`show-hover ${Showfive ?"show-hover-one" : ""}`}
onMouseEnter={() => setShowfive(true)}
onMouseLeave={() => setShowfive(false)}
>
<span className='box-head-three'>
<img src={boxsix}/>
<img src={boxseven}/>
<img src={boxeight}/>
</span>
<div className='text-box'>
<h3>Standard Shipping Boxes<br/><h5>Strong enough to ship heavy items and<br/> protect fragile goods</h5></h3>
<h3>Book Shipping Boxes<br/><h5>Ship with your product's exact size and <br/>shape</h5></h3>
<h3>Econoflex Shipping Boxes<br/><h5>A no-brainer budget box. Ultra <br/>affordable and eco-friendly</h5></h3>

</div>
</div>
<span className='text-span'
onMouseEnter={() => setShowsix(true)}
onMouseLeave={() => setShowsix(false)}
>Pouches</span>
{/* */}
<div className={`show-hover ${Showsix ?"show-hover-one" : ""}`}
onMouseEnter={() => setShowsix(true)}
onMouseLeave={() => setShowsix(false)}
>
<span className='box-head-tow'>
<img src={boxnine}/>
<img src={boxten}/>
</span>
<div className='text-box-fuor'>
<h3>Stand-up Pouches<br/><h5>Stands upright for fuss-free shelf<br/> displays.</h5></h3>
<h3>Flat Pouches<br/><h5>Expands and conforms to your<br/> product's shape</h5></h3>

</div>
</div>
<span className='text-span'
onMouseEnter={() => setShowseven(true)}
onMouseLeave={() => setShowseven(false)}
>Packaging Accessories</span>
{/* */}
<div className={`show-hover ${Showseven ?"show-hover-one" : ""}`}>
<span className='box-head-three'>
<img src={boxeleven}/>
    <img src={boxtwelve}/>
    <img src={boxthirteen}/>
</span>
<div className='text-box'>
<h3>Water Activated Tapes<br/><h5>Seal and add tamper-resistance to<br/> your boxes</h5></h3>
<h3>Poly Tapes<br/><h5>Cost-effective way to seal and secure<br/> packages</h5></h3>
<h3>Custom Tissue Papers<br/><h5>Add an elegant and eco-friendly layer<br/> to your vold fill</h5></h3>

</div>
</div>


</div>
</div>
</div>

<div className='container'>
<div className='home-head'>
    <span className='home-span'>
<h1>Create custom<br/> packaging and boxes</h1>
<h3>Custom packaging and boxes can turn your brand into the<br/> total package with full customization, instant quoting, and<br/> fast turnarounds.</h3>

    <button>CHOOES YOUR PACKAGING STYLE</button>

</span>
<img src={homepage}/>
</div>
<div className='text-botto'><h4>TRUSTED BY OVER 25,000 BRANDS</h4></div>
<div className='home-bottom'>


<img src={redbull}/>
<img src={loreal}/>
<img src={hp}/>
<img src={shopify}/>
<img src={benefit}/>
<img src={seatgeek}/>
<img src={google}/>
<img src={times}/>


</div>
</div>


<div className='container-one'>
   <span className='h-text'>
   <h2>Choose your custom packaging style</h2></span>
<div className='product'>

<div className='productone'>
<img src={product} className='opacity-product'/>
<h2>Mailer Box</h2>
<h4>LEARN MORE &nbsp; &gt;  </h4>
<span>A durable and stylish corrugated<br/> cardboard mailer box that's great for <br/> shipping. Perfect forsubscription boxes,<br/>  gift boxes, and e-commerce packaging.

</span>
<span>
<img src={mailer} className='opacity-hover'/>
</span>
<button>MEET OUR MAILR</button>
</div>

<div className='producttow'>
<img src={productone} className='opacity-product'/>

<h2>Product Box</h2>
<h4>LEARN MORE &nbsp; &gt;  </h4>
<span>Command attention on retail shelves with<br/> our product boxes made from SBS<br/> paperboard. Perfect for beauty<br/> packaging, supplements, and chocolate.
</span>
<span><img src={carton} /></span>

<button>MEET OUR PRODUCT BOX</button>
</div>

<div className='productthree'>
<img src={producttow} className='opacity-product'/>

<h2>Shipping Box</h2>
<h4>LEARN MORE &nbsp; &gt;  </h4>
<span>Our custom corrugated cardboard<br/> shipping boxes are strong and seriously<br/> durable. Perfect for shipping large or<br/> heavy items but also an excellent choice<br/> to protect fragile items.</span>
<span><img src={shipper}/></span>

<button>MEET OUR SHIPPER</button>
</div>

<div className='productfuor'>
<img src={productthree} className='opacity-product'/>

<h2>Econoflex Shipping Box</h2>
<h4>LEARN MORE  &nbsp;   &gt;  </h4>
<span>Ultra affordable and Eco-Friendly. Our<br/> Econoflex shipping boxes are made from<br/> 100% recycled and recyclable Kraft with<br/> print quality that rivals flexo. They're<br/> sturdy enough for bulky items and a no-<br/>brainer for your budget.
</span>
<span><img src={econoflex} className='econoflex-img'/></span>

<button>MEET ECONOFLEX SHIPPRS</button>
</div>
</div>
</div>


<div className='head-container-tow'>

<div className='container-tow'>

<h1>How it worksx</h1>
<h3>Select a packaging style, quantity, and choose from custom or stock sizes – then start designing your custom boxes.<br/> Add customization options like images, text, and any color your brand requires. As you design you'll see an instant<br/> quote so you know exactly what your final order will come to.</h3>

<img src={screenshot} className='screen-img' />

</div>
<span className='circle-span'>
<img src={circle} className='circle'/></span>
<span className='triangle-span'>
<img src={triangle} className='triangle'/>
</span>
<span className='lines-span'>
<img src={lines} className='lines'/>
</span>
<span className='span-btn-get'>
    <button className='btn-get'>GET STARTED NOW</button>
</span>
</div>

</>

);}
export default Home;