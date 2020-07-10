import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatRoomPage } from './chat-room.page';

const routes: Routes = [
  {path: ':nickname', component: ChatRoomPage} // <1>
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatRoomPageRoutingModule {}
