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
import tiny from './Pictures/tiny-minimums.png';
import isntant from './Pictures/isntant-quotes.png';
import fast from './Pictures/fast-turnarounds.png';
import screenshotone from './Pictures/screen shot.png';
import mailerbox from './Pictures/mailer-box-employee-welcome-kit.png';
import folding from './Pictures/folding-carton-boxes.png';
import shipperfd from './Pictures/shipper-fd.png';
import corrugatedmailer from './Pictures/corrugated-mailer-boxes.png';
import corrugatedprinted from './Pictures/corrugated-printed-boxes.png';
import customprinted from './Pictures/custom-printed-folding-cartons.png';
import homepageabout from './Pictures/homepage-about.jpg'
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

<h1>How it works</h1>
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
<div className='head-top-img'>
    <span>
<img src={tiny}/>
<h2>Tiny minimums. No maximums.</h2>
<h3>No matter the size of your custom packaging<br/> order, you'll get the best boxes at prices to <br/>match.</h3>
</span>
<span><img src={isntant}/>
<h2>Instant quotes</h2>
<h3>Pick your style, design your boxes, and get an<br/> instant quote.</h3>
</span>
<span><img src={fast}/>
<h2>Fast turnarounds</h2>
<h3>Eligible orders may ship within 10 days or less<br/> with priority turnaround options.</h3>
</span>
</div>
</div>


<div className='head-container-three'>
<div className='container-three'>

<h1>See how to succeed with custom packaging</h1>
<h3>Watch how Father Time Bread is slicing up the competition by delivering the ultimate<br/> unboxing experience with fresh bread shipped directly to customers in custom printed boxes.</h3>
<span>
<img src={screenshotone}/></span>
</div>
</div>

<div className='head-container-four'>
<h2 className='container-four-text'>Box design that inspires </h2>
<h3 className='container-four-textone'>We’re here to help with packaging solutions that make sense for businesses of any kind. Whether you’re designing custom<br/> retail packaging with your logo or need corrugated cardboard mailers for your ecommerce biz, there’s lots of inspiration to be<br/> found for your custom product packaging.</h3>
<div className='container-four'>
   
    <div>
<span className='container-four-span-img'>
<span className='card-img'>
    <img src={mailerbox}/>
    <span className='hover-text-span'>
        <span>
  <h2>Mailer Box</h2>
    <h5>LEARN MORE</h5></span>
    </span>
    </span>

  
    <span className='card-img'>
    <img src={folding}/>
    <span className='hover-text-span'>
        <span>
  <h2>Product Box</h2>
    <h5>LEARN MORE</h5></span>
    </span>
    </span>
</span>
<span className='container-four-span-imgone'>

<span className='card-imgone'>
<img src={shipperfd} className="card-image"/>
    <span className='hover-text-span'>
        <span>
  <h2>Shipping Box</h2>
    <h5>LEARN MORE</h5></span>
    </span>
    </span>
</span>
</div>

<div>
<span className='container-four-span-imgone'>
   
    <span className='card-imgone'>
    <img src={corrugatedmailer} className="card-image"/>
    <span className='hover-text-span'>
        <span>
  <h2>Mailer Box</h2>
    <h5>LEARN MORE</h5></span>
    </span>
    </span>
</span>

<span className='container-four-span-img'>

<span className='card-img'>
<img src={corrugatedprinted}/>
    <span className='hover-text-span'>
        <span>
  <h2>Shipping Box</h2>
    <h5>LEARN MORE</h5></span>
    </span>
    </span>

<span className='card-img'>
<img src={customprinted}/>
    <span className='hover-text-span'>
        <span>
  <h2>Product Box</h2>
    <h5>LEARN MORE</h5></span>
    </span>
    </span>
</span>
</div>
</div>

<div className='container-four-center'>
    <div className='background-img'></div>
<img src={homepageabout}/>
<span>
<h2>More than just a pretty <br/>package</h2>
<h3>Customizable from the inside out, every custom printed box we create<br/> is made just for you – and with your customers in mind. Make a <br/>statement in the mail or on display with an unboxing experience unlike <br/>any other. Your products deserve custom packaging boxes crafted<br/> with sustainable materials, impeccable print quality, and picture-<br/>perfect design. Create packaging that wows no matter your use-case,<br/> business, or industry.</h3>
<button>FIND OUT WHAT MAKES OUR BOXES SPECIAL
</button>

</span>
</div>
<div className='text-h-bottom'>
<h2>Frequently Asked Questions</h2> 
<h3>Below you'll find answers to some common questions around creating a custom box. Every order is little different though, so don't hesitate to<br></br> <span>reach out</span> with anything else you might be wondering.</h3>
</div>

<div className='container-four-bottom'>

<div>
<h3>Can I get an instant quote for my order?</h3>
<h5>Yes, you can select your size, material, and quantity on our free 3D design tool to<br/> instantly view a quote for your project. As you upload artwork, add text, or color the<br/> background in each panel of the 3D model, you'll see your Unit Price update in real-<br/>time. </h5>
<h3>What packaging products can I order from Packlane?</h3>
<h5>At Packlane, we offer a variety of packages for you to choose from and customize. Our<br/> custom packaging boxes include Shipping Boxes, Mailer Boxes, and Product Boxes.<br/> They can be ordered in both stock and custom sizes at low minimums. These box<br/> styles are perfect for either retail packaging or ecommerce deliveries. Our Mailer Box<br/> and Shipping Box cardboard products are safe to mail, while our Product Box<br/> packages are intended for display (or to be placed within a shipping-safe box when<br/> sent out for delivery). Get started with our easy-to-use box designer and create<br/> custom printed packaging boxes for your brand today.</h5>

<h3>What if I'm designing in Adobe Illustrator?</h3>
<h5>If you're building your design on one of our Illustrator templates, you can submit your<br/> file on our Dieline Upload tool and a quote for your project will be sent to you ASAP. <br/>You can also email your dieline to our customer support team and we'll send you back<br/> a quote. If you do not have packaging artwork for your box yet, you can get a rough<br/> quote by applying a solid color on any panels of our 3D design tool where you will want<br/> your design printed.</h5>

<h3>How does your 3D box designer work?</h3>
<h5>If you have individual artwork elements such as logos, images or text, you can<br/> customize your box specifications directly on our 3D design tool and receive pricing on <br/>that same page. As you build your design on the 3D box model, you will see your Unit<br/> Price update in real-time to reflect any changes that affect your project's pricing. Once<br/> you have finalized your design, you can proceed directly to checkout, save your design <br/>for later, or even share your design with friends or colleagues!</h5>

<h3>What is the turnaround time on my order?</h3>
<h5>Our Standard turnaround for most custom packaging orders is around 10 business<br/> days and Rush turnaround is 7 business days. These turnarounds do not include transit <br/>time (1 - 7 business days depending on your location). Special custom or bulk orders <br/>may require a few extra days to get setup and produced. Please note that during<br/> extremely busy times of year some orders may take longer to complete. While delivery <br/>estimates cannot be guaranteed, all dates shown at checkout are the quickest<br/> estimate we offer. If your delivery date is time sensitive, we highly recommend<br/> choosing Rush production and expedited shipping for your box orders.</h5>
</div>

<div>
<h3>What happens after I place my order? Do I get a proof before<br/> printing?</h3>
<h5>After checkout, our dedicated Prepress team will review your design for any technical<br/> concerns and send a 2D digital proof of your custom boxes to your email within 24 <br/>hours. If any changes need to be made, you can send a note directly to our Prepress <br/>team through the proof page and they'll be happy to help with finalizing your design for<br/> printing.</h5>

<h3>Will I see a proof for my order?</h3>
<h5>All new orders will receive a digital proof within 24 hours of completing the checkout<br/> process.</h5>

<h3>How do I know if my art is printable?</h3>
<h5>Our dedicated in-house Prepress team will review your custom box design for any<br/> technical concerns (artwork resolution, blurriness, splits, thin lines, and bleeds) and if<br/> found, will note them for your attention in the proof. If you're unsure of how to fix any<br/> printing concerns that are noted, our Prepress representatives are happy to help you<br/> through the process. It's important to keep in mind that our team does not check for<br/> spelling or grammar errors, nor do they provide any subjective feedback on design <br/>content.</h5>

<h3>Can you print inside the boxes?</h3>
<h5>Yes! We can print on the inside of any of our corrugated box styles. This includes<br/> Mailers, Shipping Boxes, and Tuck Tops (our secret menu product!). Product Boxes are<br/> currently limited to printing on the exterior only. You can even use our online box<br/> designer to design the inside of your custom boxes. For Shippers and Tuck Tops, we<br/> currently require a 2D dieline template be submitted for both the interior and exterior<br/> so we can set up your order as a custom order. You can also submit designs this way<br/> for our Mailer boxes, if you prefer to build on a 2D Illustrator template instead of our<br/> free 3D box design tool.</h5>

<h3>What choices affect my pricing?</h3>
<h5>As a high-volume producer with scale economies, Packlane provides the industry's<br/> most competitive prices on custom printed boxes available. Pricing is generally a <br/>factor of five things: dimensions, box style, ink coverage on the box, box material, and <br/>quantity (higher quantities = bulk savings). Custom orders of 5,000 or more can be<br/> eligible for volume discounts. If you have questions about pricing or choices that can<br/> affect your custom packaging order, our customer support team is happy to help!</h5>
</div>

</div>
</div>

<div className='container-five'>

<h2>Request a quote</h2>
<h3>Get a custom quote for boxes and more.</h3>
<button>REQUEST QUOTE</button>
</div>
</>

);}
export default Home;