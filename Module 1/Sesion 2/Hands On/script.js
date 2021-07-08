const students = [
  {
    name: 'Alice',
    age: 20,
  },
  {
    name: 'Samuel',
    age: 21,
  },
  {
    name: 'Jonson',
    age: 23,
  },
];

const tb_students = document.getElementById('tb-average');
tb_students.innerHTML = '<th>' + 'Name' + '<th>' + 'Age';
for (let i = 0; i < 3; i++) {
  tb_students.innerHTML += '<tr><td>' + students[i].name + '</td><td>' + students[i].age + '</td></tr>';
}

const calAv = (students) => {
  const total = students.reduce((acc, student) => acc + student.age, 0);
  return total / students.length;
};

const wait = (time) => new Promise((resolve) => setTimeout(resolve, time));
const avg = () => {
  console.log('calculated start');
  console.log('second call start');
  wait(2000).then(() => {
    console.log('scond call finished');
    console.log('third call start');
  });
  wait(5000).then(() => {
    const Average = calAv(students);
    document.getElementById('average').innerHTML = Average;
  });
  wait(5000).then(() => console.log('third call finished'));
};

document.getElementById('btn-average').addEventListener('click', avg);
