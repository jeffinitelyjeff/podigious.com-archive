$(document).ready(function() {
  $('.altable-banner').each(function() {
    var $img = $(this).find('img');
    var src = $img.attr('src');
    var parts = src.split('.');
    parts[parts.length - 2] = parts[parts.length - 2] + '_alt';
    var new_src = parts.join('.');
    console.log(src);
    console.log(new_src);
    $(this).hover(function() {
      $img.attr('src', new_src);
    }, function() {
      $img.attr('src', src);
    });
  });
});