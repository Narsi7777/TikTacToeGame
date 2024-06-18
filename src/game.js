import React,{useState,useEffect} from "react"
const redCross="/cross4.jpeg";
const blueCircle="/blue2.jpeg";
const user1Properties={backgroundImage:`url(${redCross})`, backgroundPosition:"center",backgroundSize: "contain"}
const user2Properties={backgroundImage:`url(${blueCircle})`, backgroundPosition:"center",backgroundSize: "contain",backgroundRepeat:"no-repeat"};
function Game(){
    const [user,setUser]=useState(1);
    const [aiStatus,setAiStatus]=useState(null);
    const [buttonVisibility,setButtonVisibility]=useState(true);
    const [btn1Style,setButton1Style]=useState({});
    const [btn2Style,setButton2style]=useState({});
    const [btn3Style,setButton3Style]=useState({});
    const [btn4Style,setButton4Style]=useState({});
    const [btn5Style,setButton5Style]=useState({});
    const [btn6Style,setButton6Style]=useState({});
    const [btn7Style,setButton7Style]=useState({});
    const [btn8Style,setButton8Style]=useState({});
    const [btn9Style,setButton9Style]=useState({});

    const [button1, setButtton1] = useState(null);
    const [button2, setButtton2] = useState(null);
    const [button3, setButtton3] = useState(null);
    const [button4, setButtton4] = useState(null);
    const [button5, setButtton5] = useState(null);
    const [button6, setButtton6] = useState(null);
    const [button7, setButtton7] = useState(null);
    const [button8, setButtton8] = useState(null);
    const [button9, setButtton9] = useState(null);

   

    const [WinningStatus,setWinningStatus]=useState("Tic-Tac-Toe");

    useEffect(()=>{
        if(user===2&&aiStatus==="ai"){
            makeAItoMove();
        }
    },[user]);

    function makeAItoMove(){
        const buttonStates = [
            { value: button1, setValue: setButtton1, classNames:"btn1" },
            { value: button2, setValue: setButtton2, classNames:"btn2" },
            { value: button3, setValue: setButtton3 ,classNames:"btn3" },
            { value: button4, setValue: setButtton4 ,classNames:"btn4" },
            { value: button5, setValue: setButtton5 ,classNames:"btn5" },
            { value: button6, setValue: setButtton6 ,classNames:"btn6" },
            { value: button7, setValue: setButtton7 ,classNames:"btn7" },
            { value: button8, setValue: setButtton8 ,classNames:"btn8" },
            { value: button9, setValue: setButtton9 ,classNames:"btn9" },
          ];
        const availableButtons=buttonStates.filter((btn)=>{return btn.value===null;});

        const randomIndexedMove=availableButtons[Math.floor(Math.random()*availableButtons.length)];

        setTimeout(()=>{

          
       randomIndexedMove.setValue(()=>{
                if(user===1){
                    return 1;
                }
                else{
                    return 2;
                }
            });

    const buttonToBeClicked=document.getElementsByClassName(`${randomIndexedMove.classNames}`);
    if(buttonToBeClicked){
        buttonToBeClicked[0].click();
    }

        },500);
    }



    useEffect(() => {
        checkWinning();
      }, [button1, button2, button3, button4, button5, button6, button7, button8, button9,user]);
    
      function checkWinning() {
        if (
          (button1 === 1 && button2 === 1 && button3 === 1) ||
          (button1 === 1 && button4 === 1 && button7 === 1) ||
          (button1 === 1 && button5 === 1 && button9 === 1) ||
          (button2 === 1 && button5 === 1 && button8 === 1) ||
          (button3 === 1 && button6 === 1 && button9 === 1) ||
          (button4 === 1 && button5 === 1 && button6 === 1) ||
          (button7 === 1 && button8 === 1 && button9 === 1) ||
          (button3 === 1 && button5 === 1 && button7 === 1)
        ) {
          setWinningStatus("Player 1 wins!");
        } else if (
          (button1 === 2 && button2 === 2 && button3 === 2) ||
          (button1 === 2 && button4 === 2 && button7 === 2) ||
          (button1 === 2 && button5 === 2 && button9 === 2) ||
          (button2 === 2 && button5 === 2 && button8 === 2) ||
          (button3 === 2 && button6 === 2 && button9 === 2) ||
          (button4 === 2 && button5 === 2 && button6 === 2) ||
          (button7 === 2 && button8 === 2 && button9 === 2) ||
          (button3 === 2 && button5 === 2 && button7 === 2)
        ) {
          setWinningStatus("Player 2 wins!");
        }else{
            setWinningStatus("Player "+`${user}`+"'s choice");
        }
      }

    function button1Clicked(){
        // setUser1(true);
        if(user===1){
            setButton1Style(user1Properties);
            setButtton1(1);
            
            setUser(2);
            
        }else{
            setButton1Style(user2Properties);
            
            setButtton1(2);
            setUser(1);
            
        }
       
    }
    
    function button2Clicked(){
        // setUser2(true);
        if(user===1){
            setButton2style(user1Properties);
            setButtton2(1);
           
            setUser(2);
            
        }else{
            setButton2style(user2Properties);
            setButtton2(2);
           
            setUser(1);
            
        }
        
    }

    function button3Clicked(){
        // setUser3(true);
        if(user===1){
            setButton3Style(user1Properties);
            setButtton3(1);
           
            setUser(2);
            
        }else{
            setButton3Style(user2Properties);
            setButtton3(2);
           
            setUser(1);
        }
        
    }

    function button4Clicked(){
        // setUser4(true);
        if(user===1){
            setButton4Style(user1Properties);
            setButtton4(1);
            
            setUser(2);
            
        }else{
            setButton4Style(user2Properties);
            setButtton4(2);
          
            setUser(1);
            
        }
        
    }

    function button5Clicked(){
        // setUser5(true);
        if(user===1){
            setButton5Style(user1Properties);
            setButtton5(1);
           
            setUser(2);
            
        }else{
            setButton5Style(user2Properties);
            setButtton5(2);
            
            setUser(1);
            
        }
        
    }

    function button6Clicked(){
        // setUser6(true);
        if(user===1){
            setButton6Style(user1Properties);
            setButtton6(1);
           
            setUser(2);
            
        }
        else{
            setButton6Style(user2Properties);
            setButtton6(2);
            
            setUser(1);
            
        }
        
    }
function button7Clicked(){
    // setUser7(true);
    if(user===1){
        setButton7Style(user1Properties);
        setButtton7(1);
        
        setUser(2);
        
    }
    else{
        setButton7Style(user2Properties);
        setButtton7(2);
        
        setUser(1);
        
    }
    
}

function button8Clicked(){
    // setUser8(true);
    if(user===1){
        setButton8Style(user1Properties);
        setButtton8(1);
        
        setUser(2);
        
    }
    else{
        setButton8Style(user2Properties);
        setButtton8(2);
   
        setUser(1);
        
    }
    
}

function button9Clicked(){
    // setUser9(true);
    if(user===1){
        setButton9Style(user1Properties);
        setButtton9(1);
      
        setUser(2);
        
    }
    else{
        setButton9Style(user2Properties);
        setButtton9(2);
      
        setUser(1);
        
    }
    
}
    return(
        <div className="game">
            <div className="winningtext">
                <h1>{WinningStatus}</h1>
                {
                buttonVisibility&&(
                    <div className="buttons">
                    <button onClick={()=>{
                     setAiStatus("ai");
                     setButtonVisibility(false);
                    } }>AI Oponent???</button>
                    <button onClick={()=>{
                     setAiStatus("player");
                     setButtonVisibility(false);
                    }}>AnotherPlayer???</button>
                    </div>
                )
                }

               
            </div>
                {
                    buttonVisibility===false&&(  <div className="gamepad">
                        <button className="btn1" onClick={button1Clicked} style={btn1Style}></button>
                        <button className="btn2" onClick={button2Clicked} style={btn2Style}></button>
                        <button className="btn3" onClick={button3Clicked} style={btn3Style}></button>
                        <button className="btn4" onClick={button4Clicked} style={btn4Style}></button>
                        <button className="btn5" onClick={button5Clicked} style={btn5Style}></button>
                        <button className="btn6" onClick={button6Clicked} style={btn6Style}></button>
                        <button className="btn7" onClick={button7Clicked} style={btn7Style}></button>
                        <button className="btn8" onClick={button8Clicked} style={btn8Style}></button>
                        <button className="btn9" onClick={button9Clicked} style={btn9Style}></button>
                   </div>)
                }

         
        </div>
    );
}

export default Game;


