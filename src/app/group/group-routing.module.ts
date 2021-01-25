import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupEditComponent } from './group-edit/group-edit.component';
import { GroupListComponent } from './group-list/group-list.component';
import { GroupComponent } from './group.component';

const routes: Routes = [
  {
    path: '',
    component: GroupComponent,
    children: [
      {
        path: '',
        component: GroupListComponent
      },
      {
        path: 'edit',
        component: GroupEditComponent
      },
      {
        path: 'edit/:id',
        component: GroupEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupRoutingModule { }
