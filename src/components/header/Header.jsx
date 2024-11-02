import './Header.css'
import PropTypes from 'prop-types';


const Header = ({ coin, setCoin }) => {

     const addCoin = () => {
          setCoin(coin + 60000000);
     }

     return (
          <div className="container mx-auto my-8">
               <div className="hero bg-style min-h-screen">
                    <div className="hero-content text-center">
                         <div>
                              <img className='mx-auto' src="banner-main.png" alt="" />
                              <h1 className="text-5xl font-bold my-2">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                              <p className="py-6">
                                   Beyond Boundaries Beyond Limits
                              </p>
                              <div className='btn bg-black border border-[#E7FE29]'>
                                   <button onClick={addCoin} className="py-2 px-4 rounded bg-[#E7FE29]">Claim Free Credit</button>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};
Header.propTypes = {
     setCoin: PropTypes.func,
     coin: PropTypes.object,
}   

export default Header;