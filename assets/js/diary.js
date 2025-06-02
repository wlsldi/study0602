
const listInput = document.getElementById("list");
const thoughtInput = document.getElementById("thought");
const saveBtn = document.getElementById("saveDiary");
const savedDiary = document.getElementById("savedDiary");

saveBtn.addEventListener("click", () => {
  const list = listInput.value.trim();
  const thought = thoughtInput.value.trim();
  if (!list || !thought) {
    alert(" 일정을 모두 입력해주세요..");
    return;
  }

  const diaryData = {
    list: list,
    thought: thought,
    date: new Date().toLocaleDateString("ko-KR")
  };

  localStorage.setItem("myDiary", JSON.stringify(diaryData));
  showSavedDiary();
});

function showSavedDiary() {
  const data = JSON.parse(localStorage.getItem("myDiary"));
  if (data) {
    savedDiary.innerHTML = `<p><strong>${data.date}</strong> ${data.list} - ${data.thought}</p>`;
  }
}

showSavedDiary();
