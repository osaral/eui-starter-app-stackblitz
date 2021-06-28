import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
    getUserState,
    UserState,
} from '@eui/core';
import { Observable, Subscription } from 'rxjs';
import { AppStarterService } from './app-starter.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {
    userInfos: UserState;
    // Observe state changes
    userState: Observable<UserState>;
    // an array to keep all subscriptions and easily unsubscribe
    subs: Subscription[] = [];

    sidebarItems = [
        { label: 'Home', url: 'screen/home', iconClass: 'eui-icon-home' },
        { label: 'Module 1', url: 'screen/module1', iconClass: 'eui-icon-work' },
        { label: 'Module 2', url: 'screen/module2', iconClass: 'eui-icon-work' },
    ];
    notificationItems = [
        { label: 'Title label 1', subLabel: 'Subtitle label' },
        { label: 'Title label 2', subLabel: 'Subtitle label' },
        { label: 'Title label 3', subLabel: 'Subtitle label' },
        { label: 'Title label 4', subLabel: 'Subtitle label' },
    ];

    constructor(
        private store: Store<any>,
        private appStarterService: AppStarterService,
    ) {
        this.appStarterService.start().subscribe(() => {
            this.userState = <any>this.store.select(getUserState);
            this.subs.push(this.userState.subscribe((user: UserState) => {
                this.userInfos = { ...user };
                console.log(user);
            }));
        });
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        this.subs.forEach((s: Subscription) => s.unsubscribe());
    }
}
