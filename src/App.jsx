import { useState } from "react";
import Header from "./components/header/Header"
import NavBar from "./components/navbar/NavBar"
import Players from "./components/players/Players"
import Footer from "./components/footer/Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const App = () => {

  const [coin, setCoin] = useState(0);
  const handlePrice = (player) => {
    if (player.player_price > coin) {
      toast.error("You do not have enough money");
      return false;
    } else {
      const newCoin = coin - player.player_price;
      setCoin(newCoin);
      return true;
    }
  };

  const [isActive, setIsActive] = useState({
    card: true,
    status: "card"
  })

  const handleIsActiveState = (status) => {
    if (status == 'card') {
      setIsActive({
        card: true,
        status: "card"
      })
    }
    else {
      setIsActive({
        card: false,
        status: "select"
      })
    }
  }
  console.log(isActive)

  return (
    <>
      <NavBar coin={coin}></NavBar>
      <Header coin={coin} setCoin={setCoin}></Header>
      <Players handlePrice={handlePrice} handleIsActiveState={handleIsActiveState} isActive={isActive} />
      <ToastContainer />
      <Footer></Footer>
    </>
  )
}

export default App;
