import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HistoryComponent } from './pages/history/history.component';
import { LiveComponent } from './pages/live/live.component';
import { PointTableCwcComponent } from './pages/point-table-cwc/point-table-cwc.component';
import { PointTableIplComponent } from './pages/point-table-ipl/point-table-ipl.component';
import { PointTableWtcComponent } from './pages/point-table-wtc/point-table-wtc.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'live',
        pathMatch:'full'
    },
    {
        path:"home",
        component:HomeComponent,
        title:"Home | CrickScorer"
    },
    {
        path:"history",
        component:HistoryComponent,
        title:"Match History | CrickScorer"
    },
    {
        path:"live",
        component:LiveComponent,
        title:"Live Matches | CrickScorer"
    },
    {
        path:"point-table-cwc",
        component: PointTableCwcComponent,
        title:"Point-Table-CWC | CrickScorer"
    },
    {
        path:"point-table-ipl",
        component: PointTableIplComponent,
        title:"Point-Table-IPL | CrickScorer"
    },
    {
        path:"point-table-wtc",
        component: PointTableWtcComponent,
        title:"Point-Table-WTC | CrickScorer"
    }
];
