import { Link } from 'react-router-dom'
import './Head.css'
import HeadNavItem from './HeadNavItem'
import HeadCompose from './HeadCompose'
import HeadNavDropdown from './HeadNavDropdown'

const data = {
  notificationMenu: [
    { to: '/', text: '新提醒' },
    { to: '/', text: '短消息' },
  ]
}

export default function Head () {
  return (
    <div className="w-full h-14 bg-indigo-800 border-b border-indigo-900 leading-14 head-shadow">
      <div className="container xl:max-w-screen-lg 2xl:max-w-screen-lg mx-auto h-full flex">
        <Link className="logo" to="/"/>
        <ul className="flex flex-1">
          <HeadNavItem to="/book">图书</HeadNavItem>
          <HeadNavItem to="/article">文章</HeadNavItem>
        </ul>
        <ul className="flex">
          <HeadNavDropdown items={data.notificationMenu}>提醒</HeadNavDropdown>
          <HeadNavItem to="/user/cart">购书袋</HeadNavItem>
          <HeadCompose to="/article/write">写作</HeadCompose>
        </ul>
      </div>
    </div>
  )
}
