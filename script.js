
// بيانات المساعدات
var aids = [
  { type: "غذاء", area: "غزة", date: "10/1/2026", status: "متاح" },
  { type: "دواء", area: "رفح", date: "12/1/2026", status: "مكتمل" },
  { type: "مياه", area: "خانيونس", date: "15/1/2026", status: "متاح" }
];

// الوصول إلى جسم الجدول
var table = document.getElementById("aidTable");

// تعبئة الجدول بالبيانات
aids.forEach(function(aid) {

  var statusClass = aid.status === "متاح" ? "text-success fw-bold" : "text-danger fw-bold";

  table.innerHTML +=
    "<tr>" +
      "<td>" + aid.type + "</td>" +
      "<td>" + aid.area + "</td>" +
      "<td>" + aid.date + "</td>" +
      "<td class='" + statusClass + "'>" + aid.status + "</td>" +
    "</tr>";
});

// التحكم بزر إرسال الطلب
document.getElementById("requestForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("formMsg").innerText = "تم إرسال الطلب بنجاح";
});