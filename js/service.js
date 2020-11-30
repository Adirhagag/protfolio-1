'use strict';
var gProjs = [];

createProjects();

function createProj() {
  return {
    id: 'Minesweeper',
    name: 'Minesweeper',
    title: 'The first sprint',
    desc: 'This was the first sprint and it was very strassful',
    url: 'projs/sokoban',
    publishedAt: 1448693940000,
    labels: ['Matrixes', ' Loops'],
  }
}

function createProjects() {
  var projects = [];
  var firstProj = createProj();
  projects.push(firstProj)

  var secondProj = createProj();
  secondProj.id = 'Touch-Nums';
  secondProj.name = 'Touch Nums';
  secondProj.title = 'Numbers guy/girl?';
  secondProj.desc = 'My most loved game, simple but fun after only 2 weeks';
  secondProj.labels = ['short logic', ' User intraction']
  projects.push(secondProj)

  var thirdProj = createProj();
  thirdProj.id = 'Book-Shoop';
  thirdProj.name = 'Book Shoop';
  thirdProj.title = 'Books guy/girl?';
  thirdProj.desc = 'Working with user inputs and view books';
  thirdProj.labels = [' local storage'];
  projects.push(thirdProj)

  gProjs = projects;
  console.log(gProjs);
}


function getGProjects() {
  return gProjs;
}

function findProjByIdx(idx) {
  return gProjs[idx];
}