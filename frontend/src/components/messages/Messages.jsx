import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages"
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message"
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
  const {messages , loading} =useGetMessages() ;
  useListenMessages() ; // This hook listens for new messages from the socket and updates the state
  const lastMessageRef = useRef(); 

useEffect(()=>{
  setTimeout(()=>{
    lastMessageRef.current?.scrollIntoView({
    behavior: "smooth",
  });
  },100)

},[messages])

  return (
    <div className="px-4 flex-1 overflow-auto">
       {!loading && messages.length > 0 && messages.map((message)=>(
       <div key ={message._id}
        ref = {lastMessageRef}
       >
          <Message key={message._id} message={message}/>

       </div>
       ))}

      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key = {idx}/>)}
      {!loading && messages.length === 0 && (
        <div className="text-center text-white-500 mt-4">
          No messages yet. Start the conversation!
        </div>
      )}
     
    </div>
  )
}

export default Messages