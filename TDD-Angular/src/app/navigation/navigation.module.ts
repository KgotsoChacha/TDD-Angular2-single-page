import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {NavigationComponent} from './navigation.component';

@NgModule({
    declarations: [NavigationComponent],
    imports: [BrowserModule],
    providers: [],
    bootstrap : [NavigationComponent]
})
export class NavigationModule{ }