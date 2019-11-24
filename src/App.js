import React, { useState, useEffect } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import { 
  firebaseAppAuth,
  providers,
  getMessages,
  sendMessage
} from './config/firebase';

// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/database';

// import { config } from './config/config';

import Header from './components/Header';
import MessagesList from './components/MessagesList';
import Form from './components/Form';

import Button from '@material-ui/core/Button';

import './App.css';

const App = ({ signInWithGoogle }) => {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {

    (async () => {
      const messages = await getMessages();

      setMessages(messages);
    })()

  }, []);

  async function handleSignIn() {
    const res =  await signInWithGoogle();

    setUser(res.additionalUserInfo.profile);
  };

  return (
    <div className="App">
      <Header>
        {!user && (
          <Button 
            color="inherit"
            onClick={handleSignIn}
          >
            Sign in
          </Button>
        )}

        {user && (
          <Button 
            color="inherit"
            onClick={handleSignIn}
          >
            Sign out
          </Button>
        )}
      </Header>

      {user && (

        <>
          <MessagesList 
            messages={messages}   
          />
          
        
          <Form
            onSendMessage={this.handleSendMessage}
            onChange={this.handleOnChenge}
            value={message}
          />
        </>
      )}
    </div>
  );
} 

//   handleSignOut = async () => {
//     const res = await this.props.signOut();

//     console.log(res);

//     this.setState({
//       user: null
//     })
//   }

//   handleSendMessage = event => {
//     event.preventDefault();

//     const { message } = this.state;
//     const { name, picture } = this.state.user;

//     sendMessage({ text: message, name, picture }) 
//   }

//   handleOnChenge = event => {
//     this.setState({
//       message: event.target.value
//     })
//   }

//   render() {
//     const { user, message, messages } = this.state;

//     return (
//       <div className="App">
//         <Header onSignIn={this.handleSignIn}>
//           <Button color="inherit" onClick={this.handleSignIn}>Sign in</Button>
//         </Header>

//         {user && (

//           <>
//             <MessagesList 
//               messages={messages}   
//             />
            
          
//             <Form
//               onSendMessage={this.handleSendMessage}
//               onChange={this.handleOnChenge}
//               value={message}
//             />
//           </>
//         )}
//       </div>
//     );
//   }
// }



export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
