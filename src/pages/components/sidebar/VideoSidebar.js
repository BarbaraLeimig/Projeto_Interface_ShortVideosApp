import React, { useState } from 'react' //useState: importante para acompanhar o estado daquela decisão. Ex: like/deslike, play/pause.
import "./VideoSidebar.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';

function VideoSidebar({ likes, messages, shares }) {

    const [liked, setLiked] = useState(false)

    function handdleLike() {
        setLiked(!liked)
    }

    return (
        <div className='videoSidebar'>
            <div
                className='videoSidebar__options'
                onClick={handdleLike}
            >
                {liked ? <FavoriteIcon fontSize='large' /> : <FavoriteBorderIcon fontSize='large' />} {/*Esta é a condição Ternaria; O : simboliza um else, assim como a ? simboliza um if*/}
                <p>{liked ? likes + 1 : likes} </p>
            </div>

            <div className='videoSidebar__options'> {/* alt + shift + seta p/ cima ou p/ baixa duplica a linha na direção que você escolher*/}
                <ChatIcon fontSize='large' />
                <p> {messages} </p> {/*coloca entre {} porque é uma variável do JS */}
            </div>

            <div className='videoSidebar__options'>
                <ShareIcon fontSize='large' />
                <p> {shares} </p>
            </div>
        </div>
    )
}

export default VideoSidebar