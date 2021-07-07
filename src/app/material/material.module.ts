import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule} from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatTableExporterModule } from 'mat-table-exporter';
import {MatGridListModule} from '@angular/material/grid-list';






@NgModule({
    exports:[
        MatCardModule,
        MatInputModule,
        MatPaginatorModule,
        MatTableModule,
        MatListModule,
        MatIconModule,
        MatSidenavModule,
        MatToolbarModule,
        MatButtonModule,
        MatMenuModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatCheckboxModule,
        MatTableExporterModule,
        MatGridListModule
        
    ]
})

export class MaterialModule {}