
function rollDice(){
    const numOfDice=Number(document.getElementById("numOfDice").value);
    const diceResult=document.getElementById("diceResult");
    const diceImages=document.getElementById("diceImages");
    const values=[];
    const images=[];
    for(let i=0;i<numOfDice;i++){
        const value=Math.floor(Math.random()*6)+1;
        //console.log(value);
        values.push(value);
        
        images.push(`<img src="${value}.png" alt="Dice ${value}" style="width:100px; height:100px;">`);
    }
    diceResult.textContent=`dice:${values.join(', ')}`;
    diceImages.innerHTML=images.join(' ');
    //console.log(values);
}