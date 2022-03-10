import './App.css';
import CollectionCard from './components/CollectionCard';
import Header from './components/Header';
import { useState, useEffect } from 'react';
import axios from 'axios';
import PunkList from './components/PunkList';
import Main from './components/Main';


function App() {

  const [punkListData, setPunkListData ] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0)

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0x14A3163aF3366CEb3737BC251248ab26211cA0D6&order_direction=desc');
      console.log(openseaData.data.assets);
      const sortedList = openseaData.data.assets.sort((a, b) => {
        return a.token_id - b.token_id
      });
      setPunkListData(sortedList);
    }
    return getMyNfts();
  }, [])


  return (
    <div className="app">
      <Header />
      {
        punkListData.length > 0 && (
          <>
          <Main punkListData={punkListData} selectedPunk={selectedPunk}/>
          <PunkList punkListData={punkListData} setSelectedPunk={setSelectedPunk}/>
        </>
        )
      }
      
    </div>
  );
}

export default App;
