import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'HomePage', url: '/hpage', icon: 'home' },
    { title: 'BasicInfo', url: '/info', icon: 'paper-plane' },
    { title: 'Hobbies', url: '/hob', icon: 'heart' },
    { title: 'Friends', url: '/friend', icon: 'Heart' },
    { title: 'Contacts', url: '/contact', icon: 'archive' },
  ];
   
}
