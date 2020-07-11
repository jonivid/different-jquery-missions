const input = $("#inputValue1");
const target1 = $("#target1");
const input2 = $("#inputValue2");
const target2 = $("#target2");
$("#copyBtn1").on("click", () => {


    target1.empty()
    const newP = _getListItem(input.val())
    target1.append(newP)
    function _getListItem(value) {
        const cls = 'list-group-item'
        const listItem = $('<p></p>').text(value)
        return listItem

    }

    input.remove()
});
$("#copyBtn2").on("click", () => {
    target2.empty();
    const newP = _getListItem(input2.val())
    target2.append(newP)
    function _getListItem(value) {
        const cls = 'list-group-item'
        const listItem = $('<p></p>').text(value)
        return listItem

    }
    input2.remove()


})









