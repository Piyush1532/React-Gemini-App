import React from 'react'
import './sidebar.css'
import {assets} from "../assets/assets"
const SideBar = () => {
  return (
    <div>
      <div className="sidebar">
        <div className="top">
            <img src={assets.menu_icon} className='menu'/>
            <div className="newChat">
                <img src={assets.plus_icon} alt="" />
                <p>New Chat</p>
            </div>
            <div className="recent">
                <p className='recentTitle'>Recent</p>
                <div className="recentEntry">
                    <img src={assets.message_icon} alt="" />
                    <p>What is react ...</p>
                </div>
            </div>
            </div>
        <div className="bottom">
            <div className="bottomItem recentEntry">
                <img src={assets.question_icon} alt="" />
                <p>Help</p>
            </div>
            <div className="bottomItem recentEntry">
                <img src={assets.history_icon} alt="" />
                <p>Activity</p>
            </div>
            <div className="bottomItem recentEntry">
                <img src={assets.setting_icon} alt="" />
                <p>Setting</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar
