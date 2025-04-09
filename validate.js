function validateForm() {
  const nid = document.getElementById("nid").value.trim();
  const gender = document.querySelector('input[name="gender"]:checked');
  const year = document.getElementById("year").value;
  const days = parseInt(document.getElementById("days").value.trim());

  if (nid === "" || !/^\d{13}$/.test(nid)) {
    alert("กรุณากรอกเลขบัตรประชาชนให้ถูกต้อง (13 หลัก)");
    return false;
  }

  if (!gender || !["Male", "Female", "Other"].includes(gender.value)) {
    alert("กรุณาเลือกเพศให้ถูกต้อง");
    return false;
  }

  if (year === "") {
    alert("กรุณาเลือกชั้นปี");
    return false;
  }

  if (isNaN(days) || days < 1 || days > 6) {
    alert("กรุณากรอกจำนวนวันที่สามารถทำงานได้ (1–6)");
    return false;
  }

  const pay = calculatePayRate(year, days);
  alert("ลงทะเบียนสำเร็จ!\nWeekly Pay ของคุณคือ: " + pay + " บาท");
  return false;
}

function resetForm() {
  document.querySelector("form").reset();
}
