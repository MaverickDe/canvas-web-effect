const canvas = document.querySelector(".canvas")
canvas.height = window.innerHeight
canvas.width = window.innerWidth

console.log(window.innerHeight,window.innerWidth)



    let radius = 2
    let bollean  = true

ctx = canvas.getContext("2d")


  



class particle{
    constructor(x,y,radius){
        this.x=x
        this.y=y
        this._x = this.x
        this._y = this.y
       this.a =Math.random().toFixed(3)/1.5
       this.b=Math.random().toFixed(3)/1.5
       this.lineTo_=[]

        this.radius = radius
       
        this.distance=50
        this.mouseover=false

    }


    move(){

      
     if(this.mouseover  ==false){
       
        if(this.y >= this._y+this.distance ){
            this.b=-pveNum(this.b)
        }
        if(this.y <= this._y-this.distance ){
            this.b=pveNum(this.b)
        }
        if(this.x >= this._x+this.distance  ){
            this.a=-pveNum(this.a)
        }
        if( this.x <= this._x-this.distance  ){
            this.a=pveNum(this.a)
        }
      
        this.x+=this.a
        this.y+=this.b
    }

    }


  


    draw(i){
        ctx.fillStyle=`hsl(${i},100%,50%)`
        ctx.beginPath()
        ctx.moveTo(this.x,this.y)
        ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,false)
        ctx.fill()
        ctx.closePath()

    }


    lineTo(a,b,c,d){
        ctx.beginPath()
        ctx.strokeStyle="grey"
        
        ctx.moveTo(a ,b)
        ctx.lineTo(c,d)
        ctx.stroke()
      
        ctx.closePath()

    }


    console(a){
        console.log(a,this.x,"aaaa")
        this.x+=10
    }


    mouseover_(x,y,distance){
        if(this.mouseover){
          let  a=2
          let  b=2
          
            if(distance>=100 ){
               
                return
            }
            if(distance>=50 ){
               
                
                a = a/2
                b = a/2
              
            }
            if(this.x>x){
              
                this.x+=a
                
            }else{
                this.x-=a
              
                
            }
            if(this.y>y){
                this.y+=b
                
            }else{
                this.y-=b
               
            }
       
        

        
        
    
    }

      

    }
}


let arrayOfParticles= []






function drawball(){
    for (let i=0;i<500;i++){
    
        
      let  x=Math.random()*canvas.width
      let   y=Math.random()*canvas.height
      let particle1 =    new particle(x,y,radius)
        
        particle1.id=i
      arrayOfParticles.push(particle1)
      particle1.draw(i)
      arc(arrayOfParticles,i)

    }
    console.log(arrayOfParticles)
    // bollean = false
}


drawball()

mouse(arrayOfParticles)


function moveballs(arg){
    ctx.clearRect(0,0,canvas.width,canvas.height)
 

    for(i=0;i<=arg.length-1;i++){

        // if(arg[i].mouseover){
        //     console.log(mouse(arg))
        //     // arg[i].mouseover_(...mouse(arg))
        // }

        
        // console.log(arg[i].distance1)
       
            //    console.log(arrayOfParticles[i])
      let      distance =calculatedistance(arg[i].x,arg[i].y,arg[i].mouseX,arg[i].mouseY)
             if(  arg[i].mouseover==true||  (distance >= 0  && distance<=100 &&arg[i].distance1!=undefined)){
                //  console.log(arg[i].mouseX)
                arg[i].mouseover=true
               arg[i].mouseover_(arg[i].mouseX,arg[i].mouseY,distance)
            }else{
                arg[i].mouseover=false 
                
              
            }
            
      
        arg[i].move()
        arc(arg,i)
        arg[i].draw(i)
      
    }
    
    requestAnimationFrame(()=>{moveballs(arrayOfParticles)})

}

let bbbb =setInterval(()=>{
    
},1000)
moveballs(arrayOfParticles)




setTimeout(()=>{clearInterval(bbbb)},20000)

function mouse(arg){
    console.log(arg)

    let a,b,mouseX,mouseY,distance
    canvas.addEventListener("mousemove",(e)=>{
    for(i=0;i<=arg.length-1;i++){
      
mouseX=e.x
mouseY=e.y
distance = calculatedistance(arg[i].x,arg[i].y,mouseX,mouseY)
       
        arg[i].mouseX=mouseX
        arg[i].mouseY=mouseY
        arg[i].distance1=distance
     

      
       if(distance >= 0  && distance<=100){
       
           arg[i].mouseover=true
           arg[i].mouseover_(mouseX,mouseY,distance)
        }else{
            arg[i].mouseover=false
            
           
            
           
        }

      
    }
}
)


canvas.addEventListener("mouseout",(e=>{
    for(i=0;i<=arg.length-1;i++){arg[i].mouseover=false
        arg[i].distance1=undefined
      
    
    
    }
    console.log(arg)
    
}))


}



bbb= false

console.log(!bbb)









function calculatedistance(a,b,mouseX,mouseY){

    a = a -mouseX
    b = b-mouseY
    
    return Math.sqrt(a**2 +  b**2) 

}

function pveNum(x){
    // console.log(x,x**2)
    return Math.sqrt(x**2)
}

console.log(Math.random().toFixed(2)*2)




function arc(arg,i){
    
    // console.log(arg,i)
//     if(arg[i].lineTo_!=""){
//         for(let p=0;p<=arg[i].lineTo_.length-1;p++){
//             // console.log(arg[i].lineTo_[p])
//             // if(calculatedistance(arg[i].x,arg[i].y, filter(arg,arg[i].lineTo_[p]).x,filter(arg,arg[i].lineTo_[p]).y)>=100){
//         arg[i].lineTo(arg[i].x ,arg[i].y,filter(arg,arg[i].lineTo_[p]).x,filter(arg,arg[i].lineTo_[p]).y);
//     // }
// }
//     return
// }
    
    for(let a=0;a<=arg.length-1;a++){
        
        if(calculatedistance(arg[a].x ,arg[a].y,arg[i].x,arg[i].y)<=90){

            if(arg[a].lineTo_.includes(arg[i])){
                
            }
            else{
            }
            arg[i].lineTo(arg[i].x ,arg[i].y,arg[a].x,arg[a].y);
        
           
        }

    }

}




function filter(arg,id){
    return arg.find(e=>e.id==id)
}