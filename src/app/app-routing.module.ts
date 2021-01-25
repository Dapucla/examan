import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupListComponent } from './group/group-list/group-list.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  {
    path: '',
    component: InfoComponent
  },
  {
    path: 'group',
    loadChildren: () => 
    import('./group/group.module').then(m => m.GroupModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
