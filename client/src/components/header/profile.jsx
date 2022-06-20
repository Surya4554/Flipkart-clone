
import { Typography, Box, Menu, MenuItem, styled } from '@mui/material';
import { useState } from 'react'
import PowerSettingNewIcon from '@mui/icons-material/PowerSettingsNew';

const Component = styled(Menu)`
    margin-top: 5px;
`;
const Logout = styled(Typography)`
    font-size: 14px;
    font-weight: 600;
    margin-left: 20px;
    margin-top: 2px;
`;
const Text = styled(Typography)`
    text-transform: capitalize;
`;

const Profile = ({ account, setAccount }) => {
    const [open, setOpen] = useState(false);

    const handleClick = (event) =>{
        setOpen(event.currentTarget);
    }

    const handleClose = () =>{
        setOpen(false);
    }
    const logoutUser = () =>{
        setAccount('');
    }

  return (
       <>
          <Box onClick={handleClick}><Text style = {{ marginTop: 2, cursor: 'pointer', width:100,  }} >{account}</Text></Box>
          <Component
              anchorEl={open}
              open={Boolean(open)}
              onClose={handleClose}
          >
              <MenuItem onClick= {() => {handleClose(); logoutUser(); }}>
                  <PowerSettingNewIcon color='primary' fontSize='small' />
                  <Logout> Logout </Logout>
              </MenuItem>
          </Component>
       </>
  )
}

export default Profile;
