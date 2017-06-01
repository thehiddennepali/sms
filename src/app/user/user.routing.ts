import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
                    { path: '', redirectTo: 'login', pathMatch: 'full' },
                    { path: 'login', loadChildren: './login/login.module#LoginModule' },
                    { path: 'register', loadChildren: './register/register.module#RegisterModule' },
                    
                    ]

export const routing: ModuleWithProviders = RouterModule.forChild(routes);