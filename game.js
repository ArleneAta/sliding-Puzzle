onload=init
//onkeydown=clicker

function init(){
  var board = document.createElement('div')
  board.id = 'board'
  document.body.appendChild(board)

  var div1 = document.createElement('div')
	div1.id = 'div1'
    board.appendChild(div1)
  
	var div2 = document.createElement('div')
	div2.id = 'div2'
	board.append(div2)
	
	var div3 = document.createElement('div')
	div3.id = 'div3'
	board.appendChild(div3)
  
  var div4 = document.createElement('div')
	div4.id = 'div4'
	board.appendChild(div4)
	
	var div5= document.createElement('div')
	div5.id = 'div5'
	board.appendChild(div5)
	
	var div6 = document.createElement('div')
	div6.id = 'div6'
	board.appendChild(div6)
  
  var div7 = document.createElement('div')
	div7.id = 'div7'
	board.appendChild(div7)
	
	var div8 = document.createElement('div')
	div8.id = 'div8'
	board.appendChild(div8)
	
	var div9 = document.createElement('div')
	div9.id = 'div9'
    board.appendChild(div9)
    div9.style.visibility = "hidden"

    divs = document.getElementsByTagName('div')
    for(let i = 1; i <= divs.length; i++){
        var img = document.createElement('img')
        img.id = i
        img.src = 'images/png/' + i + '.png'        
        divs[i].append(img)
        divs[i].onclick=move
    }
}  

// function clicker(e){
//    divnum = null

//     if(e.which){
//         divnum = e.which    
//     }else if(e.event){
//         divnum = e.event
//     }
//     console.log(divnum)
// }

function move(){
	
    var empty = document.getElementById('div9')
    
    if (this.nextSibling == empty){
        //move right
        this.parentNode.insertBefore(this.nextSibling, this)
    }else if (this.previousSibling == empty){
        //move left if previous sibling
        this.parentNode.insertBefore(this, this.previousSibling)
    }else{
        //swap tiles ??? not working
        var temp = this
        this.parentNode.replaceChild(empty.childNodes[0],this)
        //this = empty

        empty.parentNode.replaceChild(temp, empty)
        //empty = temp
    }
    //move up ---swap this with empty
    
    //move down
    
    
}
