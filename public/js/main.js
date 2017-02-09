$(() => {
  console.log('script file loaded');

  // Highlgihts partial background-image jquery
  $('#section-one').on('mouseover', () => {
    $('#one').css('background-image', 'url("/images/social-medias/usmc-filled.png")');
  });
  $('#section-one').mouseout(() => {
    $('#one').css('background-image', 'url("/images/social-medias/usmc.png")');
  });
  $('#section-two').on('mouseover', () => {
    $('#two').css('background-image', 'url("/images/social-medias/education-filled.png")');
  });
  $('#section-two').mouseout(() => {
    $('#two').css('background-image', 'url("/images/social-medias/education.png")');
  });
  $('#section-three').on('mouseover', () => {
    $('#three').css('background-image', 'url("/images/social-medias/work-filled.png")');
  });
  $('#section-three').mouseout(() => {
    $('#three').css('background-image', 'url("/images/social-medias/work.png")');
  });
  $('#section-four').on('mouseover', () => {
    $('#four').css('background-image', 'url("/images/social-medias/entrepreneur-filled.png")');
  });
  $('#section-four').mouseout(() => {
    $('#four').css('background-image', 'url("/images/social-medias/entrepreneur.png")');
  });
  // Footer background-image jquery
  $('#github').on('mouseover', () => {
    $('#github').css('background-image', 'url("/images/social-medias/github-red.png")');
  });
  $('#github').mouseout(() => {
    $('#github').css('background-image', 'url("/images/social-medias/github.png")');
  });
  $('#linkedin').on('mouseover', () => {
    $('#linkedin').css('background-image', 'url("/images/social-medias/linkedin-red.png")');
  });
  $('#linkedin').mouseout(() => {
    $('#linkedin').css('background-image', 'url("/images/social-medias/linkedin.png")');
  });
  $('#resume').on('mouseover', () => {
    $('#resume').css('background-image', 'url("/images/social-medias/resume-red.png")');
  });
  $('#resume').mouseout(() => {
    $('#resume').css('background-image', 'url("/images/social-medias/resume.png")');
  });

});
