import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { ComponentsModule } from '../components/components.module';
import { SharedModule } from '../shared/shared.module';
import { LayoutRoutingModule } from './layout-routing.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, ComponentsModule, SharedModule, LayoutRoutingModule],
  exports: [],
})
export class LayoutModule {}
