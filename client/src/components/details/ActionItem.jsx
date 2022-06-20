import { useState } from 'react';
import {Box, Button, styled } from '@mui/material';
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';

const LeftContainer = styled(Box)(({theme}) => ({
    minWidth: '40%',
    padding: '40px 0 0 80px',
    [theme.breakpoints.down('lg')] : {
      padding: '20px 40px',
    }
}));
const Image = styled('img')({
    padding: '15px 20px',
    border: '1px solid #f0f0f0',
    width: '95%',
});
const StyleButton = styled(Button)(({theme}) => ({
    width: '48%',
    marginTop: '5px',
    height: '50px',
    borderRadius: '2px',
    [theme.breakpoints.down('lg')]: {
      width: '47%',
      fontSize: '12px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '48%',
    }
}));

const ActionItem = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [quantity] = useState(1);

  const { id } = product;

  const addItemToCart = () =>{
        dispatch(addToCart(id, quantity));
        navigate('/cart');
  }
  return (
    <LeftContainer>
       <Image src={product.detailUrl} alt="product-pics" /><br />  
       <StyleButton variant='contained' onClick={() => addItemToCart()} style={{marginRight: 10, background: '#ff9f00'}}> <Cart /> Add to Cart</StyleButton>
       <StyleButton variant='contained' style={{background: '#fb641b'}}> <Flash /> Buy Now</StyleButton>
    </LeftContainer>
  )
}

export default ActionItem;
