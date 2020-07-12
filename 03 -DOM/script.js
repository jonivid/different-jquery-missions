
$(function () {
    let bigger
    let lower
    const fillBtn = $("#fillBtn")
    const numList = $("#numList")

    $(fillBtn).on("click", () => {

        $(numList).empty()
        const first = $(firstNum)
        const seconed = $(seconedNum)
        if ($(first).val() > $(seconed).val()) {
            bigger = $(first).val()
            lower = $(seconed).val()


        }
        else {
            lower = $(first).val()
            bigger = $(seconed).val()
        }


        for (let i = lower; i <= bigger; i++) {
            const select = $("<Option></option>").text(i)
            $(numList).append(select)
        }
    })



})