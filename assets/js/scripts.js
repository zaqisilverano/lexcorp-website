/*
    ====================================
    clickable arrow
    ====================================
*/
$('.scroll.title').on('click', function(){
    var heightwindow = $('.title-page').height();
    $('body,html').animate({ scrollTop: heightwindow }, 'slow');
});
$('.scroll.slider').on('click', function(){
    var heightwindow = $('.slider-wrapper').height();
    $('body,html').animate({ scrollTop: heightwindow }, 'slow');
});

/* show more toggle */
$('.people-desc-wrap').each(function() {
	$(this).find('.readmore').on('click', function(){
		$(this).prev('p.read').toggleClass('open');
		if($(this).text()=='Show Less') $(this).text('Show More'); 
	    else  $(this).text('Show Less'); 
	    $(this).toggleClass('less');
	});
});

$('li.search a').on('click', function(){
    $('.top-search').addClass('in');
    $('.seacrh-form').focus();
});

$('.top-search .search-close').on('click', function(){
    $('.top-search').removeClass('in');
});

$(document).mouseup(function (e)
{
    var container = $('.top-search');

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.removeClass('in');
    }
});