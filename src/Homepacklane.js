import './Homepacklane.css';
import { useState } from 'react';
import Logo from './Pictures/pkln-logo.svg';
import but from './Pictures/cs.png';
import dwon from './Pictures/chevron-down-solid.svg';
import buy from './Pictures/cart-shopping-solid.svg';
import serach from './Pictures/magnifying-glass-solid.svg';
function Home() {
    const [showDiv, setShowDiv] = useState(false);
    const [divShow, setDivShow] = useState(false);
    const [showOne, setshowOne] = useState(false);

return(
<>
<div className='heder'>
    <div className='top-head'>
<img src={Logo} />
<input type='text' placeholder="Serach for products|" className='inp'/> 
<div className='head-text'>
<span onMouseEnter={() =>setShowDiv(true)}
onMouseLeave={() => setShowDiv(false)}

><img src={but} className='but-img'/> 
Help<img src={dwon} height='15px'/></span>
{/* */}

    <div className={`hover-box ${showDiv ?"show" : ""}`}>dkflsk</div>
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
onMouseEnter={() => setshowOne(false)}
onMouseLeave={() => setshowOne(true)}
>My account<img src={dwon}  height='15px'/></span>
{/* */}
<div className={`hover-boxtow ${showOne ?"showtow" : ""}`} 
 onMouseEnter={() => setshowOne(true)}
 onMouseLeave={() => setshowOne(false)}>easef</div>
<img src={buy} height='30px'/>
</div>
</div>
</div>

</>

);}
export default Home;