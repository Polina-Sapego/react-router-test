import { NavLink } from "react-router-dom"


function Cours(props) {
    const {title, id, slug} = props
  return (
    <div style={{border: '3px #00B344 ridge', width: '1090px', padding: '5px 0 5px 15px', margin: '50px 0 50px 150px'}}>
        <NavLink to={`${slug}`}>{title}</NavLink>
        <h3>{slug}</h3>
        <small>{id}</small>
    </div>
  )
}

export default Cours