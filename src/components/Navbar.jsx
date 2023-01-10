import { Stack } from "@mui/material";
import youtubeIcon from '../images/youtube-svgrepo-com.svg';
import { Link } from 'react-router-dom'
import SearchBar from "./SearchBar";
const Navbar = () => {
    return (
        <Stack direction='row' alignItems="center" p={2} sx={{ position: 'sticky', background: '#000', top: 0, justifyContent: 'space-between' }}>
           <Link to='/' style={{display: 'flex', alignItems: 'center'}}>
            <img src={youtubeIcon} alt="logo" height={45} /> <span style={{color: '#fff', fontWeight: 'bolder', fontSize: '30px', marginLeft: '4px'}}>YouTube</span>
            </Link> 
            <SearchBar></SearchBar>
        </Stack>
    );
};

export default Navbar;