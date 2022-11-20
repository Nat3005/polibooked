import React from 'react'

function TabPanel({children, value, index}) {

    if(value===index) {
        return (
            <>{children}</>
        )
    }
}

export default TabPanel