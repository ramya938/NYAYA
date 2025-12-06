import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Chatbot.css";
import { FaMicrophone, FaVolumeUp, FaVolumeMute } from "react-icons/fa";

function Chatbot() {
  const location = useLocation();
  const navigate = useNavigate();

  const category = location.state?.category || null;

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(
    category
      ? [{ sender: "ai", text: `You selected ${category}. What is your doubt?` }]
      : []
  );

  const [isTyping, setIsTyping] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(true);

  // ⭐ Stop any speaking immediately
  const stopVoice = () => {
    window.speechSynthesis.cancel();
  };

  // ⭐ Speak answer only if voice is enabled
  const speakAnswer = (text) => {
    stopVoice(); // Stop previous voice

    if (!voiceEnabled) return;

    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-IN";
    speech.rate = 1;
    window.speechSynthesis.speak(speech);
  };

  // ⭐ Voice Input
  const startListening = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-IN";
    recognition.start();

    recognition.onresult = (event) => {
      const speech = event.results[0][0].transcript;
      setInput(speech);
    };
  };

  // ⭐ Send User Message
  const sendMessage = async () => {
    if (!input) return;

    stopVoice();

    setMessages((prev) => [...prev, { sender: "user", text: input }]);
    setIsTyping(true);

    try {
      const response = await fetch("http://localhost:5000/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: input }),
      });

      const data = await response.json();

      setMessages((prev) => [...prev, { sender: "ai", text: data.answer }]);
      speakAnswer(data.answer);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "Sorry, something went wrong." },
      ]);
    }

    setInput("");
    setIsTyping(false);
  };

  return (
    <div className="chatbot-page">   {/* ⭐ THIS CENTERS THE CHATBOT */}
      <div className="chat-container">
        
        <button className="back-btn" onClick={() => navigate("/home")}>
          ⬅ Back
        </button>

        <h2 className="chat-title">NYAYA Chatbot</h2>

        {/* ⭐ Voice Toggle Button */}
        <button
          className="voice-toggle"
          onClick={() => {
            setVoiceEnabled(!voiceEnabled);
            stopVoice();
          }}
        >
          {voiceEnabled ? (
            <>
              <FaVolumeUp size={18} /> Voice ON
            </>
          ) : (
            <>
              <FaVolumeMute size={18} /> Voice OFF
            </>
          )}
        </button>

        <div className="chat-box">
          {messages.map((msg, i) => (
            <div key={i} className={msg.sender === "user" ? "user-msg" : "ai-msg"}>
              {msg.text}
            </div>
          ))}

          {isTyping && <div className="ai-msg typing">NYAYA is typing...</div>}
        </div>

        <div className="input-area">
          <input
            type="text"
            placeholder="Ask your legal doubt..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button className="mic-btn" onClick={startListening}>
            <FaMicrophone size={18} />
          </button>

          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
