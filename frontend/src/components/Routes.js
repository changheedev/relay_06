import React from "react";
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import PostPage from '../pages/PostPage'
import GalleryPage from '../pages/GalleryPage'
import GalleryUploadPage from '../pages/GalleryUploadPage'
import GalleryPhotoPage from '../pages/GalleryPhotoPage'



function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={PostPage}/>
                <Route exact path='/gallery' component={GalleryPage}/>
                <Route exact path='/gallery/upload' component={GalleryUploadPage}/>
                <Route exact path='/gallery/:image' component={GalleryPhotoPage}/>
            </Switch>
        </Router>
    );
}

export default Routes;