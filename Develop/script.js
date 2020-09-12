
$("#currentDay").text(moment().format('MMMM Do YYYY'));


$(".container").on("click", ".hour-block", function () {
    const hour = $(this).attr("hour")
    const id = `#textarea-${hour}`
    const text = $(id).val()
    localStorage.setItem(hour, text)
})

const get_rows = () => {
    const now = new Date();
    const hours = now.getHours()
    for (let i = 9; i < 18; i++) {
        let time = "present"
        if (i < hours) {
            time = "past"
        } else if (i > hours) {
            time = " future"
        }

        $(".container").append(`
    <div id="calendar-row${i}" class="row justify-content-md-center border-top border-bottom calendar-row ${time}">
        <div id="time${i}" class="col-md-1 ${time}">${i <= 12 ? `${i} AM` : `${i - 12} PM`}</div>
        <textarea rows="3" id="textarea-${i}" class="col-md-10"></textarea>
        <button id="save2" class="col-md-1 hour-block" hour=${i}><i class="far fa-save"></i></button>
      </div>`)
    }
}

get_rows()