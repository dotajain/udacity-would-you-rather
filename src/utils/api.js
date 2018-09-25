import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from './_DATA';

export function getAllUsers() {
  return _getUsers();
}

export function getQuestions() {
  return _getQuestions();
}

export function getInitialData() {
  return Promise.all([
    getAllUsers(),
    getQuestions(),
  ]).then(([users, questions]) => ({
    users,
    questions,
  }));
}

export function saveQuestion(question) {
  return _saveQuestion(question);
}

export function saveQuestionAnswer({ authedUser, qid, answer }) {
  return _saveQuestionAnswer({ authedUser, qid, answer });
}