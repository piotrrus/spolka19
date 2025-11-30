import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoDataMsgComponent } from './no-data-msg.component';

describe('NoDataMsgComponent', () => {
  let component: NoDataMsgComponent;
  let fixture: ComponentFixture<NoDataMsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoDataMsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoDataMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
