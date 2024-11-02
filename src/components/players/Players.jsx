import { useEffect, useState } from "react";
import Player from "../player/Player";
import './Players.css'
import Selected from "../selected/Selected";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

const Players = ({ handlePrice, handleIsActiveState, isActive }) => {

     const [selectedPlayers, setSelectedPlayers] = useState([]);

     const handleDelete = (id) => {
          const remainingPlayers = selectedPlayers.filter((p) => p.id != id);
          setSelectedPlayers(remainingPlayers);
     }
     const handleSelectedPlayer = (player) => {
          const canAddPlayer = handlePrice(player);
          if (!canAddPlayer) {
               return;
          }
          const isExist = selectedPlayers.find((p) => p.id == player.id);
          if (isExist) {
               toast.warning("Player Already Selected");
          }
          else {
               const newPlayers = [...selectedPlayers, player];
               if (newPlayers.length < 7) {
                    setSelectedPlayers(newPlayers);
                    toast.success("Player Added Successfully");
               }
               else {
                    toast.error("Can't Add any more players")
               }
          }
     }
     console.log(selectedPlayers);
     const [players, setPlayers] = useState(['']);
     useEffect(() => {
          fetch('./player.json')
               .then(res => res.json())
               .then(data => setPlayers(data))
     }, [])
     return (
          <div className="container mx-auto">
               <div className="flex justify-between">
                    {isActive.card ? <h1 className="text-4xl font-bold">Available Players</h1> : <h1 className="text-4xl font-bold">Selected Players: {selectedPlayers.length}/6</h1>
                    }
                    <div className="toggle-btn">
                         <div onClick={() => handleIsActiveState("card")} className={`${isActive.card ? "bttn active" : "bttn"}`}>Available</div>
                         <div onClick={() => handleIsActiveState("select")} className={`${isActive.card ? "bttn" : "bttn active"}`}>Selected {selectedPlayers.length}</div>
                    </div>
               </div>
               {isActive.card ?
                    <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
                         {
                              players.map(player => <Player handleSelectedPlayer={handleSelectedPlayer} key={player.id} player={player}></Player>)
                         }
                    </div> :
                    <div>
                         <Selected handleIsActiveState={handleIsActiveState} handleDelete={handleDelete} selectedPlayers={selectedPlayers}></Selected>
                    </div>
               }
               <ToastContainer />
          </div>
     );
};
Players.propTypes = {
     handlePrice: PropTypes.func,
     handleIsActiveState: PropTypes.func,
     isActive: PropTypes.object,

};


export default Players;