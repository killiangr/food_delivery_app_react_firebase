import React from 'react';
import {} from "@mui/material";
import { BarChart, SearchRounded, ShoppingCartRounded } from '@mui/icons-material';

function Header() {
  return ( 
  <header>
    <img src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Flogo.png?alt=media&token=fc228623-ef27-4af4-8ea5-b9ebeeaf47dc" alt="" className='logo'/>
    <div className="inputBox">
        <SearchRounded className="searchIcon" />
        <input type="text" placeholder="Search" />
      </div>

    <div className='shoppingCart'>
      <ShoppingCartRounded className='cart' />
      <div className='cart_content'>
        <p>2</p>
      </div>
    </div>

    <div className='profileContainer'>
      <div className='imgBox'>
        <img src="https://media-exp1.licdn.com/dms/image/C5603AQFj6dLjVb17ZQ/profile-displayphoto-shrink_800_800/0/1659629758333?e=1665619200&v=beta&t=-xJUCquIODxIv-OIZpVcAZDLTuIvBXN4vxJocmQDaCw" alt="" />
      </div>

      <h2 className='userName'>GRAINDORGE Killian</h2>
    </div>

    <div className='toggleMenu'>
      <BarChart className='toggleIcon' />
    </div>
    
  </header>
  );
}

export default Header