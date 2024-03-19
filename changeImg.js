$(document).ready(function() {
  $('#textMiddleImgOneImg').on({
      'click': function() {
        let src = ($(this).attr('src'));

      if(src === '/pictures/voloGuide.jpg'){
        $(this).attr('src', '/pictures/underground.webp');
      }
      else if (src === '/pictures/underground.webp'){
        $(this).attr('src', '/pictures/tavern.jpg');
      }
      else if (src === '/pictures/tavern.jpg'){
        $(this).attr('src', '/pictures/voloGuide.jpg');
      }
      }
    });
});