import {actionTypes as types} from '../constants'
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { getAllQuestions } from '../utils/api';

export const getQuestions = () => dispatch => {
    console.log('res');
  dispatch(showLoading());
  getAllQuestions().then( (res, err) => {
    dispatch({type: types.GET_QUESTIONS, questions: res });
    dispatch(hideLoading());
  });
}