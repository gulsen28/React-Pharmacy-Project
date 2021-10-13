import React from 'react'
import { useLocation } from 'react-router-dom'

export default function location() {
    const loc=useLocation();
    return (
        <div>
            <h1>{loc}</h1>
        </div>
    )
}
