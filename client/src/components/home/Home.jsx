import Navbar from "./Navbar";
import Banner from "./Banner";
import Slide from "./Slide";
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";

import { styled, Box } from '@mui/material';
import { useEffect } from "react";
import { getProducts } from "../../redux/actions/productActions";
import { useDispatch, useSelector } from 'react-redux';

const Component = styled(Box)`
      padding: 13px 8px;
      background: #F2F2F2;
`;

const Home = () => {
     const { products } = useSelector(state => state.getProducts)
     
     const dispatch = useDispatch();

     useEffect(() =>{
             dispatch(getProducts())
     }, [dispatch])   
     return (
          <>
               <Navbar />
               <Component>
                    <Banner />
                    <MidSlide products={products} title="Deals of the Day" timer={true} />
                    <MidSection />
                    <Slide products={products} title="Suggested" timer={false} />
                    <Slide products={products} title="Recently View Products" timer={false} />
                    <Slide products={products} title="Summer Top Rated Collection" timer={false} />
                    <MidSection />
                    <Slide products={products} title="Products For You" timer={false} />
                    <Slide products={products} title="Women's and Kid's Collection" timer={false} />
               </Component>
          </>
     )
}

export default Home;
