import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import UsersList from "./components/UsersList/UsersList";
import Home from "./components/Home/Home";
import AlbumList from "./components/AlbumList/AlbumList";
import PhotosList from "./components/PhotosList/PhotosList";
import AllAlbums from "./components/AllAlbums/AllAlbums";

function App() {
  return (
    <BrowserRouter>
      <div className='App text-center'>
        <Navbar />

        <Routes>
          <Route path={"/"} element={<Home />} />
          {/* <Route path={"/photo/:id"}  /> */}
          <Route path={"/albums"} element={<AllAlbums />} />
          <Route path={"/artists"} element={<UsersList />} />
          <Route path={"/albums/:userId"} element={<AlbumList />} />
          <Route path={"/photos/:albumId"} element={<PhotosList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
