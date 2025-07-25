import Conversation from "../models/conversation.model.js";
import Message       from "../models/message.models.js";  
import { getReceiverSocketId } from "../socket/socket.js";
import { io } from "../socket/socket.js";

export const sendMessage = async (req, res) => {
  try {
    const { message }      = req.body;
    const { id: receiverId } = req.params;        
    const senderId         = req.user._id;            
    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

   
    const newMessage = await Message.create({
      senderId,
      receiverId,
      message,
    });

    
    conversation.messages.push(newMessage._id);
    
    await conversation.save();
    await newMessage.save() ; 

   // socket io functionality will go here 
   const receiverSocketId = getReceiverSocketId(receiverId);

   if(receiverSocketId){
    // emit the new message to the receiver
    io.to(receiverSocketId).emit("newMessage" , newMessage);
   }
   


  
    res.status(201).json(newMessage);
  } catch (error) {
    console.log("error in sendMessage controller:", error.message);
    res.status(500).json({ error: "internal server error" });
  }
};

export const getMessages = async(req , res)=>{
    try {
        const{id : userToChatId} = req.params ; 
        const senderId = req.user._id ; 
         const conversation = await Conversation.findOne({
            participants :{$all:[senderId , userToChatId]} , 

         }).populate("messages") ; 

if(!conversation) return res.status(200).json([]); 
  const messages = conversation.messages ; 
     res.status(200).json(messages);

    } catch (error) {
         console.log("error in getMessages controller:", error.message);
    res.status(500).json({ error: "internal server error" });
    }
}