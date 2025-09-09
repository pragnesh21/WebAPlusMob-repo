import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule, CardModule, ButtonModule ,
  AccordionButtonDirective,
  AccordionComponent,
  AccordionItemComponent,
  TemplateIdDirective

} from '@coreui/angular';
import { IconComponent} from '@coreui/icons-angular';
import { cilPenAlt, cilBuilding } from '@coreui/icons';
// import { iconSubset } from 'src/app/icons/icon-subset';
import { RouterLink } from '@angular/router';
// import { cilUser, cilSettings, cilBell,
//    cilBuilding, cilCloud, cil3d, cilCreditCard, cilTask, 
//    cilSpreadsheet,
//    cilBike,
//    cilPuzzle,
//    cilPenAlt} from '@coreui/icons';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, AccordionModule, CardModule, ButtonModule, IconComponent
, AccordionComponent,
    AccordionItemComponent,
    TemplateIdDirective,
    AccordionButtonDirective
,RouterLink
  ],
  templateUrl: './settings.component.html',
})
export class SettingsComponent {
  
// constructor(private iconSet: IconSetService) {
//   this.iconSet.icons = { cilBike,cilSpreadsheet,cilTask,cilUser, 
//     cilSettings, cilBell, cilBuilding, cilCloud, cil3d, cilCreditCard ,cilPuzzle,cilPenAlt};
// }

}

