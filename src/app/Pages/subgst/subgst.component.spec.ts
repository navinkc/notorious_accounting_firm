import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubgstComponent } from './subgst.component';

describe('SubgstComponent', () => {
  let component: SubgstComponent;
  let fixture: ComponentFixture<SubgstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubgstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubgstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
