import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
    constructor(els, offset) {
        this.itemsToReveal = els;
        this.offsetPercentage = offset;
        this.hideInitially();
        this.createWaypoints();
    }

    hideInitially() {
        this.itemsToReveal.addClass('reveal-item');
    }

    createWaypoints() {
        var percent = this;
        this.itemsToReveal.each(function() {
            var current = this;
            new Waypoint({
                element: current,
                handler: function() {
                    $(current).addClass('reveal-item--is-visible');
                },
                offset: percent.offsetPercentage
            });
        });
    }
}

export default RevealOnScroll;