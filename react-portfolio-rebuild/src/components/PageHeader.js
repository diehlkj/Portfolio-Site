import React from 'react'

export default function PageHeader({ title }) {
    return (
        <header className="page-header">
            <h1>{title}</h1>
            <div>
                <h2>KEN DIEHL</h2>
                <h3>WEB DEV</h3>
            </div>
        </header>
    )
}
