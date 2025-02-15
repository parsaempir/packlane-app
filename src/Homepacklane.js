import './Homepacklane.css';
import { useState } from 'react';
import Logo from './Pictures/pkln-logo.svg';
import but from './Pictures/cs.png';
import dwon from './Pictures/chevron-down-solid.svg';
import buy from './Pictures/cart-shopping-solid.svg';
import serach from './Pictures/magnifying-glass-solid.svg';
import box from './Pictures/mailer-box-1.png';
function Home() {
    const [showDiv, setShowDiv] = useState(false);
    const [divShow, setDivShow] = useState(false);
    const [Showone, setShowone] = useState(false);
    const [Showtow, setShowtow] = useState(false);
    const [Showthree, setShowthree] = useState(false);


return(
<>
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

<div>
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
<span className='text-span'>Product Boxes</span>
<span className='text-span'>Rigid Boxes</span>
<span className='text-span'> Shipping Boxes</span>
<span className='text-span'>Pouches</span>
<span className='text-span'>Packaging Accessories</span>

</div>
</div>
</div>
</>

);}
export default Home;