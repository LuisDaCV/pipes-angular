import { Routes } from '@angular/router';
import { Basics } from './sales/pages/basics/basics';
import { Numbers } from './sales/pages/numbers/numbers';
import { NotCommon } from './sales/pages/not-common/not-common';
import { Order } from './sales/pages/order/order';

export const routes: Routes = [
    {
        path: '',
        component: Basics,
        pathMatch: 'full'
    },
    {
        path: 'numbers',
        component: Numbers,
    },
    {
        path: 'not-common',
        component: NotCommon,
    },
    {
        path: 'order',
        component: Order,
    },
    {
        path: '**',
        redirectTo: ''
    }
];
