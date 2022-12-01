import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/system";
import {
  Navbar,
  Feed,
  VideoDetails,
  ChannelDetails,
  SearchFeed,
} from "./components";

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Feed />}></Route>
          <Route path="/video/:id" element={<VideoDetails />}></Route>
          <Route path="/channel/:id" element={<ChannelDetails />}></Route>
          <Route path="/search/:searchTerm" element={<SearchFeed />}></Route>
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
