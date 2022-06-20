import { Box, styled, Typography } from '@mui/material';
import { navData } from '../constants/data';

const Component = styled(Box)(({ theme }) => ({
     display: 'flex',
     margin: '60px 64px 0 64px',
     justifyContent: 'space-between',
     overflow: 'hidden',
     [theme.breakpoints.down('lg')]: {
      margin: 0,
     }
}));
const Container = styled(Box)`
      padding: 14px 0 10px 0;
      text-align: center;
`;
const Text = styled(Typography)`
      font-size: 14px;
      font-weight: 600;
      font-family: inherit;
`;

const Navbar = () => {
  return (
    <Box style={{background: '#ffffff'}}>
    <Component>
        {
            navData.map(data => (
                <Container>
                    <img src={data.url} alt="Nav-Logo" style={{ width: 72 }} key={data.id} />
                    <Text> {data.text} </Text>
                </Container>
            ))
        }
    </Component>
    </Box>
  )
}

export default Navbar;
