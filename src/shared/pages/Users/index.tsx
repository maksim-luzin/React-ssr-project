import React, { useCallback, useEffect, useMemo } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { usersSelector } from '../../selectors';
import { getUserInfo } from '../../actions';
import { User } from '../../components/User';

import styles from './styles.module.css';
import { useLocation } from 'react-router-dom';
import { Field, Sort } from '../../enums';
import { IUser } from 'types';
import { WritableDraft } from 'immer/dist/internal';
import { Helmet } from 'react-helmet-async';

export const UsersPage = () => {
    const location = useLocation()
    const dispatch = useAppDispatch()
    const users = useAppSelector(usersSelector);
    const queries = new URLSearchParams(location.search);
    const searchQuery = queries.get(Field.Search);
    const sortQuery = queries.get(Field.Sort) || Sort.ASC;

    const sortFunc = useCallback((a: WritableDraft<IUser>, b: WritableDraft<IUser>): number => {
        const sortedA = a.username.toLowerCase();
        const sortedB = b.username.toLowerCase();

        switch (sortQuery) {
            case (Sort.DESC):
                return sortedB.localeCompare(sortedA, 'en')
            default:
                return sortedA.localeCompare(sortedB, 'en')
        }
    }, [sortQuery])

    const viewUsers = useMemo(() => {
        if (!users) return null;

        const filteredUsers = searchQuery
            ? users.filter(user => user.username.toLowerCase().includes(searchQuery.toLowerCase()))
            : [...users]

        const sortedUsers = filteredUsers.sort(sortFunc);

        return sortedUsers
    }, [users, searchQuery, sortQuery])

    useEffect(() => {
        if (!users) dispatch(getUserInfo());
    }, [users])

    if (!viewUsers) {
        return <></>
    }

    return (
        <>
            <Helmet>
                <title>Users</title>
                <meta name='description' content='List of users' />
            </Helmet>
            <div className={styles.wrapper}>
                {
                    viewUsers.map(user => <User key={user.id} user={user} />)
                }
            </div>
        </>
    )
};
