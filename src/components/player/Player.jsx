import { FaUser } from "react-icons/fa";
import { CiFlag1 } from "react-icons/ci";
import PropTypes from 'prop-types';


const Player = ({ player, handleSelectedPlayer }) => {
     const { player_img, player_name, player_country, player_position, player_type, player_price } = player;

     return (
          <div>
               <div className="card bg-base-100 w-96 shadow-xl">
                    <figure className="px-10 pt-10">
                         <img
                              src={player_img}
                              className="rounded-xl max-h-40 w-72" />
                    </figure>
                    <div className="card-body">
                         <h2 className="card-title"><FaUser />{player_name}</h2>
                         <div className="flex justify-between items-center p-2 border-b">
                              <div className="flex gap-2">
                                   <CiFlag1 />
                                   <p className="text-sm">{player_country}</p>
                              </div>
                              <div>
                                   <p className="border-2 p-2 rounded-md text-sm font-bold">{player_position}</p>
                              </div>
                         </div>
                         <div className="flex flex-col gap-2">
                              <div>
                                   <h2 className="text-md font-bold">Rating</h2>
                              </div>
                              <div className="flex justify-between">
                                   <p className="text-sm font-bold">{player_type}</p>
                                   <p className="text-sm text-base-400">{player_type}</p>
                              </div>
                              <div className="flex justify-between">
                                   <p className="text-sm font-bold">Price: ${player_price}</p>
                                   <p onClick={() => handleSelectedPlayer(player)} className="btn text-sm btn-sm">Choose Player</p>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};
Player.propTypes = {
     handleSelectedPlayer: PropTypes.func,
     player: PropTypes.object,
}   

export default Player;