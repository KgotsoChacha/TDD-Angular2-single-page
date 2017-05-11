import {TestBed, async} from '@angular/core/testing';

import {MainContentComponent} from './mainContent.component';

describe('Main content component',()=>{
    beforeEach(()=>{
        TestBed.configureTestingModule({
            declarations: [MainContentComponent]
        });
        TestBed.createComponent;
    })
    
    it("should create the main content component",async(()=>{
        let app = TestBed.createComponent(MainContentComponent);
        expect(app).toBeTruthy();
    }))
})