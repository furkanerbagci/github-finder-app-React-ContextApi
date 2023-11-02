import React, { useContext } from 'react'
import { useState } from 'react';
import { UsersContext } from '../context/usersContext';
import { AlertContext } from '../context/alertContext';

const Search = () => {

    const [keyword , setKeyword] = useState('');
    const {searchUsers , users , clearResults} =useContext(UsersContext);
    const {displayAlert} = useContext(AlertContext)

    const onChange = (e) => {
        setKeyword(e.target.value)
        // this.setState({
        //     keyword: e.target.value
        // })
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if(keyword === '') {
            displayAlert('Anahtar Kelime Giriniz', 'warning');
        } else {
            searchUsers(keyword);
            // setState({ keyword: '' });
            setKeyword('');
        }
    }


        return (
        <div className="container my-3">
            <form onSubmit={onSubmit}>
                <div className="input-group">
                    <input type="text" value={keyword} onChange={onChange} className='form-control' placeholder='Anahtar Kelime' />
                    <button className="btn btn-primary" type='submit'>Ara</button>
                </div>
            </form>

            {
                users.length && <button onClick={clearResults} className="btn btn-outline-danger mt-2 btn-block">Sonuçları Temizle</button>
            }
           

        </div>
        )

}

export default Search