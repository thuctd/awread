import { environment } from '@awread/global/environments';
import { Injectable } from '@angular/core';
import Plausible from 'plausible-tracker'
@Injectable({
    providedIn: 'root'
})
export class PlausibleService {
    plausible = Plausible({
        domain: 'awread.vn',
        apiHost: '/plausible',
    });
    enableAutoPageviews = this.plausible.enableAutoPageviews;
    trackEvent = this.plausible.trackEvent;
    trackPageview = this.plausible.trackPageview;
    constructor(
    ) {
        if (environment.production) {
            this.enableAutoPageviews();
            console.log('starting plausible', this.plausible);
        } else {
            this.trackEvent = (eventName, options, eventData) => { };
            this.trackPageview = (eventData, options) => { };
        }
    }
}
