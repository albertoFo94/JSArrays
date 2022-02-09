const users = [
  { userId: 1, username: "Alberto", attributes: ["Smart", "Cool"] },
  { userId: 2, username: "Sofi", attributes: ["Beatiful", "Lovely"] },
  { userId: 3, username: "Daniela", attributes: ["Nice", "Cool"]}
];

const answer = users.map(user => user.attributes).flat();
const answer2 = users.flatMap(user => user.attributes);
console.log('map-flat', answer);
console.log('answer2', answer2);

const calendars = {
  primaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita 1"
    },
    {
      startDate: new Date(2021, 1, 1, 17),
      endDate: new Date(2021, 1, 1, 18),
      title: "Cita 2"
    }
  ],
  secondaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 12),
      endDate: new Date(2021, 1, 1, 12, 30),
      title: "Cita 3"
    },
    {
      startDate: new Date(2021, 1, 1, 9),
      endDate: new Date(2021, 1, 1, 10),
      title: "Cita 4"
    },
  ],
};

const answer3 = Object.values(calendars).flatMap(item => {
  return item.map(date => date.startDate);
});
console.log(answer3);