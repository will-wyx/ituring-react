import { Link } from 'react-router-dom'
import './Head.css'
import HeadNavItem from './HeadNavItem'
import HeadCompose from './HeadCompose'

export default function Head () {
  return (
    <div className="w-full h-14 bg-indigo-800 border-b-2 border-indigo-900 leading-14 head-shadow">
      <div className="container xl:max-w-screen-lg 2xl:max-w-screen-lg mx-auto h-full flex">
        <Link className="logo" to="/"/>
        <ul className="flex flex-1">
          <HeadNavItem to="/book">图书</HeadNavItem>
          <HeadNavItem to="/article">文章</HeadNavItem>
        </ul>
        <ul className="flex">
          <HeadNavItem to="/">提醒</HeadNavItem>
          <HeadNavItem to="/">购书袋</HeadNavItem>
          <HeadCompose to="/">写作</HeadCompose>
        </ul>
      </div>
    </div>
  )
}
