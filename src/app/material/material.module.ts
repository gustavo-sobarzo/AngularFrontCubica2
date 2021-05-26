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
        MatButtonModule
    ]
})

export class MaterialModule {}