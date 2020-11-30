'use strict';

jQuery(function () {
  console.log('I\'m working');
  renderProtfolio();
});

function renderProtfolio() {
  var projects = getGProjects();

  var strHtmls  = projects.map(function (proj, idx) {  
    return `<div class="col-md-4 col-sm-6 portfolio-item">
    <a class="portfolio-link" data-toggle="modal" href="#portfolioModal" onclick="onSwitchModal(${idx})">
    <div class="portfolio-hover">
    <div class="portfolio-hover-content">
    <i class="fa fa-plus fa-3x"></i>
    </div>
    </div>
    <img class="img-fluid" src="img/portfolio/${proj.id}.jpg" > </a>
    <div class="portfolio-caption">
    <h4>${proj.name}</h4>
    <p class="text-muted">${proj.title}</p>
    </div>
    </div>`;
  });

  $('.portfolio-items').html(strHtmls.join(''));
}

function onSwitchModal(idx) {
  var project = findProjByIdx(idx);
  $('.modal-body h2').text(project.name);
  $('.modal-body .item-intro').text(project.title);
  $('.modal-body img').attr('src', `img/portfolio/${project.id}.jpg`);
  $('.modal-body .modal-text').text(project.desc);
  $('.modal-body li:first-child').text(project.publishedAt);
}

function onSendForm() {
  var $userMail = $('input[type=email]');
  var $userSubject = $('input[type=text]');
  var $msgBody = $('textarea');
  if ($msgBody.val() === '' || $userSubject.val() === '' || $userMail.val() === '') return;
  var url = `https://mail.google.com/mail/?view=cm&fs=1&to=${$userMail.val()}&su=${$userSubject.val()}&body=${$msgBody.val()}`;

  window.open(url);

  $userSubject.val('')
  $msgBody.val('');
  $userMail.val('');
}