import { Component } from '@angular/core';
import { Satellite } from './satellite';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'orbit-report';
    sourceList: Satellite[] = [];
    displayList: Satellite[] = [];
    isMatch: boolean = false;

    constructor() {
        let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';
     
        window.fetch(satellitesUrl).then(function(response) {
            response.json().then(function(data) {
                let satellite;
                let fetchedSatellites = data.satellites;
                for (let i=0; i < fetchedSatellites.length; i++) {
                    satellite = new Satellite(fetchedSatellites[i].name, fetchedSatellites[i].type, fetchedSatellites[i].launchDate, fetchedSatellites[i].orbitType, fetchedSatellites[i].operational);
                    this.sourceList.push(satellite);  
                }
                this.displayList = this.sourceList.slice(0);
            }.bind(this));
        }.bind(this));
    }

    // Step 8
    // Bonus Mission Part C - Add ability to search on type & orbit type
    search(searchTerm: string): void {
        let matchingSatellites: Satellite[] = [];
        searchTerm = searchTerm.toLowerCase();
        for(let i=0; i < this.sourceList.length; i++) {
            let name = this.sourceList[i].name.toLowerCase();
            let type = this.sourceList[i].type.toLowerCase();
            let orbitType = this.sourceList[i].orbitType.toLowerCase();
            if (name.indexOf(searchTerm) >= 0 || type.indexOf(searchTerm) >= 0 || orbitType.indexOf(searchTerm) >= 0) {
                matchingSatellites.push(this.sourceList[i]);
            }
        }
        // assign this.displayList to be the the array of matching satellites
        // this will cause Angular to re-make the table, but now only containing matches
        this.displayList = matchingSatellites;
    }

}