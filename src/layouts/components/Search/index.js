import { useEffect, useRef, useState } from 'react';
import { faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import * as searchServices from "../../../services/searchService"
import { Wrapper as PopperWrapper } from "../../../components/Popper"
import AccountItem from '../../../components/AccountItem';
import { SearchIcon } from "../../../components/Icons";
import styles from "./Search.module.scss"
import { useDebounce } from '../../../hooks';

const cx = classNames.bind(styles)

function Search() {
    const [searchValue, setSearchValue] = useState("")
    const [searchResult, setSearchResult] = useState([])
    const [showResult, setShowResult] = useState(true)
    const [loading, setLoading] = useState(false)

    const debouncedValue = useDebounce(searchValue, 500)

    const inputRef = useRef()

    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResult([])
            return
        }

        const fetchAPI = async () => {
            setLoading(true)

            const result = await searchServices.search(debouncedValue)

            setSearchResult(result)
            setLoading(false)
        }

        fetchAPI()
    }, [debouncedValue]);

    const handleSearchResult = (e) => {
        const result = e.target.value
        if (!result.startsWith(" ")) {
            setSearchValue(result)
        }
    }

    const handleClear = () => {
        setSearchValue("")
        setSearchResult([])
        inputRef.current.focus()
    }

    const handleHideResult = () => {
        setShowResult(false)
    }

    return (
        // Using a wrapper <div> tag around the reference element solves
        // this by creating a new parentNode context.
        <div>
            <HeadlessTippy
                interactive
                appendTo={() => document.body}
                visible={showResult && searchResult.length > 0}
                render={attrs => (
                    <div className={cx("search-result")} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx("search-title")}>
                                Accounts
                            </h4>
                            {
                                searchResult.map(result => (
                                    <AccountItem key={result.id} data={result} />
                                ))
                            }
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx("search")}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Search accounts and videos"
                        onChange={handleSearchResult}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && !loading && (
                        <button className={cx("clear")} onClick={handleClear} >
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
    
                    {loading && <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />}
                    <button className={cx("search-btn")} onMouseDown={e => e.preventDefault()}>
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;