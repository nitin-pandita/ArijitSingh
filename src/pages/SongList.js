import React from 'react'
import cover1 from '../img/cover1.jpg'
import cover2 from '../img/cover2.jpg'
import cover3 from '../img/cover3.jpg'
import cover4 from '../img/cover4.jpg'
import { styled } from 'styled-components'
import { Link } from 'react-router-dom'
const SongList = () => {
    return (
        <Songs>
            <Cover>
                <h2>Agar tum saath ho</h2>
                <div className="line"></div>
                <Link>
                    <img src={cover1} alt="" />
                </Link>
            </Cover>
            <Cover>
                <h2>Ae Dil hai mushkil</h2>
                <div className="line"></div>
                <Link>
                    <img src={cover4} alt="" />
                </Link>
            </Cover>
            <Cover>
                <h2>Ve Kamilya</h2>
                <div className="line"></div>
                <Link>
                    <img src={cover3} alt="" />
                </Link>
            </Cover>

        </Songs>
    )
}

const Songs = styled.div`
    min-height: 100vh;
    padding: 5rem 10rem;
    overflow: hidden;
    h2 {
        padding: 1rem 0rem;
    }
`
const Cover = styled.div`
    padding-bottom: 10rem;
    .line {
        height: 0.5rem;
        background: #cccccc;
        margin-bottom: 3rem;
    }
    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`
export default SongList