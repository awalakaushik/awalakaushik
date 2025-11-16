import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { FunFactComponent } from './components/fun-fact/fun-fact.component';
import { LearningComponent } from './components/learning/learning.component';
import { CollaborateComponent } from './components/collaborate/collaborate.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
    selector: 'app-root',
    imports: [
        HeaderComponent,
        AboutComponent,
        HobbiesComponent,
        FunFactComponent,
        LearningComponent,
        CollaborateComponent,
        ContactComponent
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'awalakaushik-portfolio';
}
