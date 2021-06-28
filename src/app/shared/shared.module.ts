import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { UxAllModule } from '@eui/components';
import { EuiAllModule } from '@eui/components-next';

@NgModule({
    imports: [
        UxAllModule,
        EuiAllModule,
        TranslateModule,
    ],
    declarations: [
    ],
    exports: [
        UxAllModule,
        EuiAllModule,
        TranslateModule,
    ]
})
export class SharedModule {}
