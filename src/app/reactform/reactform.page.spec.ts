import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactformPage } from './reactform.page';

describe('ReactformPage', () => {
  let component: ReactformPage;
  let fixture: ComponentFixture<ReactformPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReactformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
