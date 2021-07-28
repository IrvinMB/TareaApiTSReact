import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import IFoto from '../../../models/IFoto';
import {fetchPhotos} from '../../../services/API'
export interface TodoListProps {
  setCurrentDetail: React.Dispatch<React.SetStateAction<IFoto | null>>;
}

const AlbumDetail: React.FC<TodoListProps> = ({setCurrentDetail}) => {
  const [albumes, setAlbumes] = useState<IFoto[]>([]);
  const fetchAlbumes = async () => {
    try {
      const lasFotos:IFoto[] = await fetchPhotos();
      setAlbumes(lasFotos);
    } catch (error) {
      console.error(error);
    }
  };

  const onTodoClick = (album: IFoto) => {
    setCurrentDetail(album);
  };

  useEffect(() => {
    fetchAlbumes();
  }, []);

  return (
    <View>
      {albumes.length > 0 ? (
        <FlatList
          data={albumes}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => onTodoClick(item)}>
              <Text>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      ) : (
        <ActivityIndicator />
      )}
    </View>
  );
};

export default AlbumDetail;