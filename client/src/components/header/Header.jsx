import { useState } from 'react';
import { AppBar, Box, Toolbar, styled, Typography, IconButton, Drawer, List, ListItem } from '@mui/material';
import Search from './Search';
import CustomButton from './CustomButton.jsx';
import {Link} from 'react-router-dom';
import {Menu} from '@mui/icons-material';

const StyledHeader = styled(AppBar)`
       background: #2874f0;
       height: 55px;
`;
const Component = styled(Link)`
       margin-left: 11.45%;
       line-height: 0;
       text-decoration: none;
       color: inherit;
`;
const SubHeading = styled(Typography)`
       font-size: 10px;
       font-style: italic;
`;
const PlusImage = styled('img')({
    width: 10,
    height: 10,
    marginLeft: 4,
});
const CustomButtonWrapper = styled(Box)(({theme}) => ({
    margin: '0 5% 0 auto',
    [theme.breakpoints.down('md')]: {
        display: 'none',
    }
}));
const MenuButton = styled(IconButton)(({theme})=>({
      display: 'none',
      [theme.breakpoints.down('md')]: {
        display: 'block',
      }
}));

const Header = () => {
  const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
  const plusURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

  const [open, setOpen] = useState(false);

  const handleOpen = () =>{
       setOpen(true);
  }
  const handleClose = () =>{
       setOpen(false);
  }

  return (
    <StyledHeader>
        <Toolbar style={{ alignItem: 'center', minHeight: 55 }}>
             <MenuButton color='inherit' onClick={handleOpen}>
                 <Menu />
             </MenuButton>

             <Drawer open={open} onClose={handleClose}>
                <Box style={{width: 200}} onClick={handleClose}>
                  <List>
                    <ListItem button>
                        <CustomButton />            
                    </ListItem>
                 </List>
                 </Box>
             </Drawer>

             <Component to='/'>
                <img src={logoURL} alt="Logo" style={{ width:75 }} />
                <Box style={{display: 'flex' }}>
                    <SubHeading>Explore 
                       <Box component="span" style={{color:'#fff500'}}> Plus </Box>
                    </SubHeading>
                    <PlusImage src={plusURL} alt="Plus-Logo" />
                </Box>
             </Component>
             <Search />
             <CustomButtonWrapper>
                 <CustomButton />
             </CustomButtonWrapper>
        </Toolbar>
    </StyledHeader>
  )
}

export default Header;
