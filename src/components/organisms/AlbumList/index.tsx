import React, { useEffect } from 'react'
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native'
import IAlbum from '../../../models/IAlbum'
import AlbumListItem from '../../molecules/AlbumListItem/'
import fetchAlbums from '../../../services/API'


export interface AlbumDetailProps{
    albumes: IAlbum[];
    setCurrentAlbum: React.Dispatch<React.SetStateAction<number | null>>
    setAlbumes: React.Dispatch<React.SetStateAction<IAlbum[]>>;
}

const Albumes: React.FC<AlbumDetailProps> = ({
    setAlbumes,
    albumes, 
    setCurrentAlbum, 
}) => {

    const API = async () => {
        try{
           const albumesResponse:IAlbum[] = await fetchAlbums();    
            setAlbumes(albumesResponse)
        } catch (ex) {
            console.error(ex);
        }
    }

    useEffect(() => {
        API();
    }, []);

    return (
        <View style={styles.contenedor}>
            {albumes.length > 0 ? (
                <FlatList
                data={albumes}
                renderItem={({item, index}) => (
                  <AlbumListItem
                    key={item.id}
                    Album={item}
                    index={index}
                    setSelectedAlbum={setCurrentAlbum}
                  />
                )}
              />
            ) : (
                <ActivityIndicator color="#000" />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    contenedor: {
      display: 'flex',
      padding: 16,
  
    },
    titulo:{
        fontSize: 20,
        marginBottom: 10,
        marginTop: 10,
        textAlign: 'center'
    }
  });

export default Albumes
