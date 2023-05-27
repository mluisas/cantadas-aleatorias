import { useEffect, useState } from 'react'
import cantadas from './cantadas.json';

function Home(){
    const [cantada, setCantadas] = useState(cantadas[0]);
    useEffect(() => setCantadas(cantadaAleatoria()));
    return (
        <><h1>Cantadas que você merecia ouvir, mas seu crush não tem coragem de usar</h1><p>{cantada}</p><footer>Fonte: <a href='https://www.dicionariopopular.com/melhores-cantadas/'>Dicionário Popular</a></footer></>
    );
}

function cantadaAleatoria(){
    return cantadas[Math.floor(Math.random() * Object.keys(cantadas).length)];
}

export default Home;