import React from 'react'
import Stopwatch from './Stopwatch'
import Countdown from './Countdown'


class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            showStopwatch:false,
            showCountdown:false,
        }
    }
    handleClickStopwatch=()=>{
        this.setState((prevState)=>({
            showStopwatch:!prevState.showStopwatch
        }))
    }
    handleClickCountdown=()=>{
        this.setState((prevState)=>({
            showCountdown:!prevState.showCountdown
        }))
    }

    
    render(){
        console.log(this.state.showCountdown)
        return(
            <>
            <header>
                <h1>Timers</h1>
            </header>
            <main>
                <div className='timers'>
                    {
                        this.state.showStopwatch?(<Stopwatch/>)
                        :( <div className='stopwatch' onClick={this.handleClickStopwatch}>Show Stopwatch</div>  )
                    }
                    {
                        this.state.showCountdown?(<Countdown/>)
                        :( <div className='countdown' onClick={this.handleClickCountdown}>Show Countdown</div>  )
                    }
                </div>
            </main>
            </>
        )
    }
}

export default App
