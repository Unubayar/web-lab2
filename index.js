let data = {
  year: "2021",
  month: "0",
  weekday: "",
  day: "0",
  days: [],
  alldays: 31,
  nextDays: 7,
};
const weekdays = {
  0: "Ня",
  1: "Да",
  2: "Мя",
  3: "Лх",
  4: "Пү",
  5: "Ба",
  6: "Бя",
};
const months = {
  1: "jan",
  2: "feb",
  3: "mar",
  4: "apr",
  5: "may",
  6: "jun",
  7: "jul",
  8: "aug",
  9: "sep",
  10: "oct",
  11: "nov",
  12: "dec",
};
const calendar2021 = {
  jan: { 1: "Сайхан амарна" },
  feb: {
    1: "Сагсны тэмцээнтэй",
    3: "Шагнал гардуулна даа",
    17: "Жавхлан багшийн лаб 2-ыг хийнэ",
  },
  mar: {
    2: "Энэ лабынхаа хугацааг сунгах уу яах вэ гэдэгээ шийднэ",
    6: "Энд юу бичье дээ байз",
    8: "Эмэгтэйчүүддээ баяр хүргэнэ дээ",
  },
  apr: { 1: "Бүгдээрээ худлаа ярьцаагаагаарай" },
  may: { 10: "Энэ сард ч ёстой юу ч болдоггүй сар даа" },
  jun: { 6: "Жавхлан багшийн төрсөн өдөр" },
  jul: { 4: "Хичээл амарсаан ураа" },
  aug: { 1: "Хөдөө явдаг цаг даа", 25: "Хичээл сонголт эхэллээ" },
  sep: { 1: "9-н сарын нэгэн боллоо ерөөсөө бидний баяр даа" },
  oct: { 13: "Сур сур бас дахин сур" },
  nov: { 2: "Сурсаар л бай" },
  dec: {
    20: "Өвлийн семистер хаагдах нь дээ",
    30: "Дүн гаргаж дууслаа баярлалаа баяртай",
  },
};

const calendarContainer = document.querySelector(".calendar-container");
const descContainer = document.querySelector(".desc-container");
const calcDays = () => {
  data.days = [];
  data.alldays = new Date(data.year, data.month, 0).getDate();
  const startDay = new Date(`${data.year}/${data.month}/1`).getDay();
  for (let i = 1; i <= data.alldays; i++) {
    data.days.push(i);
  }
  for (let i = 0; i < startDay; i++) {
    data.days.unshift("");
  }
};

for (let i = 1; i <= 12; i++) {
  data.month = i;
  calcDays();
  let html = `
  <div class="calendar">
  <header class="calendar__header">
    <h1 class="calendar__header__month">${data.month}-р сар</h1>
  </header>
  <div class="calendar__body">
    <div class="calendar__body__week-days">
      <div>Ня</div>
      <div>Да</div>
      <div>Мя</div>
      <div>Лх</div>
      <div>Пү</div>
      <div>Ба</div>
      <div>Бя</div>
    </div>
    <div class="calendar__body__month-days">
    ${data.days
      .map((day) => {
        return `<div><span class=${
          Object.keys(calendar2021[months[i]]).includes("" + day) &&
          `cbox cbox--green`
        }>${day}<span></div>`;
      })
      .join("")}
    </div>
  </div>
</div>
  `;
  calendarContainer.insertAdjacentHTML("beforeend", html);
}
console.log(Object.entries(calendar2021));
Object.entries(calendar2021).map((month) => {
  html = `
    <div class="desc">
    <div class="desc__month">${Object.keys(months).find(
      (key) => months[key] === month[0]
    )}-сар</div>
    ${Object.entries(month[1])
      .map((day) => {
        console.log(day);
        return `<p><span>${day[0]}</span>${day[1]}</p>`;
      })
      .join("")}
   
  </div>
    `;
  console.log(month);
  descContainer.insertAdjacentHTML("beforeend", html);
});
