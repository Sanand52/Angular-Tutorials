import { Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { ControlFlowComponent } from './components/control-flow/control-flow.component';
import { GetAPIComponent } from './components/get-api/get-api.component';
import { pipe } from 'rxjs';
import { PipesComponent } from './components/pipes/pipes.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {
        path:'user-page',
        component:UserComponent,
    },
    {
        path:'home-page',
        component:HomeComponent,
    },
    {
        path:"data-binding",
        component:DataBindingComponent
    },
    {
        path:"control-flow",
        component:ControlFlowComponent
    },
    {
        path:"get-API",
        component:GetAPIComponent
    },
    {
        path:"pipes",
        component:PipesComponent
    }
];
