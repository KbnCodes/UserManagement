import { Divider } from '@material-ui/core'
import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/usershow.css'

const Sidebar = () => {
    return (
        <div className="container sidebar_style" >
            <div >
                <Link >profile</Link>
                <Divider/>
                <Link > Posts</Link>
                <Divider/>
                <Link>Gallery</Link>
                <Divider/>
                <Link>ToDo</Link>
            </div>

            
        </div>
    )
}

export default Sidebar
