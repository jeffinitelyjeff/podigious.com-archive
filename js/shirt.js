$(document).ready(function() {

    var text,
      end_date = new Date(Date.UTC(2017, 0, 27, 3)),
      today = new Date(),
      hours_until_end = Math.floor((end_date - today)/(1000 * 60 * 60)),
      days_until_end = Math.floor(hours_until_end / 24),
      base_text = "to buy a season 3 Podigious shirt! <a href='https://teespring.com/podigious-s-3-shirt-1'>(Calumon)</a> <a href='https://teespring.com/podigious-s3-shirt-2'>(Impmon)<a>"

    if (days_until_end > 2) {
      text = days_until_end + " days left to " + base_text;
    } else if (days_until_end < 0) {
      text = "Sorry, Podigious shirt sales have ended.";
    } else {
      text = hours_until_end + " hours left to " + base_text;
    }

    $('.shirt-link').html(text);
});
