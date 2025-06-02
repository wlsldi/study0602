
const submitEl = document.querySelector(".btnLogin");
const formEl = document.forms[0];
const frmId = formEl.username;
const frmPw = formEl.password;

submitEl.addEventListener("click", function (event) {
  event.preventDefault();

  const idValue = frmId.value.trim();
  const pwValue = frmPw.value.trim();

  if (idValue === "") {
    alert("아이디를 입력해 주세요.");
    frmId.focus();
    return;
  }

  if (!idValue.includes("@")) {
    alert("아이디는 이메일 형식으로 입력해 주세요.");
    frmId.focus();
    return;
  }

  if (pwValue === "") {
    alert("비밀번호를 입력해 주세요.");
    frmPw.focus();
    return;
  }

  if (pwValue.length < 5) {
    alert("비밀번호는 5자리 이상 입력해 주세요.");
    frmPw.focus();
    return;
  }

  // 로그인 성공 시 캘린더로 이동
  window.location.href = "../calendar/calendar.html";
});
