import * as FileSystem from 'expo-file-system';
import {
  LOAD_POSTS,
  TOOGLE_BOOKED,
  REMOVE_POST,
  ADD_POST,
} from '../typesStore';
import { DB } from '../../db';

export const loadPosts = () => async (dispatch) => {
  const posts = await DB.getPosts();
  return dispatch({
    type: LOAD_POSTS,
    payload: posts,
  });
};

export const toogleBooked = (id) => ({
  type: TOOGLE_BOOKED,
  payload: id,
});

export const removePost = (id) => ({
  type: REMOVE_POST,
  payload: id,
});

export const addPost = post => async dispatch => {
  const fileName = post.img.split('/').pop();
  const newPath = FileSystem.documentDirectory + fileName;

  try {
    await FileSystem.moveAsync({
      to: newPath,
      from: post.img
    })
  } catch (error) {
    console.error('Error:', error);
  }

  const payload = {
    ...post,
    img: newPath
  }

  const id = await DB.createPost(payload);
  payload.id = id.toString();

  return dispatch({
    type: ADD_POST,
    payload
  });
};
