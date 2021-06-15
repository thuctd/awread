import { environment } from '@awread/global/environments';
import { Injectable } from '@angular/core';
import Plausible from 'plausible-tracker'
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class PlausibleService {
    plausible = Plausible({
        domain: 'awread.vn',
        apiHost: '/plausible',
        trackLocalhost: true
    });
    enableAutoPageviews = this.plausible.enableAutoPageviews;
    trackEvent = this.plausible.trackEvent;
    trackPageview = this.plausible.trackPageview;
    constructor(
        private http: HttpClient
    ) {
        if (environment.production) {
            this.enableAutoPageviews();
            console.log('starting plausible', this.plausible);
            this.http.get('/plausible').subscribe(res => console.log('res', res));
            this.http.get('/plausible/api').subscribe(res => console.log('res', res));
        } else {
            this.trackEvent = (eventName, options, eventData) => { };
            this.trackPageview = (eventData, options) => { };
        }
    }
}
