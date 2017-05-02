import {TestBed, async} from '@angular/core/testing';

import {SidePanelComponent} from './sidePanel.component'

describe('Side Panel component', ()=>{
    beforeEach(() =>{
        TestBed.configureTestingModule({
            declarations: [SidePanelComponent]
        }).createComponent;
    })

    it('should create the side panel component', async(()=>{
        let component = TestBed.createComponent(SidePanelComponent);
        expect(component).toBeTruthy();
    }));

    it('should have options in the panel', async(()=>{
        let component = TestBed.createComponent(SidePanelComponent);
        let fixture = component.debugElement.nativeElement;
        expect(fixture.querySelector('ul').children.length).toBeGreaterThanOrEqual(2);
    }));
})



