import {TestBed, async} from '@angular/core/testing'

import {NavigationBarComponent} from './navigationBar.component';

describe("NavigationBar component", () =>{
    beforeEach(()=>{
        TestBed.configureTestingModule({
            declarations: [
                NavigationBarComponent
            ]
        });
        TestBed.compileComponents();
    })

    it("should create the naviation component",async(()=>{
        let fixture = TestBed.createComponent(NavigationBarComponent);
        let component = fixture.debugElement.componentInstance;
        expect(component).toBeTruthy();
    }));

    it("should have a title", async(()=>{
        let fixture = TestBed.createComponent(NavigationBarComponent);
        fixture.detectChanges();
        let compile = fixture.debugElement.nativeElement;
        expect(compile.querySelector('nav a').textContent).toContain("Videos Collection");
    }));

    it("should have a search box", async(()=>{
        let fixture = TestBed.createComponent(NavigationBarComponent);
        fixture.detectChanges();
        let compile = fixture.debugElement.nativeElement;
        expect(compile.querySelector('input')).toBeTruthy;
    }));
});