import React from 'react'
import DateEx from './dateEx'

export default function FooterEx() {
    return (
        <footer  className="me-2 text-light">
             <div className="d-flex justify-content-center pt-5 text-light ">
                <DateEx/>
            </div>
        {'\u00a9'}Tal Malka
        </footer>
    )
}