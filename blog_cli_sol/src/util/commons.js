function setCurTime() {
  let resId = 0;
  
  resId = setInterval(displayNow, 1000);
  function displayNow() {
    let now = new Date();
    let currentTime = now.toLocaleTimeString();
    document.querySelector("#time").innerHTML = currentTime;
  }
  return resId;
}

function checkAll() {
  let chkAll = document.querySelector("#chkAll");
  let tableComplain = document.querySelector("#tableComplain");

  console.log(chkAll.checked);
  if (chkAll.checked == true) {
    for (let i = 1; i < tableComplain.rows.length; i++) {
      tableComplain.rows[i].cells[5].innerHTML = "완료";
    }
  }
}

export {setCurTime, checkAll}