import React, { useContext, useState } from 'react';
import chat from "../assets/chat.png";
import close from "../assets/close.png"
import open from "../assets/open.png"
import { ProfilesContext } from './ProfilesContext';
import ProfileList from './RenderProfileList';


function Chat() {

    //hooks
    const [isChatOpen, setIsChatOpen] = useState(false);
    const profilesData = useContext(ProfilesContext);

    //renderFunctions
    const renderChatHeader = ()=>{
return(<div><div className='header'>
    <div> <img src={chat} alt='noimg'/>
    Chats</div>
   
    <img src={isChatOpen?open:close} alt='noimg' onClick={()=>{setIsChatOpen(!isChatOpen)}}/>
    </div></div>)
    }

    const renderChatList = ()=>{
        return(<div className='chatList'>{
            <ProfileList startIndex={0} endIndex={profilesData?.users.length}/>
        }</div>)
    }
  return (
    <div className='ChatWrapper'>
        {renderChatHeader()}
        {isChatOpen && renderChatList()}
    </div>
  )
}

export default Chat