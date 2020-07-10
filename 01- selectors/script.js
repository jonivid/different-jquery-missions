let mode = "on";
$("#fadeBtn").on("click", () => {
    if (mode === "on") {
        $(".blueDiv").fadeOut(2000, () => {
            mode = "off"
        })
    }
    else if (mode === "off") {
        $(".blueDiv").fadeIn(2000, () => {
            mode = "on"
        })


    }



})



