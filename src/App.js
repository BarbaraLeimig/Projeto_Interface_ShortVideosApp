import React, { useEffect, useState } from 'react';
import './App.css';
import Video from './pages/Video';
import db from "./config/firebase"
import { collection, getDocs } from 'firebase/firestore/lite';

function App() {

  let maxHeight; //settando o app para o inner height do html e ficar mais adaptado aos telefones
  if (window.innerHeight <= 700) {
    maxHeight = window.innerHeight
  }

  const [video, setVideos] = useState([]) // [] dentro do () porque vai criar uma lista e lista é array

  async function getVideos() { //indica que a função tem um processo assíncrono
    const videosCollection = collection(db, "videos") //cria conexão com o banco de dados
    const videosSnapshot = await getDocs(videosCollection) //getDocs busca os documentos que estão nessa collection
    //await diz pra o JS esperar ele obter aquelas informações porque alí há uma função assíncrona e ele trabalha de forma síncrona
    const videosList = videosSnapshot.docs.map(doc => doc.data()) //pega as informações de cada documento
    setVideos(videosList)
  }

  useEffect(() => {
    getVideos();
  }, []) // ,[] é criado para que naõ seja feito um loop

  return (
    <div className="App" style={{ maxHeight: maxHeight + "pxS" }}>
      <div className='app__videos'>

        {video.map((item) => { // passando deste modo, já entra todos os vídeos da coleção do banco de dados
          return (
            <Video //abaixo estão as props (propriedades)
              likes={item.likes}
              messages={item.messages}
              shares={item.shares}
              name={item.name}
              description={item.description}
              music={item.music}
              url={item.url}
            />
          )
        })}

        {/* Obs: ctrl + K + C é igual ao código selecionado trasnformado em comentário */}

        {/* <Video
          likes={217}
          messages={113}
          shares={98}
          name="barbara"
          description="Para esquentar no friozinho"
          music="Vozes ao fundo"
          url="https://firebasestorage.googleapis.com/v0/b/tiktok---jornadadev-d4d90.appspot.com/o/VID-20220428-WA0022.mp4?alt=media&token=ee2d7f32-5f83-4100-b010-9d294a34516c"
        /> */}

      </div>
    </div>
  );
}

export default App;

// para subir o projeto para o firebase, antes de fazer login com o comando firebase login, necessita utilizar o comando abaixo para evitar erro:
// Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
// Seguir os comandos do firebase, criar a pasta pública build quando for solicitado
// Depois de tudo configurado: npm run build
// Após finalizada a etapa anterior: firebase deploy