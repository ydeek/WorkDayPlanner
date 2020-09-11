$(".container").on("click", ".hour-block", function () {
    alert(($(this).text()))
})


const get_rows = () => {
    const now = new Date();
    const hours = now.getHours()
    for (let i = 9; i < 17; i++) {
        let time = "present"
        if (i < hours) {
            time = "past"
        } else if (i > hours) {
            time = " future"
        }

        $(".container").append(`<div id="calendar-row${i}" class="row justify-content-md-center border-top border-bottom calendar-row">
        <div id="time${i}" class="col-md-1 ${time} hour-block">${i <= 12 ? `${i} AM` : `${i - 12} PM`}</div>
        <textarea rows="${i}" id="text-entry2" class="col-md-10"></textarea>
        <button id="save2" class="col-md-1"><i class="far fa-save"></i></button>
      </div>`)
    }
}

get_rows()