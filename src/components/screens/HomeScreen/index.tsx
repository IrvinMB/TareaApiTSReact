import React, { Component, useState } from 'react'
import { Text, View } from 'react-native'
import IAlbum from '../../../models/IAlbum'
import IFoto from '../../../models/IFoto'
import AlbumDetail from '../../molecules/AlbumDetails/index'
import Albumes from '../../organisms/AlbumList'

const Home: React.FC = () => {
    const [albumes, setAlbumes] = useState<IAlbum[]>([]);
    const [currentAlbum, setCurrentAlbum] = useState<number | null>(null);
    const [currentAlbumDetail, setCurrentAlbumDetail] = useState<IFoto | null>(null);
    return (
        <View>
             {currentAlbum ? (
 
                <AlbumDetail 
                setCurrentAlbum={setCurrentAlbum}
                setCurrentAlbumDetail={setCurrentAlbumDetail}  
                />
     
        ) : (
            <Albumes 
            albumes={albumes} 
            setAlbumes={setAlbumes} 
            setCurrentAlbum={setCurrentAlbum}
             />
            )}
     </View>
    )
}

export default Home
