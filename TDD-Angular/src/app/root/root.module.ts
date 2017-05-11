import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser'
import { NavigationBarComponent } from '../navigationBar/navigationBar.component';
import {SidePanelComponent} from '../sidePanel/sidePanel.component';
import {MainContentComponent} from '../mainContent/mainContent.component';
import {RootComponent} from './root.component';

@NgModule({
    declarations: [RootComponent, MainContentComponent ,SidePanelComponent, NavigationBarComponent],
    imports: [BrowserModule],
    bootstrap: [RootComponent]
})
export class RootModule{}