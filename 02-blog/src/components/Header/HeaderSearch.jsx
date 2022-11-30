import React from 'react';
import InputCustom from '../shared/Input';

export default function HeaderSearch() {

    return (
        <div className="tcl-col-4">
            <form action="/search.html" method="get">
                <InputCustom isInputSearch={true} type="text" prefixTag={<i className='ion-search'></i>} aria-label="Search" name="query" >Search articles here ...</InputCustom>
            </form>
        </div>
    )

}
