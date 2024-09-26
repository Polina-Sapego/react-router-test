import { NavLink } from "react-router-dom"


function Menu() {
  return (
    <nav>
        <NavLink style={({isActive}) => isActive ? {color: 'lightyellow', textDecoration: 'none'} : {}}
        to="/" end> Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
        <NavLink to='/courses'>Courses</NavLink>
    </nav>
  )
}

export default Menu