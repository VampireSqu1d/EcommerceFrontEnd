import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MermbersPageComponent } from './mermbers-page.component';

describe('MermbersPageComponent', () => {
  let component: MermbersPageComponent;
  let fixture: ComponentFixture<MermbersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MermbersPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MermbersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
