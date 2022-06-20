import { InputBase, Box, styled, List, ListItem } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux/actions/productActions";
import { Link } from "react-router-dom";

const SearchContainer = styled(Box)`
      background: #fff;
      width: 33%;
      height: 57%;
      padding:3px 0 5px 0;
      border-radius: 2px;
      margin-left: 12px;
      display: flex;  
`;
const InputSearchBase = styled(InputBase)`
      padding-left: 18px;
      width: 100%;
      margin-top: 0.9%;
      font-size: 13px;
`;
const SearchIconWrapper = styled(Box)`
      color: blue;
      padding: 8px;
      display: flex;
`;
const ListWraper = styled(List)`
      position: absolute;
      background: #ffffff; 
      color: #000;
      margin-top: 40px;
`;

const Search = () => {
        const [text, setText] = useState('');
        const { products } = useSelector(state => state.getProducts);
        const dispatch = useDispatch();
        useEffect(() =>{
              dispatch(getProducts())
        }, [dispatch])

        const getText = (text) => {
               setText(text);
        }

  return (
        <SearchContainer>
            <InputSearchBase placeholder="Search for products, brands and more" onChange={(e) => getText(e.target.value)} value={text} />
            <SearchIconWrapper> <SearchIcon style= {{ fontSize: 25 }}  /> </SearchIconWrapper>
            {
                  text &&
                  <ListWraper>
                       {
                           products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product =>(
                              <ListItem>
                                  <Link to={`/product/${product.id}`} 
                                  onClink={() => setText('')}
                                  style={{ textDecoration: 'none', color: 'inherit' }}
                                  >
                                      {product.title.longTitle}
                                  </Link>
                              </ListItem>
                           ))
                       }
                  </ListWraper>
            }
        </SearchContainer>
  )
}

export default Search;
