import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  StyleSheet,
  Button,
} from 'react-native';
import axios from 'axios';
import IFoto from '../../../models/IFoto';

export interface AlbumListProps {
  setCurrentAlbum: React.Dispatch<React.SetStateAction<number | null>>;
  setCurrentAlbumDetail: React.Dispatch<React.SetStateAction<IFoto | null>>;
}

const AlbumDetails: React.FC<AlbumListProps> = ({setCurrentAlbumDetail,setCurrentAlbum}) => {
  const [albums, setAlbumDetail] = useState<IFoto[]>([]);
  const fetchAlbumes = async () => {
    try {
      const {data} = await axios.get(
        'https://jsonplaceholder.typicode.com/photos',
      );

      setAlbumDetail(data);
    } catch (error) {
      console.error(error);
    }
  };

  const onAlbumClick = (detalle: IFoto) => {
    setCurrentAlbumDetail(detalle);
  };

  useEffect(() => {
    fetchAlbumes();
  }, []);

  return (
    <View>
        <Button  color="#841584" title="< - Back" onPress={() => setCurrentAlbum(null)} />
      {albums.length > 0 ? (
        <FlatList
          data={albums}
          renderItem={({item}) => (
            <View  style={styles.cuadro}>
              <Text style={styles.texto}> {item.title}</Text>
              <Image
                style={styles.image}
                source={{uri: item.thumbnailUrl}}
              />
            </View>
          )}
        />
      ) : (
        <ActivityIndicator />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: 75,
    height: 75,
    position: 'absolute', right: 8, top:10
  },
  cuadro: {
    display: 'flex',
    flexDirection: "row",
    backgroundColor: 'grey',
    height: 100,
    padding: 20,
    margin: 5
  },
  texto: {
    flexDirection: "row",
    maxWidth:300,
    fontWeight: 'bold',
    padding: 5
  },
  boton: {
    fontWeight: 'bold',
    backgroundColor: 'grey',
    padding: 5
  },
});
export default AlbumDetails;