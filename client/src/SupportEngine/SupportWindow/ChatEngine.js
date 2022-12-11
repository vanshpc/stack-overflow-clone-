import React from 'react'
import ChatBot from 'react-simple-chatbot'


const ChatEngine = () => {
    const steps = [
      {

        id: "Greet",
  
        message: "Hello, Welcome to our shop",
  
        trigger: "Done",
  
      },
  
      {
  
        id: "Done",
  
        message: "Please enter your name !",
  
        trigger: "waiting1",
  
      },
  
      {
  
        id: "waiting1",
  
        user: true,
  
        trigger: "Name",
  
      },
  
      {
  
        id: "Name",
  
        message: "Hi {previousValue}, Please select your question field",
  
        trigger: "issues",
  
      },
  
      {
  
        id: "issues",
  
        options: [
  
          {
  
            value: "React",
  
            label: "React",
  
            trigger: "React",
  
          },
  
          { value: "Angular", label: "Angular", trigger: "Angular" },
  
        ],
  
      },
  
      {
  
        id: "React",
  
        message:
  
          "Thanks for letting your React question, Our team will provide answer soon",
  
        end: true,
  
      },
  
      {
  
        id: "Angular",
  
        message:
  
          "Thanks for letting your Angular quetstion, Our team will provide answer soon",
  
        end: true,
  
      },
  
    ]; 
    
    

        
    
     
    
        
    
      
  return (
    <>
    <ChatBot steps={steps}/>
    </>
  )
}

export default ChatEngine