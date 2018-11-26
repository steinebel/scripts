$(document).ready(function () {
    var projects = {};
    $('.js-projects-source .js-item').each(function() {
        var yearItem = $(this).find('.js-project-date');
        var year = $.trim(yearItem.text());
        if (!(year in projects)) {
            projects[year] = [];
        }
        yearItem.remove();
        projects[year].unshift($(this));
    });

    var mainBlock = $('.js-projects');
    $.each(projects, function (year, elements) {
    		var h4 = $('<h4 class="js-year">' + year + '</h4>');
        mainBlock.prepend(h4);
        $.each(elements, function (key, element) {
            h4.after(element);        
        });
    });
    $('.js-projects-source').remove();
});
