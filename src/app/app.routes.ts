import { Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { ChatHomeComponent } from './chat-home/chat-home.component';

export const routes: Routes = [
    {path:"", component:ChatHomeComponent},
    {path:"chat", component:ChatComponent}
];
