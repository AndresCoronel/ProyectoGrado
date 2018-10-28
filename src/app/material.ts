import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatTabsModule,MatListModule, MatIconModule, MatCardModule,
    MatMenuModule, MatToolbarModule,MatInputModule],
  exports: [MatButtonModule, MatCheckboxModule, MatTabsModule,MatListModule, MatIconModule, MatCardModule,
    MatMenuModule, MatToolbarModule,MatInputModule],
})
export class MaterialModule { }