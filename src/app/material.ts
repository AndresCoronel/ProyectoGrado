import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  imports: [MatTooltipModule,MatButtonModule, MatCheckboxModule, MatTabsModule,MatListModule, MatIconModule, MatCardModule,
    MatMenuModule, MatToolbarModule, MatStepperModule, MatFormFieldModule, MatInputModule, MatSelectModule,MatDatepickerModule],
  exports: [MatTooltipModule,MatButtonModule, MatCheckboxModule, MatTabsModule,MatListModule, MatIconModule, MatCardModule,
    MatMenuModule, MatToolbarModule, MatStepperModule, MatFormFieldModule, MatInputModule, MatSelectModule,MatDatepickerModule],
})
export class MaterialModule { }