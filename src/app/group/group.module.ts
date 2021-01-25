import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GroupRoutingModule } from './group-routing.module';
import { GroupListComponent } from './group-list/group-list.component';
import { GroupEditComponent } from './group-edit/group-edit.component';
import { GroupComponent } from './group.component';
import { AlphabetPipe } from './pipes/alphabet.pipe';
import { GroupPipe } from './pipes/group.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { TypePipe } from './pipes/type.pipe';


@NgModule({
  declarations: [GroupListComponent, GroupEditComponent, GroupComponent, AlphabetPipe, GroupPipe, SearchPipe, TypePipe],
  imports: [
    CommonModule,
    GroupRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class GroupModule { }
