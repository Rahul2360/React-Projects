import React, { useEffect } from 'react'
// Icons
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';

import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import avatar from '../data/avatar.jpg';

import { Chat, Cart, Notification, UserProfile } from '.';

import { useStateContext } from '../contexts/ContextProvider';

const Navbar = () => {
  const { activeMenu, setActiveMenu, isClicked, setisClicked, handleClick, screenSize, setscreenSize } = useStateContext();

  useEffect(() => {
    const handleResize = () => {
      setscreenSize(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])

  useEffect(() => {
    if(screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const NavButton = ({ title, customFunc, color, dotColor, icon }) => (
    <TooltipComponent
      content={title}
      position="BottomCenter"
    >
      <button type="button" onClick={customFunc} style={{ color }}
        className="relative text-xl rounded-full p-3 hover:bg-light-gray">
        <span className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2" style={{ backgroundColor: dotColor }} />
          {icon}
      </button>
    </TooltipComponent>
  )
  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton
        title="Menu"
        customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        color="blue"
        icon={<AiOutlineMenu />}
      ></NavButton>

      <div className="flex">
        <NavButton
          title="Cart"
          customFunc={() => handleClick('cart')}
          color="blue"
          icon={<FiShoppingCart />}
        ></NavButton>
        <NavButton
          title="Chat"
          customFunc={() => handleClick('chat')}
          color="blue"
          dotColor="#03C9D7"
          icon={<BsChatLeft />}
        ></NavButton>
        <NavButton
          title="Notification"
          customFunc={() => handleClick('notification')}
          color="blue"
          dotColor="#03C9D7"
          icon={<RiNotification3Line />}
        ></NavButton>
        <TooltipComponent
          content="Profile"
          position="BottomCenter"
        >
          <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg" onClick={() => handleClick('userProfile')}>
            <img
              className='rounded-full w-8 h-8'
              src={avatar} alt="profile_img" />

            <p>
              <span className='text-gray-400'> Hi, </span> {' '}
              <span className='text-gray-400 font-bold ml-1 text-14'> Rahul</span>
            </p>

            <MdKeyboardArrowDown className='text-gray-400 text-14'></MdKeyboardArrowDown>
          </div>
        </TooltipComponent>

        {isClicked.cart && <Cart/>}
        {isClicked.chat && <Chat/>}
        {isClicked.notification && <Notification/>}
        {isClicked.userProfile && <UserProfile/>}

      </div>

    </div>
  )
}

export default Navbar