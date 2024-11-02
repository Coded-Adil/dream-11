import PropTypes from 'prop-types';


const NavBar = ({ coin }) => {
     return (
          <div className="navbar sticky top-0 z-10 bg-transparent backdrop-blur-xl container mx-auto">
               <div className="flex-1">
                    <img src="logo.png" />
               </div>
               <div className="flex gap-2">
                    <ul className="menu menu-horizontal px-1">
                         <li><a>Home</a></li>
                         <li><a>Fixture</a></li>
                         <li><a>Teams</a></li>
                         <li><a>Schedules</a></li>

                    </ul>
                    <div className="border btn rounded-lg flex">
                         <p className="font-bold"><span className="font-bold">{coin}</span> Coin</p>
                         <img src="coin.png" />
                    </div>
               </div>
          </div>
     );
};
NavBar.propTypes = {
     coin: PropTypes.object,
}   

export default NavBar;