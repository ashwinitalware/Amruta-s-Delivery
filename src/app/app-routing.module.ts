import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'forget',
    loadChildren: () => import('./forget/forget.module').then( m => m.ForgetPageModule)
  },
  {
    path: 'otp',
    loadChildren: () => import('./otp/otp.module').then( m => m.OtpPageModule)
  },
  {
    path: 'newpass',
    loadChildren: () => import('./newpass/newpass.module').then( m => m.NewpassPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'footer',
    loadChildren: () => import('./footer/footer.module').then( m => m.FooterPageModule)
  },
  {
    path: 'delivered',
    loadChildren: () => import('./delivered/delivered.module').then( m => m.DeliveredPageModule)
  },
  {
    path: 'cancled',
    loadChildren: () => import('./cancled/cancled.module').then( m => m.CancledPageModule)
  },
 {
    path: 'meter-reading',
    loadChildren: () => import('./meter-reading/meter-reading.module').then( m => m.MeterReadingPageModule)
  },
  {
    path: 'add-meter-reading',
    loadChildren: () => import('./add-meter-reading/add-meter-reading.module').then( m => m.AddMeterReadingPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
