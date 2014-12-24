$(document).ready(function() {
  image_table = {
    ep7digmonholdstillyoupile: 'rdd_202_scrap_metal',
    ep8karihesjustakidlikeyou: 'rdd_202_nice_friends',
    ep8kariwhereishetkizzynow: 'rdd_202_izzy',
    ep8kariwhatsitdoingthereg: 'rdd_202_control_spire',
    ep9yoleilookathisiqhecoul: 'rdd_202_program_my_computer',
    ep10daviswheresyoleiizzys: 'rdd_202_glasses',
    ep10tentomonwelcometomytr: 'rdd_202_twig_house',
    ep10kenhowdidagumongetawa: 'rdd_202_escape_clause',
    ep13teacherladiesandgentl: 'rdd_203_math',
    ep13yoleibyincreasingthes: 'rdd_203_party',
    ep13divermonnowthatswhati: 'rdd_203_redeye'
  }

  $('.PDS_Poll .pds-answer-span').each(function(i, elem) {
    answer_text = $(elem).text();
    answer_key = answer_text.replace(/\W/g, '').toLowerCase().slice(0, 25);
    answer_name = image_table[answer_key];
    if (answer_name) {
      answer_file = '/img/' + answer_name + '.png';
      // $(elem).text('');
      img = $('<img class="answer_img" src="' + answer_file + '" />');
      $(elem).append(img);
    }
  });
});