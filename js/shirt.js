$(document).ready(function() {

    var end_date = new Date(Date.UTC(2015, 4, 13, 3)),
      today = new Date(),
      hours_until_end = Math.floor((end_date - today)/(1000 * 60 * 60)),
      days_until_end = Math.floor(hours_until_end / 24),
      text;

    if (days_until_end > 2) {
      text = days_until_end + " days left to buy a Podigious shirt!";
    } else if (days_until_end < 0) {
      text = "Sorry, Podigious shirt sales have ended.";
    } else {
      text = hours_until_end + " hours left to buy a Podigious shirt!";
    }

    $('.shirt-link').text(text);
});