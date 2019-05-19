import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'region',
        loadChildren: './region/region.module#OneangularRegionModule'
      },
      {
        path: 'country',
        loadChildren: './country/country.module#OneangularCountryModule'
      },
      {
        path: 'location',
        loadChildren: './location/location.module#OneangularLocationModule'
      },
      {
        path: 'department',
        loadChildren: './department/department.module#OneangularDepartmentModule'
      },
      {
        path: 'task',
        loadChildren: './task/task.module#OneangularTaskModule'
      },
      {
        path: 'employee',
        loadChildren: './employee/employee.module#OneangularEmployeeModule'
      },
      {
        path: 'job',
        loadChildren: './job/job.module#OneangularJobModule'
      },
      {
        path: 'job-history',
        loadChildren: './job-history/job-history.module#OneangularJobHistoryModule'
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OneangularEntityModule {}
