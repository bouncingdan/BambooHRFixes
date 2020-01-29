$(document).ready(function() {
    const navigation = $('.SiteNavigation');

    if(navigation.length > 0) {
        var link = document.createElement('a');
        link.classList = 'SiteNavigation__link';
        link.setAttribute('data-text', 'Full Calendar');
        link.href = '/calendar';
        link.setAttribute('data-bi-id', 'main-nav-fullcalendar-tab');
        link.text = 'Full Calendar';

        navigation.append(link);
    }
});
