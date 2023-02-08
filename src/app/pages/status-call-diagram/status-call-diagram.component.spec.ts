import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusCallDiagramComponent } from './status-call-diagram.component';
import {HttpClient, HttpHandler} from "@angular/common/http";
describe('StatusCallDiagramComponent', () => {
  let component: StatusCallDiagramComponent;
  let fixture: ComponentFixture<StatusCallDiagramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusCallDiagramComponent ],
        providers: [
            HttpClient,
            {provide: 'globalUrl', useValue: 'http://localhost:8080/'},
            HttpHandler,
            {provide: 'globalUrl', useValue: 'http://localhost:8080/'},
        ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusCallDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
