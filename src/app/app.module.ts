import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoComponent } from './pages/info/info.component';
import { StudentsComponent } from './pages/students/students.component';
import { AddComponent } from './components/add/add.component';
import { ListComponent } from './components/list/list.component';
import { SortPipe } from './pipes/sort.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { SortBthPipe } from './pipes/sort-bth.pipe';
import { GroupPipe } from './pipes/group.pipe';
import { AlphabetPipe } from './pipes/alphabet.pipe';
import { TyprPipe } from './pipes/typr.pipe';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    StudentsComponent,
    AddComponent,
    ListComponent,
    SortPipe,
    SearchPipe,
    SortBthPipe,
    GroupPipe,
    AlphabetPipe,
    TyprPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    SortPipe,
    SortBthPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
