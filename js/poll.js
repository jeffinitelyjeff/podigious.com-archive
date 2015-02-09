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
    ep13divermonnowthatswhati: 'rdd_203_redeye',
    ep14yoleidoyouwanttoknoww: 'rdd_204_hobby',
    ep14yoleicarefulhesacting: 'rdd_204_eggsactly',
    ep15karidavisyouresoinsen: 'rdd_204_sensitive',
    ep16joesansweringmachinei: 'rdd_204_biology',
    ep16gatomonlaughtersjusta: 'rdd_204_laughter',
    ep17mattwelljusttakeastro: 'rdd_204_expired',
    ep17davishedoesntstandagh: 'rdd_204_ghost',
    ep17mattthosedishesaresod: 'rdd_204_dishes',
    ep17tkohyeahstartingtomor: 'rdd_204_detention',
    ep18veemonohdontworryabou: 'rdd_205_davis',
    ep18tentomonwhatsshedoing: 'rdd_205_hammer',
    ep19wormmonyouusedtolovet: 'rdd_205_bah',
    ep19kenwheresmyvcrohiwish: 'rdd_205_vcr',
    ep20tentomonwehave2option: 'rdd_205_quit',
    ep20tkitlookslikesomethin: 'rdd_205_fantasy',
    ep20gabumonthanksagumonyo: 'rdd_205_hot',
    ep21digmoncomeoneveryonef: 'rdd_205_follow',
    ep22veemongatomonwouldntl: 'rdd_206_digivolve',
    ep22redvegiemontodaysentr: 'rdd_206_tuna',
    ep23punimonitstoolatefory: 'rdd_206_cliches',
    ep23punimonwerenotgoingto: 'rdd_206_arms',
    ep25gatomonnogoforgatojef: 'rdd_206_gato',
    ep27davissometimesiwishiz: 'rdd_206_smart',
    ep27yoleiyourearealbadegg: 'rdd_206_scrambled',
    ep28davisthisplacehasmore: 'rdd_206_computer',
    ep29davisthisiswhyidontsu: 'rdd_206_websites'
  }

  add_image = function(i, elem) {
    answer_text = $(elem).text();
    answer_key = answer_text.replace(/\W/g, '').toLowerCase().slice(0, 25);

    // for generating the keys
    console.log(answer_key);

    answer_name = image_table[answer_key];
    if (answer_name) {
      answer_file = '/img/' + answer_name + '.png';
      // $(elem).text('');
      img = $('<img class="answer_img" src="' + answer_file + '" />');
      $(elem).append(img);
    }
  };

  add_poll_images = function() {
    $('.pds-answer-group').each(add_image);
  };

  add_result_images = function() {
    $('.pds-answer-text').each(add_image);
  };

  add_poll_images();
  // add_result_images();
  // $('.pds-return-poll').click(function() { console.log("test"); setTimeout(1000, add_poll_images); });
  // $('.pds-view-results').click(function() { console.log("test"); setTimeout(1000, add_result_images); });

});