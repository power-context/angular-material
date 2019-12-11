import { NgModule } from '@angular/core';
import { 
  MatIconModule, 
  MatTableModule, 
  MatButtonModule,
  MatInputModule,
  MatSortModule,
  MatPaginatorModule
} from '@angular/material';

const components = [
  MatButtonModule,
  MatIconModule,
  MatTableModule,
  MatInputModule,
  MatSortModule,
  MatPaginatorModule
]

@NgModule({
  imports: [components],
  exports: [components]
})
export class MaterialModule { }
