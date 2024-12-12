import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicDiskComponent } from './music-disk.component';

describe('MusicDiskComponent', () => {
  let component: MusicDiskComponent;
  let fixture: ComponentFixture<MusicDiskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicDiskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicDiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
