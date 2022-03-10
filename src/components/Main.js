import React, { useState, useEffect } from 'react';
import instagramLogo from '../assets/assets/owner/instagram.png';
import twitterLogo from '../assets/assets/owner/twitter.png';
import moreIcon from '../assets/assets/owner/more.png';
import '../components/Main.css';

const Main = ({selectedPunk, punkListData}) => {

    const [activePunk, setActivePunk] = useState(punkListData[5]);

    useEffect(() => {
        setActivePunk(punkListData[selectedPunk])
    }, [punkListData, selectedPunk])

  return (
    <div className='main'>
        <div className='mainContent'>
            <div className='punkHighlight'>
                <div className='punkContainer'>
                    <img className='selectedPunk'
                    src={activePunk.image_url}
                    alt=''
                    />
                </div>
            </div>
            <div className='punkDetails' style={{color: '#fff'}}>
                <div className='title'>
                    {activePunk.name}
                </div>
                <span className='itemNumber'>#3</span>
            </div>
            <div className='owner'>
                <div className='ownerImageContainer'>
                    <img />
                </div>
                <div className='ownerDetails'>
                    <div className='ownerNameAndHandle'>
                        <div>
                            0x44Ae9A16e2348c91C4581C666E422E3e37E00CDD
                        </div>
                        <div className='ownerHandle'>
                            @afbelardi
                        </div>
                    </div>
                        <div className='ownerLink'>
                            <img src={instagramLogo} />
                        </div>
                        <div className='ownerLink'>
                            <img src={twitterLogo} />
                        </div>
                        <div className='ownerLink'>
                            <img src={moreIcon} />
                        </div>  
                </div>
            </div>
        </div>     
    </div>
  )
}

export default Main