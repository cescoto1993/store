import { LogoComponent } from './logo/logo.component';
import { StartComponent } from './start/start.component';
import { SlidesComponent } from './slides/slides.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
declarations: [SlidesComponent , StartComponent, LogoComponent],
exports:[],
imports: [
     CommonModule
]
})

export class ComponentsModule {}