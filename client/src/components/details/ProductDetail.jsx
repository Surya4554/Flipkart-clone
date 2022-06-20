import { Box, Typography,styled, Table, TableBody, TableCell, TableRow } from '@mui/material';
import {LocalOffer as Badge} from '@mui/icons-material';

const SmallText = styled(Box)`
     font-size: 14px;
     vertical-align: baseline;
     & > p{
        font-size: 14px;
        margin-top: 10px;
     }
`;
const StyledBadge = styled(Badge)`
      margin-right: 10px;
      color: #00cc00;
      font-size: 15px;
`;
const ColumnText = styled(TableRow)`
      font-size: 14px;
      vertical-align: baseline;
      & > td{
         font-size: 14px;
         margin-top: 10px;
         border: none;
      }
`

const ProductDetail = ({product}) => {
  const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
  const adUrl = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
  const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000));
  return (
    <>
        <Typography> {product.title.longTitle} </Typography>
        <Typography style={{marginTop: 5, color: '#878787', fontSize: 14}}> 8 Ratings & 1 Reviews
           <Box component='span'> <img src={fassured} alt='pic' style={{width: 77, marginLeft: 20}} /> </Box> 
        </Typography>
        <Typography>
            <Box component='span' style={{ fontSize: 28, marginRight: 15 }}>₹ {product.price.cost}</Box>
            <Box component='span' style={{color: '#878787', marginRight: 15 }}>₹ <strike>{product.price.mrp}</strike></Box>
            <Box component='span' style={{ color: '#388E3C' }}>{product.price.discount}</Box>
        </Typography>
        <Typography>Available Offers</Typography>
        <SmallText>
           <Typography><StyledBadge /> Get extra 20% off upto ₹100 on 1 item T&C</Typography>
           <Typography><StyledBadge /> Combo OfferBuy 2 items save 5%; Buy 3 or more save 10% See all products T&C</Typography>
           <Typography><StyledBadge /> Bank OfferFlat ₹100 Off* On 1st Transaction through Flipkart Pay LaterT&C</Typography>
           <Typography><StyledBadge /> Bank Offer5% Cashback on Flipkart Axis Bank CardT&C</Typography>
           <Typography><StyledBadge /> 5% Cashback on Flipkart Axis Bank Card</Typography>
           <Typography><StyledBadge /> No Cost EMI on Bajaj Fineserv EMI Card on cart value above ₹2999 T&C </Typography>
        </SmallText>
        <Table>
           <TableBody>
               <ColumnText>
                   <TableCell style={{color:'#878787'}}>Delivery</TableCell>
                   <TableCell style={{fontWeight: 600}}>Delivery by {date.toDateString()} | ₹ 40</TableCell>
               </ColumnText>
               <ColumnText>
                   <TableCell style={{color:'#878787'}}>Warranty</TableCell>
                   <TableCell>No Warranty</TableCell>
               </ColumnText>
               <ColumnText>
                   <TableCell style={{color:'#878787'}}>Seller</TableCell>
                   <TableCell>
                        <Box component='span' style={{color: '#2874f0'}} >SuperComNet</Box>
                        <Typography>GST invoice available</Typography>
                        <Typography>View more sellers starting from ₹ {product.price.cost} </Typography>
                   </TableCell>
               </ColumnText>
               <ColumnText>
                   <TableCell colSpan={2}> 
                        <img src={adUrl} alt="pics" style={{width: 390}} />
                   </TableCell>
               </ColumnText>
               <ColumnText>
                    <TableCell style={{ color: '#878787' }}>Description</TableCell>
                    <TableCell> {product.description} </TableCell>
               </ColumnText>
           </TableBody>
        </Table>
    </>
  )
}

export default ProductDetail;
