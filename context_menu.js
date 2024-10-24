import {deleter}  from "./filler.js"

var context_menu_modal = document.getElementById("context_menu_modal")
var context_menu_remove = document.getElementById("context_menu_remove")
var context_menu_edit = document.getElementById("context_menu_edit")
var context_menu_cancel = document.getElementById("context_menu_cancel")
var context_menu_element_headding = document.getElementById("context_menu_element_headding")



var edit_modal = document.getElementById("edit_modal")
var edit_element_headding = document.getElementById("edit_element_headding")

//context_menu. START
export default function context_menu(element_id) {
    context_menu_element_headding.textContent = element_id

    context_menu_modal.showModal()



}
//context_menu. END


//context_menu_cancel. START
context_menu_cancel.addEventListener('click', function (e) {
    context_menu_modal.close()
    context_menu_element_headding.textContent = "headding"
})
//context_menu_cancel. END

//context_menu_delete. START
context_menu_remove.addEventListener('click', function(e){
var result = confirm("Are you sure you want to delete "+context_menu_element_headding.textContent+" ?") 

if(result==true){
deleter(context_menu_element_headding.textContent)
context_menu_modal.close()
context_menu_element_headding.textContent = "headding"
}


})


//context_menu_delete. END


//context_menu_edit. START
context_menu_edit.addEventListener('click', function(e){

edit_element_headding.textContent = context_menu_element_headding.textContent

    context_menu_modal.close()
    context_menu_element_headding.textContent = "headding"
    
    edit_modal.showModal()
    




})





//context_menu_edit. END








