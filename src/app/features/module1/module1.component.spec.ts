import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CoreModule } from '../../core/core.module';
import { Router } from '@angular/router';
import { RouterMock } from '../../shared/testing/router.mock';
import { Module1Component } from './module1.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('Module1Component', () => {
    let component: Module1Component;
    let fixture: ComponentFixture<Module1Component>;
    let httpMock: HttpTestingController;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                Module1Component
            ],
            imports: [
                CoreModule,
                HttpClientTestingModule,
            ],
            providers: [
                { provide: Router, useClass: RouterMock },
            ]
        }).compileComponents();

        httpMock = TestBed.inject(HttpTestingController);
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(Module1Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
