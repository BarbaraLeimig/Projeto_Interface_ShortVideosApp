// ao digitar rcfe, ele já cria um componente react e exporta automaticamente
import React, { useRef, useState } from 'react'
import VideoFooter from './components/footer/VideoFooter'
import VideoSidebar from './components/sidebar/VideoSidebar'
import "./Video.css"

function Video({ likes, messages, shares, name, description, music, url }) {

    const videoRef = useRef(null)
    const [play, setPlay] = useState(false)

    function handdleStart() {

        if (play) {
            videoRef.current.pause()
            setPlay(false)
        } else {
            videoRef.current.play()
            setPlay(true)
        }

    }


    return (
        <div className='video'>

            <video
                className='video__player'
                // controls // aplica a barra de controles do vídeo
                ref={videoRef}
                onClick={handdleStart}
                loop // para que o vídeo reproduza novamente ao terminar
                src={url}
            ></video>
            <VideoSidebar
                likes={likes}
                messages={messages}
                shares={shares}
            />
            <VideoFooter
                name={name}
                description={description}
                music={music}
            />
        </div>
    )
}

export default Video