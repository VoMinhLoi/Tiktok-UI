import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PobberWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SearchIcon } from '~/components/Icons';
import { useDebounce } from '~/hooks';
import * as searchServices from '~/services/searchService';
const cx = classNames.bind(styles);
function Search() {
    const inputSearchValueRef = useRef();
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    const debouncedValue = useDebounce(searchValue, 700);
    // console.log(debouncedValue);
    useEffect(() => {
        if (debouncedValue.trim()) {
            const fetchAPI = async () => {
                setLoading(true);
                const result = await searchServices.search(debouncedValue);
                setSearchResult(result);
                setLoading(false);
            };
            fetchAPI();
        } else {
            setSearchResult([]);
        }
    }, [debouncedValue]);
    const hanldeChange = (e) => {
        const userTypeSearchValueType = e.target.value;
        if (!userTypeSearchValueType.startsWith(' ')) setSearchValue(userTypeSearchValueType);
    };
    const hanldeClearSearch = () => {
        setSearchValue('');
        setSearchResult([]);
        inputSearchValueRef.current.focus();
    };
    return (
        // Using a wrapper <div> tag around the reference element solves
        // this by creating a new parentNode context.
        <div>
            <HeadlessTippy
                interactive
                visible={showResult && searchResult.length > 0}
                render={(attrs) => {
                    return (
                        <div className={cx('search-result')} tabIndex={-1} {...attrs}>
                            <PobberWrapper>
                                <h1 className={cx('search-title')}>Accounts</h1>
                                {searchResult.map((user, index) => {
                                    return <AccountItem data={user} key={index} itemKey={index} />;
                                })}
                            </PobberWrapper>
                        </div>
                    );
                }}
                onClickOutside={() => {
                    setShowResult(false);
                }}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputSearchValueRef}
                        value={searchValue}
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                        onChange={hanldeChange}
                        onFocus={() => {
                            setShowResult(true);
                        }}
                    />
                    {!loading && !!searchValue && (
                        <button className={cx('clear')} onClick={hanldeClearSearch}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                    <button
                        className={cx('search-btn')}
                        onMouseDown={(e) => {
                            e.preventDefault();
                        }}
                    >
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
