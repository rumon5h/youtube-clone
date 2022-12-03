import {useState, useEffect} from 'react';
import {Stack, Box, Typography} from '@mui/material';
import {SideBar,Videos} from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const Feed = () => {
    const [selectedCategory, setSelectedCategory] = useState('New')
    const [videos, setVideos] = useState([])
    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
        .then((data) => setVideos(data.items))
    },[selectedCategory])
    return (
        <Stack sx={{flexDirection: {sx: 'column', md: 'row'}}}>
            <Box sx={{height: {sx: 'auto', md: 'fit-content'}, borderRight: '1px solid #3d3d3d', px:{sx:0, md: 2}}}>

            <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

            </Box>
            <Box p={2} sx={{overFlowY: 'auto', height: 'fit-content', flex: 2}}>
                <Typography variant='h4' fontWeight="bold" mb={2} sx={{color: 'white'}}>
                    {selectedCategory} <span style={{color: '#F31503'}}>videos</span>
                </Typography>
                <Videos videos={videos}/>
            </Box>
        </Stack>
    );
};

export default Feed;