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
    // typeList = [{type: 'Space Debris', count: 0}, {type: 'Communication', count: 0}, {type: 'Probe', count: 0}, {type: 'Positioning', count: 0}, {type: 'Space Station',count: 0}, {type: 'Telescope', count: 0}];

    // countSatellites(): boolean {
    //     let countSats = 0;
    //     for (let i=0; i < this.typeList.length; i++) {
    //         for (let j = 0; j < this.satellites.length; j++){
    //             if (this.satellites[j].type === this.typeList[i].type) {
    //                 countSats += 1;
    //             }
    //         }
    //         this.typeList[i].count = countSats;
    //         countSats = 0;
    //     }
    //     return;
    // }

    typeList = ['Space Debris', 'Communication', 'Probe', 'Positioning', 'Space Station', 'Telescope'];

    countSatellites(satType): number {
        let countSats = 0;
        for (let i=0; i < this.satellites.length; i++) {
            if (this.satellites[i].type === satType) {
                countSats += 1;
            }
        }
        return countSats;
    }
}
