if (!String.prototype.startsWith) {
  String.prototype.startsWith = function(searchString, position) {
    position = position || 0;
    return this.indexOf(searchString, position) === position;
  };
}

$(document).ready(function() {
  var image_table = {
    // poll prizes
    adventureengdvds: 'prize_s1_boxset',
    '02engdvds': 'prize_s2_boxset',
    tamersengdvds: 'prize_s3_boxset',
    frontierengdvds: 'prize_s4_boxset',
    datasquadengdvds: 'prize_s5_boxset',
    cybersleuthps4: 'prize_cyber_sleuth',
    cybersleuthvita: 'prize_cyber_sleuth',
    dukemondarts: 'prize_dukemon_darts',
    beelzebumondarts: 'prize_beelzebumon',
    chaosdukemonfiguarts: 'prize_chaosdukemon',
    wargreymondarts: 'prize_wargreymon',
    metalgarurumonfiguarts: 'prize_metalgarurumon',
    omegamondarts: 'prize_omegamon',
    omegamonowgfiguarts: 'prize_omegamon_owg',
    imperialdramondarts: 'prize_imperialdramon',
    imperialdramonpm: 'prize_imperialdramon_pm',
    alphamonfiguarts: 'prize_alphamon',
    taichiagumongem: 'prize_taichi_agumon',
    yamatogabumongem: 'prize_yamato_gabumon',
    takerupatamongem: 'prize_takeru_patamon',
    hikaritailmongem: 'prize_hikari_tailmon',
    kenwormmongem: 'prize_ken_wormmon',
    takeruangemongem: 'prize_takeru_angemon',
    hikariangewomongem: 'prize_hikari_angewomon',
    digivicewatch: 'prize_digivice_watch',
    tricompleteseldigivice: 'prize_digivice_tri_animation',
    digivicever15vpet: 'prize_digivice_15'
  }

  var imgs = [];

  var add_image = function(i, elem) {
    answer_text = $(elem).text();
    answer_key = answer_text.replace(/\W/g, '').toLowerCase().slice(0, 25);

    // for generating the keys
    console.log(answer_key);

    answer_name = image_table[answer_key];
    if (answer_name) {
      var extension = answer_name.startsWith('prize_') ? '.jpg' : '.png';
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