import LinkButton from '../components/LinkButton'

export default function HeadCompose (props) {
 return (
   <li className="ml-5 pt-3">
     <LinkButton to={props.to}>{props.children}</LinkButton>
   </li>
 )
}
