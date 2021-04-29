import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import './Head.css'
import HeadNavLink from './HeadNavLink'
import HeadNavCompose from './HeadNavCompose'
import HeadNavDropdown from './HeadNavDropdown'
import HeadNavSearch from './HeadNavSearch'

const data = {
  notificationMenu: [
    { to: '/alarm', text: '新提醒' },
    { to: '/', text: '短消息' },
  ],
  userMenu: [
    { to: '/', text: '我的空间' },
    { to: '/', text: '我的文章' },
    { to: '/', text: '拥有的书' },
    { to: '/', text: '拥有的课' },
    { to: '/', text: '个人设置' },
    { to: '/', text: '帮助' },
    { divider: true },
    { to: '/', text: '退出' },
  ]
}

export default function Head () {
  const history = useHistory()
  const handleSearch = () => {
    history.push('/search')
  }
  return (
    <div className="w-full h-14 bg-indigo-800 border-b border-indigo-900 leading-14 head-shadow fixed top-0">
      <div className="container xl:max-w-screen-lg 2xl:max-w-screen-lg mx-auto h-full flex">
        <Link className="logo" to="/"/>
        <ul className="flex flex-1">
          <HeadNavLink to="/book">图书</HeadNavLink>
          <HeadNavLink to="/article">文章</HeadNavLink>
          <HeadNavSearch placeholder="技术改变世界 阅读塑造人生" onSearch={handleSearch}/>
        </ul>
        <ul className="flex">
          <HeadNavDropdown items={data.notificationMenu}>提醒</HeadNavDropdown>
          <HeadNavLink to="/user/cart">购书袋</HeadNavLink>
          <HeadNavDropdown items={data.userMenu}><img src="/images/127606.png" alt="lliw"
                                                      className="inline-block mr-2"/><span>lliw</span></HeadNavDropdown>
          <HeadNavCompose to="/article/write">写作</HeadNavCompose>
        </ul>
      </div>
    </div>
  )
}
