import React from 'react';
import InputCustom from '../shared/Input';

export default function HeaderSearch() {
    return (
        <div className="tcl-col-4">
            <form action="/search.html" method="get">
                <InputCustom inputType="text" inputPlaceholder="Search articles here ..." />
            </form>
        </div>
    )
}
