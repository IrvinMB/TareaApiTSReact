// import React, {Component} from 'react';
// import {FlatList, Text, View} from 'react-native';
// import {connect} from 'react-redux';

import React from "react";
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from "react-native";
import IFoto from "../../../models/IFoto";
import {fetchPhotos} from '../../../services/API'
// import {ThunkDispatch} from 'redux-thunk';
// import {IAction} from '../../../models/IAction';
// import IFoto from '../../../models/IFoto';
// import IPublicacion from '../../../models/IPublicacion';
// import {IState} from '../../../models/IState';
// import ITodo from '../../../models/ITodo';
// import IUser from '../../../models/IUsers';
// import {fetchPublicaciones} from '../../../store/actions/Publicaciones';

interface Props {
    fotos: IFoto[];
    fetchAlbumes: () => void;
    setFotos: React.Dispatch<React.SetStateAction<IFoto[] | null>>;
  setCurrentDetail: React.Dispatch<React.SetStateAction<IFoto | null>>;
}

class DetalleFotos extends React.Component<Props>{
  
    componentDidMount(){
        this.props.fetchAlbumes();
    }
    onTodoClick = (album: IFoto) => {
        this.props.setCurrentDetail(album);
      };
      fetchAlbumes = async () => {
        try {
          const lasFotos:IFoto[] = await fetchPhotos();
          this.props.setFotos(lasFotos);
        } catch (error) {
          console.error(error);
        }
      };
    Render(){
        return (
            <View>
              {this.props.fotos.length > 0 ? (
                <FlatList
                  data={this.props.fotos}
                  renderItem={({item}) => (
                    <TouchableOpacity onPress={() => this.onTodoClick(item)}>
                      <Text>{item.title}</Text>
                    </TouchableOpacity>
                  )}
                />
              ) : (
                <ActivityIndicator />
              )}
            </View>
          );
    }
  
}
export default DetalleFotos;