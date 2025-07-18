import MessageContainer from "../../components/messages/MessageContainer"
import Sidebar from "../../components/sidebar/Sidebar"

const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-white/10 bg-clip-padding backdrop-filter backdrop-blur-lg border border-white/30 shadow-md">
<Sidebar/>
<MessageContainer/>

    </div>
  )
}

export default Home