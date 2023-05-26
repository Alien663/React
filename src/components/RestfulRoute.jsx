import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
const RestfulRoute = (props) => {
    const { iid } = useParams()
    return(
        <div>Hello {iid}</div>
    )
}
export default RestfulRoute