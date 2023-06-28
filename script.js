//your JS code here. If required.
let fontSizeInput=document.getElementById('fontsize');
let fontColorInput=document.getElementById('fontcolor');

let submitBtn=document.querySelector('input[type=submit]');
// console.log(submitBtn);

submitBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    let fontSize=fontSizeInput.value;
    let fontColor=fontColorInput.value;
    console.log(fontColor,fontSize);
    let fontStyle={
        fontSize:fontSize,
        fontColor:fontColor
    }

    document.cookie=`fontStyle=${JSON.stringify(fontStyle)};expire:Fri, 30 June 2023;path=/`;
})

window.addEventListener('load',()=>{
    let cookieString=document.cookie;
    let cookieValue="";
    if(cookieString){
     let cookieName="fontStyle=";
     let cookieArray=cookieString.split(";");
    
     for(let i=0;cookieArray.length;i++){
        let cookieItem=cookieArray[i].trim();

        if(cookieItem.indexOf(cookieName)===0){
            cookieValue=cookieItem.substring(cookieName.length);
            break;
        }
     }
    }
    // console.log(typeof cookieValue);
    if(cookieString){
    cookieValue=JSON.parse(cookieValue);
    // console.log(typeof cookieValue);
    console.log(cookieValue)
   fontColorInput.value=cookieValue.fontColor;
   fontSizeInput.value=cookieValue.fontSize;
    }
})

