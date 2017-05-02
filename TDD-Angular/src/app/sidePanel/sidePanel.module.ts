import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {SidePanelComponent} from './sidePanel.component';

@NgModule({
    declarations: [SidePanelComponent],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [SidePanelComponent],
})
export class SidePanelModule{}