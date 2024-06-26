import React, { useEffect, useState } from 'react';
import PlayerCard from '../utils/playerCards';
import { Slide } from 'react-awesome-reveal';
import { Promise } from 'core-js'

import { showErrorToast } from '../utils/tools';
import { CircularProgress } from '@mui/material'
import { firebase, playersCollection } from '../../firebase'




const TheTeam = () => {
    const [loading,setLoading] = useState(true);
    const [players,setPlayers] = useState(null)



    useEffect(() => {
        if (!players) {
            playersCollection.get().then(snapshot => {
                const players = snapshot.docs.map(doc => ({
                    id: doc.id, ...doc.data()
                }));
                setPlayers(players);
                setLoading(false);
            }).catch(error => {
                console.error("Error getting players collection:", error);
                showErrorToast('Sorry, try again later');
                setLoading(false);
            });
        }
    }, [players]);
    
    
    
    

    const showPlayerByCategory = (category) => (
        players ?
            players.map((player,i)=>{
                return player.position === category ?
                    <Slide left key={player.id} triggerOnce>
                        <div className="item">
                            <PlayerCard
                                 number={player.number}
                                 name={player.name}
                                 lastname={player.lastname}
                                 bck={player.url}
                            />
                        </div>
                    </Slide>
                :null
            })
        :null
    )


    return(
        <div className="the_team_container">
            { loading ?
                <div className="progress">
                    <CircularProgress/>
                </div>
                :
                <div>
                    <div className="team_category_wrapper">
                        <div className="title">Keepers</div>
                        <div className="team_cards">
                            {showPlayerByCategory('Keeper')}
                        </div>
                    </div>

                    <div className="team_category_wrapper">
                        <div className="title">Defence</div>
                        <div className="team_cards">
                            {showPlayerByCategory('Defence')}
                        </div>
                    </div>

                    <div className="team_category_wrapper">
                        <div className="title">Midfield</div>
                        <div className="team_cards">
                            {showPlayerByCategory('Midfield')}
                        </div>
                    </div>

                    <div className="team_category_wrapper">
                        <div className="title">Strikers</div>
                        <div className="team_cards">
                            {showPlayerByCategory('Striker')}
                        </div>
                    </div>


                </div>
            }
        </div>
    )
}

export default TheTeam;