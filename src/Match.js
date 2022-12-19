import React, { useState } from 'react'

function Match() {

    const [moveBallY, setMoveBallY] = useState(50);
    const [moveBallX, setMoveBallX] = useState(50);
    const [scoreData, setScoreData] = useState({ home: 0, away: 0 })


    const moveTop = () => {
        setMoveBallY(() => {
            if (moveBallY == 5) {
                return moveBallY;
            } else {
                return moveBallY - 5;
            }
        })
    }

    const moveDown = () => {
        setMoveBallY(() => {
            if (moveBallY == 95) {
                return moveBallY;
            } else {
                return moveBallY + 5;
            }
        })
    }

    const moveLeft = () => {
        setMoveBallX(() => {
            if (moveBallX == 2) {
                setMoveBallY(50);
                setScoreData({ ...scoreData, away: scoreData.away + 1 })
                return 50;
            } else {
                return moveBallX - 4;
            }
        })
    }

    const moveRight = () => {
        setMoveBallX(() => {
            if (moveBallX == 98) {
                setScoreData({ ...scoreData, home: scoreData.home + 1 })
                setMoveBallY(50);
                return 50;
            } else {
                return moveBallX + 4;
            }
        })
    }


    return (
        <div className='game'>
            <div className='game--area'>
                <div className='game--area--left'></div>
                <div className='game--area--right'></div>
                <div className='game--area--center'></div>
                <div style={{ top: moveBallY + "%", left: moveBallX + "%" }} className='game--area--ball'></div>
                <div className='game--area--home'>Home:{scoreData.home}</div>
                <div className='game--area--away'>Away:{scoreData.away}</div>
                <div className='game--area-buttons'>
                    <button onClick={moveTop} className='buttons top'>↑</button>
                    <button onClick={moveLeft} className='buttons left'>←</button>
                    <button onClick={moveDown} className='buttons right'>↓</button>
                    <button onClick={moveRight} className='buttons down'>→</button>
                </div>
            </div>
        </div>
    )
}

export default Match