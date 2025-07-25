import useConversation from "../../../zustand/useConversation";
import { useAuthContext } from "../../context/AuthContext"

const Message = ({message}) => {
   const{authUser} =useAuthContext();
  const{selectedConversation} = useConversation() ; 
 const fromMe = message?.senderId === authUser?._id ;

 const chatClassName = fromMe ?'chat-end' : 'chat-start' ;
 const profilePic = fromMe ? selectedConversation?.profilePic :authUser.profilePic ;
 const bubbleBgColor = fromMe ?'bg-green-500' : "bg-gray-700" ; 
const shakeClass = message.shouldShake ? "shake" : "" ; 

  return (
    <div className={`chat ${chatClassName}`}>
        <div className="chat-image avatar">
    <div className="w-10 rounded-full">
    <img alt="tailwind css chat bubble" src ={profilePic}/>
    </div>
        </div>
        <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass}`}>
       {message.message}
        </div>
         <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
       {message.createdAt && new Date(message.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
    </div>
  )
}

export default Message