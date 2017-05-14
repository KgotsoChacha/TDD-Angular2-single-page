import {TestBed, async} from '@angular/core/testing';

import {RootComponent} from './root.component';
import { NavigationBarComponent } from '../navigationBar/navigationBar.component';
import {SidePanelComponent} from '../sidePanel/sidePanel.component';
import {MainContentComponent} from '../mainContent/mainContent.component';

describe('Root component',()=>{
    beforeEach(()=>{
        TestBed.configureTestingModule({
            declarations: [RootComponent,MainContentComponent ,SidePanelComponent,NavigationBarComponent]
        });
        TestBed.createComponent;
    })
    
    it("should create the root component",async(()=>{
        let app = TestBed.createComponent(RootComponent);
        expect(app).toBeTruthy();
    }))
})