import { MdDeleteOutline } from "react-icons/md";
import PropTypes from 'prop-types';


const Selected = ({ selectedPlayers, handleDelete, handleIsActiveState }) => {
    return (
        <div>
            {
                selectedPlayers.map((player) => (
                    <div className="container mx-auto flex flex-col mt-10" key={player.id}>
                        <div className="border-2 rounded-md p-2 flex justify-between">
                            <div className="flex gap-6">
                                <img className="h-16 w-16 rounded-md" src={player.player_img} alt={player.player_name} />
                                <div className="my-auto">
                                    <h2 className="text-lg font-bold">{player.player_name}</h2>
                                    <p className="text-sm text-base-500">{player.player_position}</p>
                                </div>
                            </div>
                            <div onClick={() => handleDelete(player.id)} className="my-auto text-3xl btn mx-5">
                                <MdDeleteOutline />
                            </div>
                        </div>
                    </div>
                ))
            }
            <div className="mt-5">
                <button onClick={() => handleIsActiveState("card")} className="btn font-bold bg-[#E7FE29]">Add More Players</button>
            </div>
        </div>
    );
};
Selected.propTypes = {
    selectedPlayers: PropTypes.func,
    handleDelete: PropTypes.func,
    handleIsActiveState: PropTypes.func,
}   


export default Selected;
