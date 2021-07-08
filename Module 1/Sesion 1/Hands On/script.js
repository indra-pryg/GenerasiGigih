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

const handleClick = () => {
  const Average = calAv(students);
  document.getElementById('average').innerHTML = Average;
};

document.getElementById('btn-average').addEventListener('click', handleClick);
