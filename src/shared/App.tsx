import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { UsersPage } from './pages/Users';
import { AlbumsPage } from './pages/Albums';
import { PostsPage } from './pages/Posts';
import { Routes } from './enums';

import { Loading } from './components/Loading';
import { PostPage } from './pages/Post';
import { AlbumPage } from './pages/Album';
import { Header } from './components/Header';

import styles from './styles.module.css';

export const App = () => {
    return (
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.content}>
                <Switch >
                    <Route exact path={Routes.Main} component={UsersPage} />
                    <Route exact path={Routes.Users + '/:userId' + Routes.Albums} component={AlbumsPage} />
                    <Route exact path={Routes.Albums + '/:albumId'} component={AlbumPage} />
                    <Route exact path={Routes.Users + '/:userId' + Routes.Posts} component={PostsPage} />
                    <Route exact path={Routes.Posts + '/:postId'} component={PostPage} />
                    <Route render={() => '404!'} />
                </Switch>
            </div>
            <Loading />
        </div>
    );
};
