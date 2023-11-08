import React, { useContext } from 'react'
import { Context } from './context'

const Draft = ({team1, team2}) => {
    const { gameState, setGameState } = useContext(Context)

    var team1Top = ''
    var team1Jg = ''
    var team1Mid = ''
    var team1Adc = ''
    var team1Sup = ''

    var team2Top = ''
    var team2Jg = ''
    var team2Mid = ''
    var team2Adc = ''
    var team2Sup = ''

    var bannedlist = []

    const team1TopPool = [team1.players[0].champs[0], team1.players[0].champs[1], team1.players[0].champs[2]]
    const team1JgPool = [team1.players[1].champs[0], team1.players[1].champs[1], team1.players[1].champs[2]]
    const team1MidPool = [team1.players[2].champs[0], team1.players[2].champs[1], team1.players[2].champs[2]]
    const team1AdcPool = [team1.players[3].champs[0], team1.players[3].champs[1], team1.players[3].champs[2]]
    const team1SupPool = [team1.players[4].champs[0], team1.players[4].champs[1], team1.players[4].champs[2]]

    const team2TopPool = [team2.players[0].champs[0], team2.players[0].champs[1], team2.players[0].champs[2]]
    const team2JgPool = [team2.players[1].champs[0], team2.players[1].champs[1], team2.players[1].champs[2]]
    const team2MidPool = [team2.players[2].champs[0], team2.players[2].champs[1], team2.players[2].champs[2]]
    const team2AdcPool = [team2.players[3].champs[0], team2.players[3].champs[1], team2.players[3].champs[2]]
    const team2SupPool = [team2.players[4].champs[0], team2.players[4].champs[1], team2.players[4].champs[2]]

    const draftEnds = () => {
        setGameState(['off', 'GameStart'])
    }

    function getRandomUniqueIntegers(min, max, count) {
        if (max - min + 1 < count) {
            throw new Error("Unable to generate unique integers with the given range and count.");
        }
        
        var uniqueIntegers = [];
        while (uniqueIntegers.length < count) {
            var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        
            if (!uniqueIntegers.includes(randomNumber)) {
            uniqueIntegers.push(randomNumber);
            }
        }
        
        return uniqueIntegers;
    }

    const team1Ban = () => {
        var uniqueIntegers = getRandomUniqueIntegers(1, 10, 5)

        uniqueIntegers.forEach(int => {
            if (int === 1) {
                bannedlist.push(team2TopPool[0])
            } else if (int === 2) {
                bannedlist.push(team2TopPool[1])
            } else if (int === 3) {
                bannedlist.push(team2JgPool[0])
            } else if (int === 4) {
                bannedlist.push(team2JgPool[1])
            } else if (int === 5) {
                bannedlist.push(team2MidPool[0])
            } else if (int === 6) {
                bannedlist.push(team2MidPool[1])
            } else if (int === 7) {
                bannedlist.push(team2AdcPool[0])
            } else if (int === 8) {
                bannedlist.push(team2AdcPool[1])
            } else if (int === 9) {
                bannedlist.push(team2SupPool[0])
            } else {
                bannedlist.push(team2SupPool[1])
            }
        });
    }

    const team2Ban = () => {
        var uniqueIntegers = getRandomUniqueIntegers(1, 10, 5)

        uniqueIntegers.forEach(int => {
            if (int === 1) {
                bannedlist.push(team1TopPool[0])
            } else if (int === 2) {
                bannedlist.push(team1TopPool[1])
            } else if (int === 3) {
                bannedlist.push(team1JgPool[0])
            } else if (int === 4) {
                bannedlist.push(team1JgPool[1])
            } else if (int === 5) {
                bannedlist.push(team1MidPool[0])
            } else if (int === 6) {
                bannedlist.push(team1MidPool[1])
            } else if (int === 7) {
                bannedlist.push(team1AdcPool[0])
            } else if (int === 8) {
                bannedlist.push(team1AdcPool[1])
            } else if (int === 9) {
                bannedlist.push(team1SupPool[0])
            } else {
                bannedlist.push(team1SupPool[1])
            }
        });
    }

    const team1Pick = () => {
        var i = 0
        while (team1Top === '' && i < 3) {
            if (!bannedlist.includes(team1TopPool[i])){
                team1Top = team1TopPool[i]
            }
        }
        i = 0
        while (team1Jg === '' && i < 3) {
            if (!bannedlist.includes(team1JgPool[i])){
                team1Jg = team1JgPool[i]
            }
        }
        i = 0
        while (team1Mid === '' && i < 3) {
            if (!bannedlist.includes(team1MidPool[i])){
                team1Mid = team1MidPool[i]
            }
        }
        i = 0
        while (team1Adc === '' && i < 3) {
            if (!bannedlist.includes(team1AdcPool[i])){
                team1Adc = team1AdcPool[i]
            }
        }
        i = 0
        while (team1Sup === '' && i < 3) {
            if (!bannedlist.includes(team1SupPool[i])){
                team1Sup = team1SupPool[i]
            }
        }
    }

    const team2Pick = () => {
        var i = 0
        while (team2Top === '' && i < 3) {
            if (!bannedlist.includes(team2TopPool[i])){
                team2Top = team2TopPool[i]
            }
        }
        i = 0
        while (team2Jg === '' && i < 3) {
            if (!bannedlist.includes(team2JgPool[i])){
                team2Jg = team2JgPool[i]
            }
        }
        i = 0
        while (team2Mid === '' && i < 3) {
            if (!bannedlist.includes(team2MidPool[i])){
                team2Mid = team2MidPool[i]
            }
        }
        i = 0
        while (team2Adc === '' && i < 3) {
            if (!bannedlist.includes(team2AdcPool[i])){
                team2Adc = team2AdcPool[i]
            }
        }
        i = 0
        while (team2Sup === '' && i < 3) {
            if (!bannedlist.includes(team2SupPool[i])){
                team2Sup = team2SupPool[i]
            }
        }
    }

    team1Ban()
    team2Ban()
    team1Pick()
    team2Pick()

    return (
        <div style={{ display: 'flex' }}>
            <table style={{ borderCollapse: 'collapse', margin: '10px' }}>
                <caption>{team1.name}</caption>
                <tbody>
                    <tr>
                        <th>Top</th>
                        <th>Jg</th>
                        <th>Mid</th>
                        <th>Sup</th>
                        <th>Adc</th>
                    </tr>
                    <tr>
                        <td>{team1Top}</td>
                        <td>{team1Jg}</td>
                        <td>{team1Mid}</td>
                        <td>{team1Adc}</td>
                        <td>{team1Sup}</td>
                    </tr>
                </tbody>
            </table>

            <table style={{ borderCollapse: 'collapse', margin: '10px' }}>
            <caption>{team2.name}</caption>
                <tbody>
                    <tr>
                        <th>Top</th>
                        <th>Jg</th>
                        <th>Mid</th>
                        <th>Sup</th>
                        <th>Adc</th>
                    </tr>
                    <tr>
                        <td>{team2Top}</td>
                        <td>{team2Jg}</td>
                        <td>{team2Mid}</td>
                        <td>{team2Adc}</td>
                        <td>{team2Sup}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Draft