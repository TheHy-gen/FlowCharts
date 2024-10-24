import div from './filler.js'

const add_shape_open = document.getElementById("add_shape_open")
const add_shape_close = document.getElementById("add_shape_close")
const add_shape_modal= document.getElementById("add_shape_modal")
const add_shape_submit = document.getElementById("add_shape_submit")
const add_shape_color = document.getElementById("add_shape_color")
const add_shape_width = document.getElementById("add_shape_width")
const add_shape_height = document.getElementById("add_shape_height")
const add_shape_id = document.getElementById("add_shape_name(id)")
const add_shape_text_content = document.getElementById("add_shape_text_content")
const add_shape_text_color = document.getElementById("add_shape_text_color")
//open
add_shape_open.addEventListener("click", function(e){



add_shape_modal.showModal()

})
//open/

//cancel
add_shape_close.addEventListener("click", function(e){
 

add_shape_modal.close()



})
//cancel/


//submit
add_shape_submit.addEventListener("click", function(e){
    

if(add_shape_color.value && add_shape_height.value && add_shape_width.value && add_shape_id.value && add_shape_text_content.value && add_shape_text_color.value){


const div1 = new div(add_shape_color.value, add_shape_height.value, add_shape_width.value, add_shape_id.value,add_shape_text_content.value,add_shape_text_color)
div1.draw()

add_shape_modal.close()


}
else{
    window.alert("input is required")

}
    
    
    })

//submit/




