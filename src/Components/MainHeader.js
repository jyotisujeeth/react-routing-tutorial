import { NavLink } from 'react-router-dom';
import classes from './MainHeader.module.css';


const MainHeader = () => {
    return (
      <header classNmae={classes.header}>
        <nav>
          <ul>
            <li>
              <NavLink activeClassName={classes.active} to="/welcome">
                welcome
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName={classes.active} to="/Products">
                Products
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
};

export default MainHeader;





