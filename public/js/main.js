$(() => {
  console.log('script file loaded');

  // Footer image jquery
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
