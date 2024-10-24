import context_menu from './context_menu.js'

var custom_ids = []
var available = 0

const can = document.getElementById("can")


export default class div {
    constructor(color, height, width, id, text_content,text_color) {
        this.color = color
        this.height = height + "px"
        this.width = width + "px"
        this.id = id
        this.text_content = text_content
        this.text_color = text_color






        if (custom_ids.includes(this.id)) {
            available = 1



        }
        else {

            custom_ids.push(this.id)
            console.log(custom_ids)


        }



    }
    draw() {
        if (available != 1) {



            var newElement = document.createElement("div");
            newElement.style.height = this.height
            newElement.style.width = this.width
            newElement.textContent = this.text_content
            newElement.style.overflowWrap ='break-word'
            newElement.style.color =this.text_color
            newElement.style.margin = '10px'
            newElement.style.borderRadius = '20px'
            newElement.style.backgroundColor = this.color
            newElement.setAttribute("id", this.id)
            newElement.classList.add("flow_boxes")
            newElement.addEventListener('click', function (e) {
                e.preventDefault
                context_menu(newElement.id)



            })
            can.appendChild(newElement)



        }










        else {
            window.alert("name already exists. Try another name")
            available = 0
            console.log(custom_ids)




        }

    }







    }
export function deleter(id){

    var temporary = document.getElementById(id)
    temporary.remove()
var index = custom_ids.indexOf(id)
delete custom_ids[index]




}


