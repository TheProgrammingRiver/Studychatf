import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { StudyRoomListComponent } from './study-room-list/study-room-list.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';


const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'study-room-list', component: StudyRoomListComponent },
  { path: 'chat-room', component: ChatRoomComponent },
  { path: 'rooms', component: StudyRoomListComponent },
  { path: 'chat-room/:roomId', component: ChatRoomComponent },

  { path: '**', redirectTo: '/login' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
