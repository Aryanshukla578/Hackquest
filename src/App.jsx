import ChatbotIcon from "./components/ChatbotIcon";
import ChatForm from "./components/ChatForm";

const App = () => {
  return(
    <div className="container">
      <div className="chatbot-popup">
        <div className="chat-header">
          <div className="header-info">
            <ChatbotIcon />
            <h2 className="logo-text">Chatbot</h2>
          </div>
          <button class="material-symbols-outlined">arrow_upward</button>
        </div>
        {/*Chatbot body*/}
        <div className ="chat-body">
          <div className="message bot-message">
          <ChatbotIcon />
          <p className="message-text">
            Hey there<br /> How can I help you today?
          </p>
          </div>
        <div className="message user-message">
          <p className="message-text">
          nothing just want to meet you nothing more.
          </p>
          </div>
        </div>
        {/*Chatbot Footer*/}
        <div className="chat-footer">
        <ChatForm />
        </div>
      </div>
    </div>
  );
};

export default App;