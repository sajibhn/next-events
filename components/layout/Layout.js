import React from 'react'
import MainHeader from './MainHeader'

const layout = ({ children }) => {
    return (
        <>
            <MainHeader />
            <main>
                {children}
            </main>
        </>
    )
}

export default layout