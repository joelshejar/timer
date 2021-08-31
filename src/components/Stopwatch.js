import React from 'react'

class Stopwatch extends React.Component{
    constructor(props){
        super(props)
        this.state={
            hours:0,
            minutes:0,
            seconds:0,
            milliseconds:0,
            isStart:false,
        }
        this.interval=null
        
    }
    handleStart=()=>{
        this.setState((prevState)=>({
            isStart:!prevState.isStart
            
        }))
        
            this.interval=setInterval(()=>{
                if(this.state.isStart){
                    this.setState({
                        milliseconds:this.state.milliseconds+1
                    })
                    if(this.state.milliseconds>99){
                        this.setState({
                            milliseconds:0,
                            seconds:this.state.seconds+1                   
                        })
                    }
                    if(this.state.seconds===59&&this.state.milliseconds===99){
                        this.setState({
                            milliseconds:0,
                            seconds:0,
                            minutes:this.state.minutes+1                    
                        })
                    }
                    if(this.state.minutes===59&&this.state.seconds===59&&this.state.milliseconds===99){
                        this.setState({
                            milliseconds:0,
                            seconds:0,
                            minutes:0,
                            hours:this.state.hours+1                      
                        })
                    }
        
                }
                
            }, 10)
        
        console.log(this.state.isStart)
        
    }
    componentDidUpdate(){
       
    }
    
    render(){
        
        return(
            <div>
                <h3>Stopwatch</h3>
                <div>
                    <span>{this.state.hours}:</span>
                    <span>{this.state.minutes}:</span>
                    <span>{this.state.seconds}:</span>
                    <span>{this.state.milliseconds}</span>
                </div>
                {(!this.state.isStart)?(<h4 onClick={()=>this.handleStart()}>Start</h4>):(<div>
                    <h4 onClick={()=>this.handleStart()}>Stop</h4>
                    <h4>Reset</h4>
                </div>)}
            </div>
        )
    }
}

export default Stopwatch
