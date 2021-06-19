import { Injectable } from '@angular/core';
import { domainEnvironment } from '@awread/global/environments';

@Injectable({ providedIn: 'root' })
export class TransferTokenAddon {

    constructor(
    ) {
    }

    async transfer(accessToken) {
        if (domainEnvironment.reader) {
            // open tab: 
            const iframe = document.createElement('iframe');
            iframe.setAttribute("id", "iframe-element");
            iframe.style.display = "none";
            let origin = window.location.origin.replace('://', '://w.');
            if (window.location.hostname == "localhost") {
                origin = 'http://localhost:2200';
                console.log('open iframe at', origin);
            }

            iframe.src = `${origin}/forgot?accessToken=${accessToken}`;
            document.body.appendChild(iframe);
            setTimeout(() => {
                const element = document.getElementById('iframe-element');
                element.parentNode.removeChild(element);
            }, 3000);

        }
    }

}
