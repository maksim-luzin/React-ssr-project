import React, { ChangeEvent } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { Field, Routes, Sort } from '../../enums';

import styles from './styles.module.css'


export const Header = () => {
    const location = useLocation()
    const history = useHistory();
    const goBackHandler = () => history.goBack();
    const isMainPage = location.pathname === Routes.Main;
    const queries = new URLSearchParams(location.search);

    const sortHandler = ({ target }: ChangeEvent<HTMLSelectElement>) => {
        queries.set(Field.Sort, target.value);
        history.push({ ...location, search: queries.toString() })
    }

    const searchHandler = ({ target }: ChangeEvent<HTMLInputElement>) => {
        if (target.value) {
            queries.set(Field.Search, target.value);
        } else {
            queries.delete(Field.Search);
        }

        history.push({ ...location, search: queries.toString() })
    }

    return (
        <div className={styles.wrapper} >
            {isMainPage
                ? <div></div>
                : <p className={styles.back} onClick={goBackHandler}>&#8592;</p>
            }
            {
                isMainPage
                    ? (
                        <div className={styles.actions}>
                            <input className={styles.search} onChange={searchHandler} value={queries.get(Field.Search) || ''} placeholder='Search' />
                            <select className={styles.sort} onChange={sortHandler} value={queries.get(Field.Sort) || Sort.ASC}>
                                <option value={Sort.ASC}>Sort &#8593;</option>
                                <option value={Sort.DESC}>Sort &#8595;</option>
                            </select>
                        </div>
                    )
                    : (
                        <Link to={Routes.Main} className={styles.home}>Home</Link>
                    )
            }
        </div>
    )
};
