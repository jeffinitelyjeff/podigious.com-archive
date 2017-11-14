if (!String.prototype.startsWith) {
  String.prototype.startsWith = function(searchString, position) {
    position = position || 0;
    return this.indexOf(searchString, position) === position;
  };
}

$(document).ready(function() {
  var image_table = {
    // ep 201
    ep2tentomonjustthetempleb: 'rdd/201/temple',
    ep2mojyamonbeingtheempero: 'rdd/201/cappucino',
    ep4junigetallthecuteboyst: 'rdd/201/cute_boys',
    ep4redvegiemonwoahdidiget: 'rdd/201/marriage',
    ep5kennumberonedonteverta: 'rdd/201/sir',
    ep5kenwormmonwhatisplanbw: 'rdd/201/plan_b',
    ep6willtheownerofthegray7: 'rdd/201/747',
    ep6yoleiwaithawkmoncomeba: 'rdd/201/california_roll',

    // ep 202
    ep7digmonholdstillyoupile: 'rdd/202/scrap_metal',
    ep8karihesjustakidlikeyou: 'rdd/202/nice_friends',
    ep8kariwhereishetkizzynow: 'rdd/202/izzy',
    ep8kariwhatsitdoingthereg: 'rdd/202/control_spire',
    ep9yoleilookathisiqhecoul: 'rdd/202/program_my_computer',
    ep10daviswheresyoleiizzys: 'rdd/202/glasses',
    ep10tentomonwelcometomytr: 'rdd/202/twig_house',
    ep10kenhowdidagumongetawa: 'rdd/202/escape_clause',

    // ep 203
    ep13teacherladiesandgentl: 'rdd/203/math',
    ep13yoleibyincreasingthes: 'rdd/203/party',
    ep13divermonnowthatswhati: 'rdd/203/redeye',

    // ep 204
    ep14yoleidoyouwanttoknoww: 'rdd/204/hobby',
    ep14yoleicarefulhesacting: 'rdd/204/eggsactly',
    ep15karidavisyouresoinsen: 'rdd/204/sensitive',
    ep16joesansweringmachinei: 'rdd/204/biology',
    ep16gatomonlaughtersjusta: 'rdd/204/laughter',
    ep17mattwelljusttakeastro: 'rdd/204/expired',
    ep17davishedoesntstandagh: 'rdd/204/ghost',
    ep17mattthosedishesaresod: 'rdd/204/dishes',
    ep17tkohyeahstartingtomor: 'rdd/204/detention',

    // ep 205
    ep18veemonohdontworryabou: 'rdd/205/davis',
    ep18tentomonwhatsshedoing: 'rdd/205/hammer',
    ep19wormmonyouusedtolovet: 'rdd/205/bah',
    ep19kenwheresmyvcrohiwish: 'rdd/205/vcr',
    ep20tentomonwehave2option: 'rdd/205/quit',
    ep20tkitlookslikesomethin: 'rdd/205/fantasy',
    ep20gabumonthanksagumonyo: 'rdd/205/hot',
    ep21digmoncomeoneveryonef: 'rdd/205/follow',

    // ep 206
    ep22veemongatomonwouldntl: 'rdd/206/digivolve',
    ep22redvegiemontodaysentr: 'rdd/206/tuna',
    ep23punimonitstoolatefory: 'rdd/206/cliches',
    ep23punimonwerenotgoingto: 'rdd/206/arms',
    ep25gatomonnogoforgatojef: 'rdd/206/gato',
    ep27davissometimesiwishiz: 'rdd/206/smart',
    ep27yoleiyourearealbadegg: 'rdd/206/scrambled',
    ep28davisthisplacehasmore: 'rdd/206/computer',
    ep29davisthisiswhyidontsu: 'rdd/206/websites',

    // ep 207
    ep31kariitsbeautifulyolei: 'rdd/207/beautiful',
    ep31gatomonithinkbigbroth: 'rdd/207/big_brother',
    ep32ankylomonnotsomuchfun: 'rdd/207/bottom',
    ep32agumonalwayswiththewh: 'rdd/207/logic',
    ep36mummymoneitherthisisa: 'rdd/207/matzah_ball',
    ep36mummymontellmemygoodm: 'rdd/207/noodles',
    ep37azulongmonyesizzyisqu: 'rdd/207/intelligent',
    ep37azulongmonblackwargre: 'rdd/207/questions',
    ep37daviswellkeeponeeyeon: 'rdd/207/davis',

    // ep 208
    ep38guy1whataconcertthese: 'rdd/208/woodstock',
    ep39yoleiahaghostgennaino: 'rdd/208/ghost',
    ep39arukenimonwherearethe: 'rdd/208/cards',
    ep39izzytaiwhydontyouwrit: 'rdd/208/sandwiches',
    ep40chinesegeneralhuhweco: 'rdd/208/b_movie',
    ep41joeitshoweverybodyisi: 'rdd/208/laid_back',
    ep41tksgrandfatherprepare: 'rdd/208/versailles',
    ep41crabmonillhandlethisl: 'rdd/208/arachnid',

    // ep 209
    ep43davissodidadogchewony: 'rdd/209/ugly',
    ep43daviswhatdontyouguysw: 'rdd/209/mute',
    ep44davissoyourejoesbroth: 'rdd/209/cool',
    ep45davisbullseyebabyashe: 'rdd/209/bullseye',

    // ep 210
    ep46gatomondoyouevernotge: 'rdd/210/mail',
    ep47arukenimonheypaildram: 'rdd/210/bucket',
    ep47norikowithoutthedarks: 'rdd/210/potatoes',
    ep48gatomonthatthatvoicek: 'rdd/210/myotismon',
    ep48davisjustimagineitsth: 'rdd/210/soccer',
    ep49malomyotismonoopsithi: 'rdd/210/broke',
    ep50taiheyivegotanideadig: 'rdd/210/please',
    ep50izzymakesureyoudontac: 'rdd/210/ramcat',

    // ep 211
    demiveemondavisguesswhath: 'rdd/211/what',
    upamonitsabiggustofwindco: 'rdd/211/wind',
    willishuhhesgotpantsnowje: 'rdd/211/pants',
    terriermonwillisididntmea: 'rdd/211/ears',
    wallaceletsgobackiwanttos: 'rdd/211/sleeping',
    angemonthatsitangewomonwe: 'rdd/211/diapers',

    // ep 212
    yoleiihaveproblemswiththe: 'rdd/212/paparazzi',
    davisveemonwhydidyouattac: 'rdd/212/one_eye',
    angemonithinkweshouldhave: 'rdd/212/directions',
    davislookhowcuteiwaswheni: 'rdd/212/little',

    // poll prizes
    adventureengdvdboxset: 'prize/s1_boxset',
    adventure02engdvdboxset: 'prize/s2_boxset',
    tamersengdvdboxset: 'prize/s3_boxset',
    frontierengdvdboxset: 'prize/s4_boxset',
    seasons14engdvdmegaboxset: 'prize/s14_boxset',
    datasquadengdvdboxset: 'prize/s5_boxset',
    adventurejpnbdboxset: 'prize/adventure_bds',
    adventuretrijpnbds: 'prize/tri_bds',
    cybersleuthps4: 'prize/cyber_sleuth',
    cybersleuthvita: 'prize/cyber_sleuth',
    dukemondarts: 'prize/dukemon_darts',
    beelzebumondarts: 'prize/beelzebumon',
    chaosdukemonfiguarts: 'prize/chaosdukemon',
    wargreymondarts: 'prize/wargreymon',
    metalgarurumonfiguarts: 'prize/metalgarurumon',
    omegamondarts: 'prize/omegamon',
    omegamonflowycapefiguarts: 'prize/omegamon_owg',
    imperialdramondarts: 'prize/imperialdramon',
    imperialdramonpmfiguarts: 'prize/imperialdramon_pm',
    alphamonfiguarts: 'prize/alphamon',
    taichiagumongem: 'prize/taichi_agumon',
    yamatogabumongem: 'prize/yamato_gabumon',
    takerupatamongem: 'prize/takeru_patamon',
    hikaritailmongem: 'prize/hikari_tailmon',
    kenwormmongem: 'prize/ken_wormmon',
    takeruangemongem: 'prize/takeru_angemon',
    hikariangewomongem: 'prize/hikari_angewomon',
    digivicewatch: 'prize/digivice_watch',
    adventuretricompleteselec: 'prize/digivice_tri_animation',
    digivicever15vpet: 'prize/digivice_15',

    // ep 301
    takatosmomcomeonagecreamw: 'rdd/301/thinking',
    rikagetingearrenamonorwel: 'rdd/301/gear',
    narratordaviswilltakatoge: 'rdd/301/grill',
    principalstudentshouldnty: 'rdd/301/box',
    ep2principalstudentshould: 'rdd/301/box',
    definitelynotdavisdidgorr: 'rdd/301/bananas',
    jeritakatoneedsagirlwhatf: 'rdd/301/girl',
    calumonheyyouknowwhatyour: 'rdd/301/swallow',
    takatoitsyouagainrikacant: 'rdd/301/you',

    // ep 302
    ep5calumonohnotheresthree: 'rdd/302/5_earrings',
    ep6dokugumonperfectiwasju: 'rdd/302/6_dinner',
    ep6renamonithinkyouneedac: 'rdd/302/6_cold_shower',
    ep7takatosmombutsincehesn: 'rdd/302/7_ice_cream',
    ep7takatosmomohwewerethes: 'rdd/302/7_dinosaurs',
    ep7guilmonyouknowwhatcalu: 'rdd/302/7_sausages',
    ep8policeofficerisayboyar: 'rdd/302/8_osculatory',
    ep9randomdudebuthoneyitsj: 'rdd/302/9_toupee',

    // ep 303
    ep13rikaidontevenfeellike: 'rdd/303/1_weird',
    ep13tallytallymaybeitsagl: 'rdd/303/2_engineers',
    ep13calumoncalumonzoomzoo: 'rdd/303/3_underwear',
    ep13rileyithinkthatleftov: 'rdd/303/4_lunch',

    // ep 304
    ep14growlmontamerrrritsno: 'rdd/304/6_serious',
    ep15officermanicantbeliev: 'rdd/304/2_vending_machine',
    ep16takatosighofreliefmsa: 'rdd/304/1_breathing',
    ep16henrythatfightwasshoc: 'rdd/304/3_shocking',
    ep16renamonthisstuffpacks: 'rdd/304/4_punch',
    ep16jeriareyousurethiswas: 'rdd/304/5_good_idea',

    // ep 306
    ep21takatoareyousurehesyo: 'rdd/306/21_destiny',
    ep21jeriwhatkindofdigimon: 'rdd/306/21_cramped',
    ep21leomonishouldgobefore: 'rdd/306/21_tears',
    ep22terriermonitsgoingtob: 'rdd/306/22_big',
    ep22soldier1sirwehaventbe: 'rdd/306/22_maneuvers',
    ep23vikaralamonnowyourego: 'rdd/306/23_cash',
    ep23taomonitwilltakemoret: 'rdd/306/23_brush',

    // ep 307
    ep25takatocouldntsleephen: 'rdd/307/25_wired',
    ep26jijimonohmystarswoman: 'rdd/307/26_singing',
    ep26renamonlookathowbarre: 'rdd/307/26_barren',
    ep26rikagohomeyourejustas: 'rdd/307/26_hair',
    ep26kazuwegottaaskjijimon: 'rdd/307/26_question',
    ep27guilmonhurryupbecause: 'rdd/307/27_bike',
    ep28guilmonhowcometerrier: 'rdd/307/28_mime',
    ep29terriermonwerenotinka: 'rdd/307/29_kansai',

    // ep 308
    ep30terriermonnowthatcalu: 'rdd/308/30_flagging',
    ep30jeriheydidyoureallyme: 'rdd/308/30_shut_up',
    ep31jerithanksialwaysdoge: 'rdd/308/31_tips',
    ep31terriermonmomentaihen: 'rdd/308/31_momentai',
    ep31leomonevenifjerisused: 'rdd/308/31_customer',
    ep31gekomoncomeandgetyour: 'rdd/308/31_shakey',
    ep32henryheywhatsthattaka: 'rdd/308/32_not_funny',
    ep32takatookayhowdoyousay: 'rdd/308/32_reassuring',

    // ep 310
    ep37kazuihaventevenstarte: 'rdd/310/37_sad_girls',
    ep37kazusheflewawaywhatdo: 'rdd/310/37_flew_away',
    ep37guilmonatleastwellbed: 'rdd/310/37_comfort',
    ep37rikaaheartohevenasmil: 'rdd/310/37_smiley_face',
    ep37guardromonareyousuret: 'rdd/310/37_safe',
    ep38kentakazuwhatsthatbig: 'rdd/310/38_blue_cloud',
    ep38lopmonitsabigmysteryi: 'rdd/310/38_mystery',
    ep38janyuthisstupidpieceo: 'rdd/310/38_old_man',

    // ep 311
    ep42henryyouwererightsens: 'rdd/311/42_clouds',
    ep42renamonifitfrightensa: 'rdd/311/42_lightly',
    ep43takatoguilmonwhatarey: 'rdd/311/43_staring_contest',
    ep43takatoicantbelievethi: 'rdd/311/43_good_thing',
    ep43takatoheywaitaminutei: 'rdd/311/43_bagels',
    ep43kidsheyitsimpmonbeelz: 'rdd/311/43_blast_mode',

    // ep 312
    ep47terriermonmrmizunonot: 'rdd/312/47_momentai',
    ep48shibumiiveneverseenam: 'rdd/312/48_machinery',
    ep48beelzemonwhatididisbe: 'rdd/312/48_talking_eyeball',

    // ep 313
    kaisgrandpathatsonestrang: 'rdd/313/1_dog',
    airportannouncerthelightz: 'rdd/313/2_loading',
    henrythoseruinswereamazin: 'rdd/313/3_rocks',
    henryifyougetboredillcome: 'rdd/313/4_boring',
    mephistomonyoullneverdefe: 'rdd/313/5_like_that',

    // ep 314
    dude1areyoujokingdude2ido: 'rdd/314/1_joking',
    henryheresyourstoplopjeff: 'rdd/314/2_lop',
    suzieiamprincessprettypan: 'rdd/314/3_pretty_pants',
    dudethiscouldjeopardizeth: 'rdd/314/4_transfer',

    // ep 401
    ep4bokomonitsdeliciousflo: 'rdd/401/4_brain_food',
    ep4jpitslikeimthebeefandh: 'rdd/401/4_beef_jerky',
    ep5kakuamonandifallofthat: 'rdd/401/5_kangaroo',
    ep7kojiinthatcreepycastle: 'rdd/401/7_lavender',

    // ep 403
    ep20frankentrailmonwoowoo: 'rdd/403/20_whatever',
    ep20cherubimonitappearsso: 'rdd/403/20_pie',
    ep23seppikmonwhatsitgonna: 'rdd/403/23_boogie',
    ep23jpdoyourworstranamono: 'rdd/403/23_mad',
    ep24kojiheyjeepareyouokay: 'rdd/403/24_jeep',
    ep25bokomonthisisbadthisi: 'rdd/403/25_terrible',
    ep26zoeifyouyellinthefore: 'rdd/403/26_forest',
    ep27bokomonibelieveijusts: 'rdd/403/27_santa',

    // ep 404
    ep30cherubimonyouhavemyat: 'rdd/404/30_darkness',
    ep32patamonbetchabetchaic: 'rdd/404/32_syntax',
    ep33jpcomeonpeoplewhydont: 'rdd/404/33_light',
    ep35definitelynotrikaandt: 'rdd/404/35_bad',

    // ep 405
    ep40takuyayeahjusttrustme: 'rdd/405/40_trust',
    ep42dynasmonwhathowdareyo: 'rdd/405/42_insignificient',
    ep45sepikmonilookintothis: 'rdd/405/45_staring',
    ep46zoewecanthaveyouthink: 'rdd/405/46_thinking',

    // ep 406
    ep47takuyafindingoutthaty: 'rdd/406/47_feelings',
    ep49bokomonhisreignofterr: 'rdd/406/49_rain',
    ep49takuyasoiwonderwhatll: 'rdd/406/49_happening',
    ep50newscasterwhenaskedwh: 'rdd/406/50_discharge',

    // ep 407
    m7zoeyouknowwhatsreallypu: 'rdd/407/1_puzzling',
    m7jphurryitupmybodycantha: 'rdd/407/2_work',
    m7ashleymanthisiswaytoomu: 'rdd/407/3_battleship',
    m7kumamonnowimmadferrymon: 'rdd/407/4_chicken',

    // ep 501
    ep2marcushowcanyoujustsit: 'rdd/501/02_digital_dimwit',
    ep3yoshinodontworrymarcus: 'rdd/501/03_let_down',
    ep3mikihessoontopofthings: 'rdd/501/03_on_top',
    ep5agumonquietasasleeping: 'rdd/501/05_mime'
  }

  var add_image = function(i, elem) {
    answer_text = $(elem).text();
    answer_key = answer_text.replace(/\W/g, '').toLowerCase().slice(0, 25);

    // for generating the keys
    console.log(answer_key);

    answer_name = image_table[answer_key];
    if (answer_name) {
      var extension = answer_name.startsWith('prize/') ? '.jpg' : '.png';
      var answer_file = '/img/' + answer_name + extension;
      // $(elem).text('');
      img = $('<img class="answer_img" src="' + answer_file + '" />');
      $(elem).append(img);
    }
  };

  var add_poll_images = function() {
    $('.ep_poll .pds-answer-group').each(add_image);
  };

  var add_result_images = function() {
    $('.ep_poll .pds-answer-text').each(add_image);
  };

  add_poll_images();
  // add_result_images();
  // $('.pds-return-poll').click(function() { console.log("test"); setTimeout(1000, add_poll_images); });
  // $('.pds-view-results').click(function() { console.log("test"); setTimeout(1000, add_result_images); });

  var poll_header = $('#PDI_form8855023 .pds-question-top');
  var poll_stuff = $('#PDI_form8855023 .pds-answer, #PDI_form8855023 .pds-vote');
  var open_poll = $('<i class="icon-right-open"></i>');
  var close_poll = $('<i class="icon-down-open"></i>').hide();

  poll_header.click(function() {
    poll_stuff.toggle();
    open_poll.toggle();
    close_poll.toggle();
  });

  poll_header.prepend(open_poll).prepend(close_poll);
});
