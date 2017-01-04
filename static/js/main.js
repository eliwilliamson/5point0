/* ==========================================================================
 * Custom JavaScript
 * ========================================================================== */

(function () {
    'use strict';

    /* ==========================================================================
     * Carousel
     * ========================================================================== */

    var $carousel_component = $('.js-carousel');

    if ($carousel_component.length > 0) {
        $carousel_component.each(function () {
            var $carousel = $(this);
            var center_mode = $carousel.data('center-mode');
            var dots = $carousel.data('dots');
            var infinite = $carousel.data('infinite');
            var variable_width = $carousel.data('variable-width');

            $carousel.slick({
                centerMode: typeof center_mode !== 'undefined' ? center_mode : false,
                dots: typeof dots !== 'undefined' ? dots : false,
                infinite: typeof infinite !== 'undefined' ? infinite : true,
                variableWidth: typeof variable_width !== 'undefined' ? variable_width : false,
                responsive: [
                    {
                        breakpoint: 740,
                        settings: {
                            variableWidth: false // Disable variable width on narrower screens
                        }
                    }
                ]
            });
        });
    }

    /* ==========================================================================
     * Map
     * ========================================================================== */

    var $map = $('.js-map');

    function initMap () {
        /*
         * Position
         */

        var position = {
            lat: -33.93377, lng: 18.45688
        };

        /*
         * Styles
         */

        var mapStyles = [
            {
                stylers: [
                    {
                        saturation: -100
                    }
                ]
            }
        ];

        /*
         * Options
         */

        var mapOptions = {
            center: position,
            mapTypeControl: false,
            scaleControl: false,
            scrollwheel: false,
            styles: mapStyles,
            zoom: 16
        };

        var map = new google.maps.Map($map[0], mapOptions);

        /*
         * Icon
         */

        var mapMarkerIcon = {
            anchor: new google.maps.Point(26.75, 78),
            origin: new google.maps.Point(0, 0),
            scaledSize: new google.maps.Size(53.5, 78),
            size: new google.maps.Size(107, 156),
            url: $map.data('icon-url')
        };

        /*
         * Marker
         */

        var mapMarker = new google.maps.Marker({
            icon: mapMarkerIcon,
            optimized: false,
            position: position,
            scaledSize: new google.maps.Size(65, 65),
            title: 'Unit 1, Kings Cross Corner, 9 Queens Park Avenue, Salt River, 7925'
        });

        mapMarker.setMap(map);
    }

    if ($map.length > 0) {
        initMap();
    }

    /* ==========================================================================
     * Navigation Toggle
     * ========================================================================== */

    var $nav_toggle = $('.js-nav-toggle');

    if ($nav_toggle.length > 0) {
        $nav_toggle.on('click', function (e) {
            e.preventDefault();

            var $nav = $('.js-nav');

            if ($nav.length > 0) {
                $nav.toggleClass('is-open');
                $nav_toggle.toggleClass('is-active');
                $('html').toggleClass('is-open');
            }
        });
    }
})();
