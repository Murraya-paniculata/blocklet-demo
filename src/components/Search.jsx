import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { useState } from 'react'

export default function Search(props) {
    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
        if(searchText) props.onSearchQuery(searchText)
    }

    const handleEnterKey = (e) => {
        if(e.keyCode === 13 && searchText) {
            handleSearch()
        }
    }

    return (
        <div className='input-group w-75 mx-auto'>
            <span role="search" onClick={() => handleSearch()} className="input-group-text" id="basic-addon1">
                <BsSearch />
            </span>
            <input disabled={props.loading} onKeyUp={(e) => handleEnterKey(e)} value={searchText} onChange={(e) => setSearchText(e.target.value)} type="text" className="form-control" aria-label="Username" placeholder='Search your transaction hash or a block index' />
        </div>
    )
}

