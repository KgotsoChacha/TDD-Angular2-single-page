import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {SidePanelComponent} from './sidePanel.component';
import { CollapseModule } from 'ng2-bootstrap/collapse';

@NgModule({
    declarations: [SidePanelComponent],
    imports: [BrowserModule,CollapseModule.forRoot()],
    providers: [],
    bootstrap: [SidePanelComponent],
})
export class SidePanelModule{}