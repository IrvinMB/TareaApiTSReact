import axios from "axios"
import IAlbum from "../models/IAlbum"
import IFoto from "../models/IFoto";

export default async function fetchAlbums():Promise<IAlbum[]> {
    return new Promise((resolve, reject) => {
     axios
         .get('https://jsonplaceholder.typicode.com/albums')
         .then(res => {
             resolve(res.data as IAlbum[]);
         })
         .catch(err => reject(err))
 })  
 }
 export  async function fetchPhotos():Promise<IFoto[]> {
   return new Promise((resolve, reject) => {
     axios
         .get('https://jsonplaceholder.typicode.com/photos')
         .then(res => {
             resolve(res.data as IFoto[])
         })
         .catch(err => reject(err))
 })  
  
 }
