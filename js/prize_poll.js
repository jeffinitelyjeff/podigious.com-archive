if (!String.prototype.startsWith) {
  String.prototype.startsWith = function(searchString, position) {
    position = position || 0;
    return this.indexOf(searchString, position) === position;
  };
}

$(document).ready(function() {
  var image_table = {
    // poll prizes
    adventureengdvds: 'prize/s1_boxset',
    '02engdvds': 'prize/s2_boxset',
    tamersengdvds: 'prize/s3_boxset',
    frontierengdvds: 'prize/s4_boxset',
    datasquadengdvds: 'prize/s5_boxset',
    cybersleuthps4: 'prize/cyber_sleuth',
    cybersleuthvita: 'prize/cyber_sleuth',
    dukemondarts: 'prize/dukemon_darts',
    beelzebumondarts: 'prize/beelzebumon',
    chaosdukemonfiguarts: 'prize/chaosdukemon',
    wargreymondarts: 'prize/wargreymon',
    metalgarurumonfiguarts: 'prize/metalgarurumon',
    omegamondarts: 'prize/omegamon',
    omegamonowgfiguarts: 'prize/omegamon_owg',
    imperialdramondarts: 'prize/imperialdramon',
    imperialdramonpm: 'prize/imperialdramon_pm',
    alphamonfiguarts: 'prize/alphamon',
    taichiagumongem: 'prize/taichi_agumon',
    yamatogabumongem: 'prize/yamato_gabumon',
    takerupatamongem: 'prize/takeru_patamon',
    hikaritailmongem: 'prize/hikari_tailmon',
    kenwormmongem: 'prize/ken_wormmon',
    takeruangemongem: 'prize/takeru_angemon',
    hikariangewomongem: 'prize/hikari_angewomon',
    digivicewatch: 'prize/digivice_watch',
    tricompleteseldigivice: 'prize/digivice_tri_animation',
    digivicever15vpet: 'prize/digivice_15'
  }

  var imgs = [];

  var add_image = function(i, elem) {
    answer_text = $(elem).text();
    answer_key = answer_text.replace(/\W/g, '').toLowerCase().slice(0, 25);

    // for generating the keys
    console.log(answer_key);

    answer_name = image_table[answer_key];
    if (answer_name) {
      var extension = answer_name.startsWith('prize/') ? '.jpg' : '.png';
      var answer_file = '/img/' + answer_name + '_thumb' + extension;
      // $(elem).text('');
      var img = $('<img class="answer_img" src="' + answer_file + '"/>').hide();
      imgs.push(img);
      $(elem).append(img);
    }
  };

  var add_poll_images = function() {
    $('.sidebar-poll .pds-answer-group').each(add_image);
  };

  var set_up = function() {
    add_poll_images();

    var poll_header = $('.sidebar-poll .pds-question');
    var poll_show_imgs = $('<div class="sidebar-poll-show-imgs pointer">Show images</div>');
    var poll_hide_imgs = $('<div class="sidebar-poll-hide-imgs pointer">Hide images</div>').hide();
    poll_header.append(poll_show_imgs).append(poll_hide_imgs);

    var poll_stuff = $('#PDI_form8855023 .pds-answer, #PDI_form8855023 .pds-vote');
    var open_poll = $('<i class="icon-right-open"></i>');
    var close_poll = $('<i class="icon-down-open"></i>').hide();

    var toggle = function() {
      imgs.forEach(function(img) { img.toggle(300); });
      poll_show_imgs.toggle(300);
      poll_hide_imgs.toggle(300);
    };

    poll_show_imgs.click(toggle);
    poll_hide_imgs.click(toggle);
  }

  set_up();
});