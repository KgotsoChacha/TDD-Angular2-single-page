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
        expect(compile.querySelector('nav a').textContent).toContain("Movies Collection");
    }));

    // it("should have a search label", async(()=>{
    //     let fixture = TestBed.createComponent(NavigationComponent);
    //     fixture.detectChanges();
    //     let compile = fixture.debugElement.nativeElement;
    //     expect(compile.querySelector('label').textContent).toContain('Search');
    // }));

    it("should have a search box", async(()=>{
        let fixture = TestBed.createComponent(NavigationComponent);
        fixture.detectChanges();
        let compile = fixture.debugElement.nativeElement;
        expect(compile.querySelector('input')).toBeTruthy;
    }));
});