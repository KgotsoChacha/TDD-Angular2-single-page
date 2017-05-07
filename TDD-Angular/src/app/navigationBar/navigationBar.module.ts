import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {NavigationBarComponent} from './navigationBar.component';

@NgModule({
    declarations: [NavigationBarComponent],
    imports: [BrowserModule],
    providers: [],
    bootstrap : [NavigationBarComponent]
})
export class NavigationModule{ }