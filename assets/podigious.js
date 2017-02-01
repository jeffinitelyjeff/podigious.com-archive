var make_new_path = function(parts, original_name, extension) {
  parts[parts.length - 2] = original_name + extension;
  return parts.join('.');
}

var random_element = function(arr) {
  return arr[Math.floor(Math.random()*arr.length)];
}

$(document).ready(function() {
  $('.altable-banner').each(function() {
    var $img = $(this).find('img');
    var old_src = $img.attr('src');
    var parts = old_src.split('.');
    var original_name = parts[parts.length - 2];
    var new_srcs = [];
    if ($(this).data('banners')) {
      for (var i = 0; i < $(this).data('banners'); i++) {
        new_srcs.push(make_new_path(parts, original_name, '_alt' + i));
      }
    } else {
      new_srcs.push(make_new_path(parts, original_name, '_alt'));
    }
    console.log(old_src);
    console.log(new_srcs);
    $(this).hover(function() {
      $img.attr('src', random_element(new_srcs));
    }, function() {
      $img.attr('src', old_src);
    });
  });

  $('.shuffle-banner').shuffleImages({
    trigger: "imageMouseMove",
    triggerTarget: false,
    mouseMoveTrigger: 50,
    hoverTrigger: 200,
    scrollTrigger: 100,
    target: "> img"
  });

  $('a').not('.ts').attr('target', '_blank');
  $('.show-attributions').click(function() {
    $('.img-box .name').hide();
    $('.img-box .source').show();
    $('.show-attributions').hide();
    $('.hide-attributions').show();
  });
  $('.hide-attributions').click(function() {
    $('.img-box .name').show();
    $('.img-box .source').hide();
    $('.show-attributions').show();
    $('.hide-attributions').hide();
  });
});
