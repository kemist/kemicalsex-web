jQuery(document).ready(function($){
    $('iframe[src*="pornhub.com"]').each(function() {
        var dbOfPornUrl = $(this).attr("src");
        var dbOfPornUrl = dbOfPornUrl.replace('https://www.pornhub.com/embed/','');
        var random = Math.floor(Math.random() * 999) + 1;
        $(this).attr("id", 'phPlayer'+random);

        $.getJSON('https://dbofporn.com/embed/api/'+dbOfPornUrl, function(data) {
            $('#phPlayer'+random).attr("src", data.src);
        });
    });
});