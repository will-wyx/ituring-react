import Head from './Head'

export default function Layout (props) {
  return (
    <div className="pt-20">
      <Head/>
      <div className="container xl:max-w-screen-lg 2xl:max-w-screen-lg mx-auto h-96">
        {props.children}
      </div>
    </div>
  )
}
