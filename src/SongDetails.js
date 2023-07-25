import cover1 from '../src/img/cover1.jpg'
import cover3 from '../src/img/cover3.jpg'
import cover4 from '../src/img/cover4.jpg'
import secondary1 from '../src/img/secondary1.jpg'
import secondary2 from '../src/img/secondary2.jpg'
import secondary3 from '../src/img/secondary3.jpg'
export const SongDetails = () => {
    return [
        {
            title: 'Agar tum saath ho',
            mainImg: cover1,
            url: '/list/cover1',
            secondaryImg: secondary2,

            award: [
                {
                    title: 'Amazing voice',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quis',
                },
                {
                    title: 'Nice voice',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quis',
                },
                {
                    title: 'So deep voice',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quis',
                },
            ],
        },
        {
            title: 'Ae Dil hai muskhil',
            mainImg: cover4,
            url: '/list/cover4',
            secondaryImg: secondary1,
            award: [
                {
                    title: 'Amazing voice',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quis',
                },
                {
                    title: 'Love his voice',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quis'
                },
                {
                    title: 'So deep voice',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quis',
                },
            ],
        },
        {
            title: 'Ve Kamliya',
            mainImg: cover3,
            url: '/list/cover3',
            secondaryImg: secondary3,
            award: [
                {
                    title: 'Amazing voice',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quis',
                },
                {
                    title: 'Nice voice',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quis',
                },
                {
                    title: 'So deep voice',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quis',
                },
            ],
        },
    ]
}