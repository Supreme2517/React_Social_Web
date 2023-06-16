
const SEND_MESSAGE = 'SEND_MESSAGE';


let initialState = {
    dialogs: [
      { id: 1, name: 'Andrey' },
      { id: 2, name: 'Dmitriy' },
      { id: 3, name: 'Alexandr' },
      { id: 4, name: 'Max' },
      { id: 5, name: 'Julia' }
     
    ],
    messages: [
      { id: 1, message: 'Hi' },
      { id: 2, message: 'How are you?' },
      { id: 3, message: 'Hey-Hey' },
      { id: 4, message: 'Nice' },
      { id: 5, message: 'Good night!' }
    ]
  }

const dialogsReduser = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:{
          let nextId = state.messages.length + 1;
            let body = action.newMessageBody;
            return {
              ...state,
             messages: [...state.messages, { id: nextId, message: body }]
             
            };
           
            
        }
        default:
            return state;
    }

}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })


export default dialogsReduser;