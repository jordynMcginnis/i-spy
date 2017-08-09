var React=require('react');
var NavLink=require('react-router-dom').NavLink;

function Nav () {
  return (
     <ul className='nav'>
      <li>
        <NavLink activeClassName='active' to='/first'>
          First Game
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/second'>
          Second Game
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/third'>
          Third Game
        </NavLink>
      </li>
    </ul>
  )
}
module.exports = Nav;