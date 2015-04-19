$(document).ready(function() {
  var image_table = {
    ep2tentomonjustthetempleb: 'rdd_201_temple',
    ep2mojyamonbeingtheempero: 'rdd_201_cappucino',
    ep4junigetallthecuteboyst: 'rdd_201_cute_boys',
    ep4redvegiemonwoahdidiget: 'rdd_201_marriage',
    ep5kennumberonedonteverta: 'rdd_201_sir',
    ep5kenwormmonwhatisplanbw: 'rdd_201_plan_b',
    ep6willtheownerofthegray7: 'rdd_201_747',
    ep6yoleiwaithawkmoncomeba: 'rdd_201_california_roll',
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
    ep29davisthisiswhyidontsu: 'rdd_206_websites',
    ep31kariitsbeautifulyolei: 'rdd_207_beautiful',
    ep31gatomonithinkbigbroth: 'rdd_207_big_brother',
    ep32ankylomonnotsomuchfun: 'rdd_207_bottom',
    ep32agumonalwayswiththewh: 'rdd_207_logic',
    ep36mummymoneitherthisisa: 'rdd_207_matzah_ball',
    ep36mummymontellmemygoodm: 'rdd_207_noodles',
    ep37azulongmonyesizzyisqu: 'rdd_207_intelligent',
    ep37azulongmonblackwargre: 'rdd_207_questions',
    ep37daviswellkeeponeeyeon: 'rdd_207_davis',
    ep38guy1whataconcertthese: 'rdd_208_woodstock',
    ep39yoleiahaghostgennaino: 'rdd_208_ghost',
    ep39arukenimonwherearethe: 'rdd_208_cards',
    ep39izzytaiwhydontyouwrit: 'rdd_208_sandwiches',
    ep40chinesegeneralhuhweco: 'rdd_208_b_movie',
    ep41joeitshoweverybodyisi: 'rdd_208_laid_back',
    ep41tksgrandfatherprepare: 'rdd_208_versailles',
    ep41crabmonillhandlethisl: 'rdd_208_arachnid',
    ep43davissodidadogchewony: 'rdd_209_ugly',
    ep43daviswhatdontyouguysw: 'rdd_209_mute',
    ep44davissoyourejoesbroth: 'rdd_209_cool',
    ep45davisbullseyebabyashe: 'rdd_209_bullseye',
    ep46gatomondoyouevernotge: 'rdd_210_mail',
    ep47arukenimonheypaildram: 'rdd_210_bucket',
    ep47norikowithoutthedarks: 'rdd_210_potatoes',
    ep48gatomonthatthatvoicek: 'rdd_210_myotismon',
    ep48davisjustimagineitsth: 'rdd_210_soccer',
    ep49malomyotismonoopsithi: 'rdd_210_broke',
    ep50taiheyivegotanideadig: 'rdd_210_please',
    ep50izzymakesureyoudontac: 'rdd_210_ramcat',
    demiveemondavisguesswhath: 'rdd_211_what',
    upamonitsabiggustofwindco: 'rdd_211_wind',
    willishuhhesgotpantsnowje: 'rdd_211_pants',
    terriermonwillisididntmea: 'rdd_211_ears',
    wallaceletsgobackiwanttos: 'rdd_211_sleeping',
    angemonthatsitangewomonwe: 'rdd_211_diapers'
  }

  var add_image = function(i, elem) {
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

  var add_poll_images = function() {
    $('.pds-answer-group').each(add_image);
  };

  var add_result_images = function() {
    $('.pds-answer-text').each(add_image);
  };

  add_poll_images();
  // add_result_images();
  // $('.pds-return-poll').click(function() { console.log("test"); setTimeout(1000, add_poll_images); });
  // $('.pds-view-results').click(function() { console.log("test"); setTimeout(1000, add_result_images); });

});