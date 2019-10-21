import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
    selector: 'app-orbit-counts',
    templateUrl: './orbit-counts.component.html',
    styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    @Input() satellites: Satellite[];

    // Bonus Mission Part B
    countSatellites(satType): number {
        let countSats = 0;
        for (let i=0; i < this.satellites.length; i++) {
            if (this.satellites[i].type === satType) {
                countSats += 1;
            }
        }
        return countSats;
    }

    // Bonus Mission Part C-2
    typeList = ['Space Debris', 'Communication', 'Probe', 'Positioning', 'Space Station', 'Telescope'];
    
}

