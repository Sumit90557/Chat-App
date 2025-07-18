import { IoSearchSharp } from "react-icons/io5";
import { useState } from "react";
import useConversation from "../../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
  const[search , setSearch] = useState("") ;
  const{setSelectedConversation} = useConversation() ;
const{conversations} = useGetConversations() ; 

  const handleSubmit = (e) => {
e.preventDefault() ; 
  if(!search) return ; 
  if(search.length<3){
return toast.error("Search query must be at least 3 characters long") ;
  }
  const conversation = conversations.find(
    (conv) =>
      conv.username.toLowerCase().includes(search.toLowerCase()) ||
      conv.fullName.toLowerCase().includes(search.toLowerCase())
  );

  if(conversation){
    setSelectedConversation(conversation) ; 
    setSearch('') ;
  }
  else {
    toast.error("no such user found") ;
  }

  }


  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 p-2">
      <input
        type="text"
        placeholder="Search…"
        className="input input-bordered !rounded-full px-4 py-2 "
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="submit"
        className="btn btn-circle bg-green-500 text-white hover:bg-green-600"
      >
        <IoSearchSharp className="w-6 h-6 outline-none"/>
      </button>
    </form>
  );
};

export default SearchInput;
