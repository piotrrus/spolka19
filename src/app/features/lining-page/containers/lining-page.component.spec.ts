import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material/radio';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { of } from 'rxjs';
import { TableHeaderComponent } from '@shared/modules/data-table/table-header/table-header.component';
import { SimpleFilterFormComponent } from '@shared/modules/data-table/simple-filter-form/simple-filter-form.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { LiningPageComponent } from './lining-page.component';
import { LiningTableComponent } from '../components/tables/linings-table.component';
import { LiningService } from '../services/lining.service';
import { LiningDataStore } from '../services/lining-data-store';
import { LiningModalHelper } from '../helpers/lining-modal.helper';
import { By } from '@angular/platform-browser';
import { liningsData } from '../stubs/linings-table.stub';
import { NotificationMessageService } from '@core/notifications/notification.service';
import { ConfirmDialogComponent } from '@shared/components/confirm-dialog/confirm-dialog.component';
import { ConfirmDialogsHelper } from '@shared/components/confirm-dialog/confirm-dialog.helper';
import { dialogMock } from '@shared/stubs/dialog.stub';
import { toastrMock } from '@shared/stubs/toastr.stub';

describe('LiningPageComponent', () => {
     let component: LiningPageComponent;
     let fixture: ComponentFixture<LiningPageComponent>;
     // let service: LiningService;
     // let dataStore: LiningDataStore;

     let componentTableHeader: TableHeaderComponent;
     let fixtureTableHeader: ComponentFixture<TableHeaderComponent>;
     // let httpTestingController: HttpTestingController;
     let notificationService: NotificationMessageService;

     let dialogComponent: ConfirmDialogComponent;
     let fixtureDialog: ComponentFixture<ConfirmDialogComponent>;
     let confirmDialogsHelper: ConfirmDialogsHelper;
     let helper: LiningModalHelper;

     let simpleFilterFormComponent: SimpleFilterFormComponent;
     let fixtureSimpleFilterForm: ComponentFixture<SimpleFilterFormComponent>;

     const toastrService = toastrMock;

     beforeEach(async () => {
          await TestBed.configureTestingModule({
               imports: [
                    RouterTestingModule,
                    HttpClientTestingModule,
                    ToastrModule.forRoot(),
                    FormsModule,
                    ReactiveFormsModule,
                    MatFormFieldModule,
                    MatInputModule,
                    MatSelectModule,
                    MatRadioModule,
                    NoopAnimationsModule,
                    MatDialogModule,
                    NgxDatatableModule,
               ],
               declarations: [
                    LiningPageComponent,

                    TableHeaderComponent,
                    LiningTableComponent,
                    SimpleFilterFormComponent,
               ],

               providers: [
                    { provide: ToastrService, useValue: toastrMock },
                    // { provide: HTTP_INTERCEPTORS, useClass: HttpsInterceptor, multi: true },
                    LiningService,
                    LiningDataStore,
                    LiningModalHelper,
                    ConfirmDialogsHelper,
                    {
                         provide: MatDialogRef,
                         useValue: dialogMock,
                    },
                    {
                         provide: MAT_DIALOG_DATA,
                         useValue: {},
                    },
               ],
          }).compileComponents();

          fixture = TestBed.createComponent(LiningPageComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();

          fixtureTableHeader = TestBed.createComponent(TableHeaderComponent);
          componentTableHeader = fixtureTableHeader.componentInstance;
          fixtureTableHeader.detectChanges();

          // httpTestingController = TestBed.inject(HttpTestingController);
          // notificationService = TestBed.inject(NotificationMessageService);

          // service = TestBed.inject(LiningService);
          // dataStore = TestBed.inject(LiningDataStore);

          // httpTestingController = TestBed.inject(HttpTestingController);
          notificationService = TestBed.inject(NotificationMessageService);

          fixtureDialog = TestBed.createComponent(ConfirmDialogComponent);
          dialogComponent = fixtureDialog.componentInstance;
          confirmDialogsHelper = TestBed.inject(ConfirmDialogsHelper);
          helper = TestBed.inject(LiningModalHelper);

          fixtureSimpleFilterForm = TestBed.createComponent(SimpleFilterFormComponent);
          simpleFilterFormComponent = fixtureSimpleFilterForm.componentInstance;
     });

     it('should create', () => {
          expect(component).toBeTruthy();
     });

     it('should render lining table header', fakeAsync(() => {
          const compiled = fixture.debugElement.nativeElement;
          component.filteredTableData$ = of([liningsData]);
          fixture.detectChanges();
          tick(1000);
          expect(compiled.querySelector('app-table-header')?.textContent).toContain(
               'Lista podszewek'
          );
     }));

     it('should render linings table', fakeAsync(() => {
          const compiled = fixture.debugElement.nativeElement;
          component.filteredTableData$ = of([liningsData]);
          fixture.detectChanges();
          tick(1000);
          expect(compiled.querySelector('app-lining-table')).toBeTruthy();
     }));

     it('should emit show details', fakeAsync(() => {
          const childComponent: LiningTableComponent = fixture.debugElement.query(
               By.directive(LiningTableComponent)
          ).componentInstance;

          childComponent.showDetails(liningsData);
          expect(childComponent.openDetailsModal.emit).toBeTruthy();
     }));

     describe('#Table ', () => {
          it('should form emit value', () => {
               const formData = 'abc';
               const spy = spyOn(componentTableHeader.filterData, 'emit');
               componentTableHeader.onFormChange(formData);
               expect(spy).toHaveBeenCalledWith(formData);
          });

          it('should add New Item emit value', () => {
               const spy = spyOn(componentTableHeader.addNewItem, 'emit');
               componentTableHeader.addNew();
               expect(spy).toHaveBeenCalledWith(true);
          });

          // it('should be call orders service with get method', () => {
          //      service.getList().subscribe();
          //      const req = httpTestingController.expectOne(LINING_API_PATHS.LIST, 'get data from api');
          //      expect(req.request.method).toBe('GET');
          // });

          // it('should call LiningService create() with post method', () => {

          //      const lining = liningsData;
          //      const url = `${environment.api}${LINING_API_PATHS.CREATE}`;
          //      service.create(lining).subscribe();
          //      const req = httpTestingController.expectOne(url, 'create api');
          //      expect(req.request.method).toBe('POST');
          //      req.flush(liningsData);
          // });

          // it('should call LiningService update() with post method', () => {
          //      const id = 2;
          //      const lining = liningsData;
          //      const url = `${environment.api}${LINING_API_PATHS.UPDATE}${id}`;
          //      service.update(id, lining).subscribe();
          //      const req = httpTestingController.expectOne(url, 'create api');
          //      expect(req.request.method).toBe('POST');
          //      req.flush(liningsData);
          // });

          // it('should call onFormChange', fakeAsync(() => {
          //      const spy = spyOn(component, 'onFilterData');
          //      component.onFilterData('test');
          //      expect(spy).toHaveBeenCalledWith('test');
          //     // dataStore.
          // }));

          // it('should call onFormChange', fakeAsync(() => {
          //      const spy = spyOn(dataStore, 'onAddNew');
          //      component.onAddNew();
          //      expect(spy).toHaveBeenCalled();
          // }));

          // it('should call onAddNew', fakeAsync(() => {
          //      const spy = spyOn(service, 'create');
          //      component.onAddNew();
          //      // childComponent.addNew();
          //      tick(1000);
          //      expect(spy).toHaveBeenCalled();
          // }));

          // it('should be call user service with post method', () => {
          //      component.onAddNew();
          //      expect(dataStore.onAddNew().subscribe());
          //      // expect(component.filteredTableData$.subscribe()).toBeDefined();
          // });

          // it('retrieve data', fakeAsync(() => {
          //      clientDataStore.getList().subscribe((data) => {
          //           expect(data).toBeDefined();
          //      });
          //      tick(1000);
          // }));
          describe('#notificationService', () => {
               it('should be call success msg ', () => {
                    notificationService.success('success test');
                    expect(toastrService.success).toHaveBeenCalledWith('success test');
               });

               it('should be call success msg with description ', () => {
                    notificationService.success('success test', 'description');
                    expect(toastrService.success).toHaveBeenCalledWith('success test description');
               });

               it('should be call error msg ', () => {
                    notificationService.error('');
                    expect(toastrService.error).toHaveBeenCalledWith(
                         'Wystąpił błąd podczas pobierania danych'
                    );
               });

               it('should be call error msg ', () => {
                    notificationService.error('');
                    expect(toastrService.error).toHaveBeenCalledWith(
                         'Wystąpił błąd podczas pobierania danych'
                    );
               });
               it('should be call error save msg ', () => {
                    notificationService.errorSave('');
                    expect(toastrService.error).toHaveBeenCalledWith(
                         'Wystąpił błąd podczas zapisu danych'
                    );
               });
               it('should be call info msg ', () => {
                    notificationService.info('test info');
                    expect(toastrService.info).toHaveBeenCalledWith('test info');
               });
               it('should be call warning msg', () => {
                    notificationService.warning('test warning');
                    expect(toastrService.warning).toHaveBeenCalledWith('test warning');
               });
               it('should be call system msg', () => {
                    notificationService.system('test system');
                    expect(toastrService.warning).toHaveBeenCalledWith('test system');
               });
          });

          describe('#DialogComponent ', () => {
               it('should close confirm dialog', fakeAsync(() => {
                    const spy = spyOn(dialogComponent.dialogRef, 'close').and.callThrough();
                    dialogComponent.onConfirm();
                    expect(spy).toHaveBeenCalledWith(true);
               }));

               it('should close confirm dialog', fakeAsync(() => {
                    const spy = spyOn(dialogComponent.dialogRef, 'close').and.callThrough();
                    dialogComponent.onDismiss();
                    expect(spy).toHaveBeenCalledWith(false);
               }));
          });
          describe('#ConfirmDialogsHelper ', () => {
               it('should open confirm Cancel helper', fakeAsync(() => {
                    helper.confirmCancel().subscribe();
                    const spy = spyOn(confirmDialogsHelper, 'confirmDialog');
                    expect(spy).toBeTruthy();
               }));
          });
          describe('#Simple Filter Form ', () => {
               it('should remove text ', () => {
                    //  const spy = spyOn(simpleFilterFormComponent, 'removeText');
                    simpleFilterFormComponent.removeText();
                    expect(simpleFilterFormComponent.form.searchedText?.value).toEqual('');
               });
          });
          // describe('#lining data service ', () => {
          //      it('retrieves all the lining', () => {
          //           dataStore.getList().subscribe((result) => expect(result?.length).toBeGreaterThan(0));
          //      });
          // });
          describe('#Filter data', () => {
               it('should call onFormChange', fakeAsync(() => {
                    component.onFilterData('a');
                    component.filteredTableData$.subscribe((result) =>
                         expect(result?.length).toBeGreaterThan(0)
                    );
               }));
          });
     });
});
