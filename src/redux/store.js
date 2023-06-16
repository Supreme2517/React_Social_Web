import dialogsReduser from "./dialogs-reducer";
import profileReducer from "./profile-reducer";



let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hello! My name is ..' },
        { id: 2, message: 'Hey! It is so cool!' },
        { id: 3, message: 'This is great course' },
        { id: 4, message: 'Thanks' },
        { id: 5, message: 'I love you!' }
      ],
      newPostText: 'Your Text'
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Andrey' },
        { id: 3, name: 'Alexandr' },
        { id: 4, name: 'Max' },
        { id: 5, name: 'Julia' },
        { id: 2, name: 'Dmitriy' }
      ],
      messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Hey-Hey' },
        { id: 4, message: 'Nice' },
        { id: 5, message: 'Good night!' }
      ],
      newMessageBody: ''
    }
  },
  _callSubscriber() {
    console.log('State');
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReduser(this._state.dialogsPage, action);

    this._callSubscriber(this._state);

  }
}


export default store;