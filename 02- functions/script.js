const input = $("#inputValue1");
const target1 = $("#target1");
$("#copyBtn1").on("click", () => {


    target1.empty()
    const newP = _getListItem(input.val())
    target1.append(newP)
    function _getListItem(value) {
        const cls = 'list-group-item'
        const listItem = $('<p></p>').text(value).addClass(cls)
        // .append(_getCloneButton())
        return listItem
        // function _getCloneButton() {
        //     return $("<button></button>").text("Clone").addClass("btn btn-danger").css("float", "right").on("click", cloneMe)
        // }
    }


    function cloneMe() {
        $(this).parent().clone(true).appendTo(target1)
    }

    input.remove()
})








