import {TestBed, async} from '@angular/core/testing'

import {NavigationComponent} from './navigation.component';

describe("Navigation component", () =>{
    beforeEach(()=>{
        TestBed.configureTestingModule({
            declarations: [
                NavigationComponent
            ]
        });
        TestBed.compileComponents();
    })

    it("should create the naviation component",async(()=>{
        let fixture = TestBed.createComponent(NavigationComponent);
        let app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy;
    }));

    it("should have a title", async(()=>{
        let fixture = TestBed.createComponent(NavigationComponent);
        fixture.detectChanges();
        let compile = fixture.debugElement.nativeElement;
        expect(compile.innerHTML).toContain("Movies Collection");
    }));
});