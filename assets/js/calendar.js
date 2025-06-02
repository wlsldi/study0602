
const monthYearEl = document.getElementById('monthYear');
const calendarGrid = document.getElementById('calendarGrid');
const prevBtn = document.getElementById('prevMonth');
const nextBtn = document.getElementById('nextMonth');

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

function renderCalendar(month, year) {
  calendarGrid.innerHTML = "";
  monthYearEl.textContent = `${month + 1}월`;

  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();

  for (let i = 0; i < firstDay; i++) {
    const emptyCell = document.createElement("div");
    calendarGrid.appendChild(emptyCell);
  }

  for (let date = 1; date <= lastDate; date++) {
    const day = document.createElement("div");
    day.className = "calendar-day";
    day.textContent = date;

    let timer;
    day.addEventListener("mousedown", () => {
      timer = setTimeout(() => {
        const list = prompt("일정을 입력하세요");
        if (list) {
          const span = document.createElement("span");
          span.className = "list";
          span.textContent = list;
          day.appendChild(span);
        }
      }, 1000);
    });

    day.addEventListener("mouseup", () => clearTimeout(timer));
    day.addEventListener("click", () => {
      window.location.href = "../diary/diary.html";
    });

    calendarGrid.appendChild(day);
  }
}

prevBtn.addEventListener("click", () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  renderCalendar(currentMonth, currentYear);
});

nextBtn.addEventListener("click", () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  renderCalendar(currentMonth, currentYear);
});

renderCalendar(currentMonth, currentYear);
