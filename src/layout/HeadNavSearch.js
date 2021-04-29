import InputSearch from '../components/InputSearch'

export default function HeadNavSearch (props) {
  return (
    <li>
      <InputSearch placeholder={props.placeholder} className="pl-4"/>
    </li>
  )
}
