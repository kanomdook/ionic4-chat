import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { EcommerceChatDetailComponent } from './ecommerce-chat-detail/ecommerce-chat-detail.component';
import { MomentPipe } from '../pipes/moment.pipe';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule.forRoot(),
    ],
    declarations: [
        MomentPipe,
        EcommerceChatDetailComponent
    ],
    exports: [
        MomentPipe,
        EcommerceChatDetailComponent
    ],
    entryComponents: [],
})
export class ComponentsModule { }
