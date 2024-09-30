import { BrowserRouter, Routes, Route } from "react-router-dom";

import ListPost from './components/List/ListPost';
import AddPost from './components/Post/AddPost';
import UpdatePost from './components/atualizar/UpdatePost';
import ReadPost from './components/Read/ReadPost';

import AddComment from './components/Comment/AddComment';
import UpdateComment from './components/Comment/UpdateComment';

import Principal from './components/main/pag';

function App() {
  return (
    <div >
      <header >
        <BrowserRouter>
          <Routes>
            
          <Route path="/" element={<Principal/>} />
            <Route path="/post/" element={<ListPost/>} />
            <Route path="/addpost/" element={<AddPost/>} />
            <Route path="/updatepost/:id" element={<UpdatePost/>} />
            <Route path="/post/:id" element={<ReadPost/>} />
            <Route path="/comment/:postId/comments" element={<AddComment/>} />
            <Route path="/Updatecomment/:id" element={<UpdateComment/>} />



          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}
export default App;