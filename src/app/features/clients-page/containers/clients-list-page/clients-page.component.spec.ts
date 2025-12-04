import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material/radio';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { TableHeaderComponent } from '@shared/modules/data-table/table-header/table-header.component';
import { SimpleFilterFormComponent } from '@shared/modules/data-table/simple-filter-form/simple-filter-form.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ClientsPageComponent } from './clients-page.component';
import { ClientsTableComponent } from '@features/clients-page/components/tables/clients-table/clients-table.component';
import { ClientsService } from '@features/clients-page/services/clients-service';
import { Client } from '@features/clients-page/models/client.interface';
import { ClientsDataStore } from '@features/clients-page/client-store/client-crud-facade';
import { Router } from '@angular/router';
import { CLIENTS_API_PATHS } from '@features/clients-page/enums/clients-paths.enum';
import { MYORDER_API_PATHS } from '@features/myorder-page/enums/myorder.paths.enum';
import { clientData, clientSaveData } from '@features/clients-page/stubs/clients-data.stub';
import { ClientDetailsModalComponent } from '@features/clients-page/components/modals/order-details-modal/client-details-modal.component';
import { NotificationMessageService } from '@core/notifications/notification.service';

import { environment } from 'src/environments/environment';
import { HttpsInterceptor } from '@core/interceptors/old-https.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ConfirmDialogsHelper } from '@shared/components/confirm-dialog/confirm-dialog.helper';
import { ClientModalHelper } from '@features/clients-page/helpers/client-modal.helper';
import { ClientFormComponent } from '@features/clients-page/components/forms/client-form/client-form.component';
import { TITLES } from '@features/clients-page/enums/titles.enum';
import { clientModelCreate } from '@features/clients-page/helpers/client-create';
import { ConfirmDialogComponent } from '@shared/components/confirm-dialog/confirm-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { MatIconTestingModule } from '@angular/material/icon/testing';
import { dialogMock } from '@shared/stubs/dialog.stub';

describe('ClientsPageComponent', () => {
     let component: ClientsPageComponent;
     let fixture: ComponentFixture<ClientsPageComponent>;
     let router: Router;
     let componentTable: ClientsTableComponent;
     let fixtureTable: ComponentFixture<ClientsTableComponent>;

     let componentTableHeader: TableHeaderComponent;
     let fixtureTableHeader: ComponentFixture<TableHeaderComponent>;

     let componentModal: ClientDetailsModalComponent;
     let fixtureModal: ComponentFixture<ClientDetailsModalComponent>;

     let clientsService: ClientsService;
     let httpTestingController: HttpTestingController;
     let notificationService: NotificationMessageService;
     const toastrService = jasmine.createSpyObj<ToastrService>('ToasterService', [
          'error',
          'success',
          'warning',
          'info',
     ]);
     // let helper: StockModalsHelper;
     //  helper = TestBed.inject(ClientModalHelper);
     let confirmDialogsHelper: ConfirmDialogsHelper;
     let helper: ClientModalHelper;

     let formComponent: ClientFormComponent;
     let fixtureForm: ComponentFixture<ClientFormComponent>;

     // let clientContactForm: ClientContactFormComponent;
     // let fixtureClientContactForm: ComponentFixture<ClientContactFormComponent>;
     // let mockedClientDataStore = jasmine.createSpyObj<ClientsDataStore>('ClientsDataStore', ['getList']);

     let dialogComponent: ConfirmDialogComponent;
     let fixtureDialog: ComponentFixture<ConfirmDialogComponent>;

     let simpleFilterFormComponent: SimpleFilterFormComponent;
     let fixtureSimpleFilterForm: ComponentFixture<SimpleFilterFormComponent>;

     // let component: SimpleFilterFormComponent;
     // let fixture: ComponentFixture<SimpleFilterFormComponent>;

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
                    MatIconModule,
                    MatIconTestingModule,
               ],
               declarations: [
                    ClientsPageComponent,
                    TableHeaderComponent,
                    ClientsTableComponent,
                    SimpleFilterFormComponent,
                    ClientFormComponent,
               ],
               providers: [
                    ClientsService,
                    ClientsDataStore,
                    { provide: ToastrService, useValue: toastrService },
                    { provide: HTTP_INTERCEPTORS, useClass: HttpsInterceptor, multi: true },
                    {
                         provide: MatDialogRef,
                         useValue: dialogMock,
                    },
                    {
                         provide: MAT_DIALOG_DATA,
                         useValue: {},
                    },
                    ClientModalHelper,
                    ConfirmDialogsHelper,
                    //  { provide: ClientsDataStore, useValue: clientsDataStore },
               ],
          }).compileComponents();

          fixture = TestBed.createComponent(ClientsPageComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();

          fixtureTable = TestBed.createComponent(ClientsTableComponent);
          componentTable = fixtureTable.componentInstance;
          fixtureTable.detectChanges();

          fixtureTableHeader = TestBed.createComponent(TableHeaderComponent);
          componentTableHeader = fixtureTableHeader.componentInstance;
          fixtureTable.detectChanges();

          fixtureModal = TestBed.createComponent(ClientDetailsModalComponent);
          componentModal = fixtureModal.componentInstance;

          router = TestBed.inject(Router);
          // clientDataStore = TestBed.inject(ClientsDataStore);
          clientsService = TestBed.inject(ClientsService);
          // service = TestBed.inject(ClientsService);
          httpTestingController = TestBed.inject(HttpTestingController);
          notificationService = TestBed.inject(NotificationMessageService);

          helper = TestBed.inject(ClientModalHelper);
          confirmDialogsHelper = TestBed.inject(ConfirmDialogsHelper);

          fixtureForm = TestBed.createComponent(ClientFormComponent);
          formComponent = fixtureForm.componentInstance;

          // let clientContactForm: ClientContactFormComponent;
          // let fixtureClientContactForm: ComponentFixture<ClientContactFormComponent>;
          // fixtureClientContactForm = TestBed.createComponent(ClientContactFormComponent);
          // clientContactForm = fixtureClientContactForm.componentInstance;
          // fixture = TestBed.createComponent(ClientContactFormComponent);
          // component = fixture.componentInstance;
          // storageService = TestBed.inject(StorageService);

          fixtureDialog = TestBed.createComponent(ConfirmDialogComponent);
          dialogComponent = fixtureDialog.componentInstance;

          // let simpleFilterFormComponent: SimpleFilterFormComponent;
          //let fixtureSsimpleFilterForm: ComponentFixture<SimpleFilterFormComponent>;

          // simpleFilterFormComponent
          fixtureSimpleFilterForm = TestBed.createComponent(SimpleFilterFormComponent);
          simpleFilterFormComponent = fixtureSimpleFilterForm.componentInstance;
          //ComponentFixture<SimpleFilterFormComponent>;
     });

     // afterEach(() => {
     //      httpTestingController.verify();
     // });

     it('should create', () => {
          expect(component).toBeTruthy();
     });

     describe('#Clients Table ', () => {
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

          const clientId = 123;
          it('should emit showDetails', () => {
               const spy = spyOn(componentTable.showDetailsAction, 'emit');
               componentTable.showDetails(clientId);
               expect(spy).toHaveBeenCalledWith(clientId);
          });
          it('should emit addOrder', () => {
               const spy = spyOn(componentTable.addOrderAction, 'emit');
               componentTable.addOrder(clientId);
               expect(spy).toHaveBeenCalledWith(clientId);
          });
          it('should emit new addOrder', () => {
               const spy = spyOn(componentTable.addNewClientOrderAction, 'emit');
               componentTable.newClientOrder(clientId);
               expect(spy).toHaveBeenCalledWith(clientId);
          });
          it('should emit deleteClient', () => {
               const spy = spyOn(componentTable.deleteClientAction, 'emit');
               componentTable.deleteClient(clientId);
               expect(spy).toHaveBeenCalledWith(clientId);
          });
     });

     // it('should render no data template', () => {
     //      component.tempTable = [];
     //      fixture.detectChanges();
     //      const compiled = fixture.debugElement.nativeElement;
     //      expect(compiled.querySelector('.alert').textContent).toContain('Nie znaleziono danych');
     // });

     // it('should render title in a table-header tag', () => {
     //      fixture.detectChanges();
     //      const compiled = fixture.debugElement.nativeElement;
     //      expect(compiled.querySelector('.table-header').textContent).toContain('Lista klientów');
     // });

     it('should render clients table header', fakeAsync(() => {
          const compiled = fixture.debugElement.nativeElement;
          const data: Client[] = [
               {
                    id: 1,
                    firstname: 'pierwszy',
                    client_nr: 'gdanska 123',
                    lastname: 'zzz',
                    phone: '222222',
                    email: 'aaaa@wp.pl',
                    contact: '',
                    consumption_standard: '',
                    notices: '',
               },
          ];
          component.tempTable = data;
          fixture.detectChanges();
          tick(1000);
          expect(compiled.querySelector('app-table-header')?.textContent).toContain(
               'Lista klientów'
          ); //OK
     }));

     it('should render clients table', fakeAsync(() => {
          const compiled = fixture.debugElement.nativeElement;
          const data: Client[] = [clientData];
          component.tempTable = data;
          fixture.detectChanges();
          tick(1000);
          expect(compiled.querySelector('app-clients-table')).toBeTruthy(); //OK
     }));

     it('should call redirect to new order', fakeAsync(() => {
          const component = fixture.componentInstance;
          const navigateSpy = spyOn(router, 'navigate');
          component.navigateToAddNewOrder(100);
          expect(navigateSpy).toHaveBeenCalledWith([`${MYORDER_API_PATHS.CLIENT_NEW}${100}`]);
     }));

     it('should call redirect to add order', fakeAsync(() => {
          const component = fixture.componentInstance;
          const navigateSpy = spyOn(router, 'navigate');
          component.navigateToAddOrder(100);
          expect(navigateSpy).toHaveBeenCalledWith([`${MYORDER_API_PATHS.ADD_CLOTHES}${100}`]);
     }));

     it('should call redirect to client details order', fakeAsync(() => {
          const component = fixture.componentInstance;
          const navigateSpy = spyOn(router, 'navigate');
          component.navigateToClientDetails(100);
          expect(navigateSpy).toHaveBeenCalledWith([`${CLIENTS_API_PATHS.DETAILS}${100}`]);
     }));

     // it('should call clientDataStore client data', fakeAsync(() => {
     //      // spyOn(component, 'getClientList').and.callThrough();
     //      spyOn(clientDataStore, 'getList').and.callThrough();
     //      component.getClientList();
     //      expect(clientDataStore.getList).toHaveBeenCalled();
     // }));

     // it('should component has oninit call checkFormAndEmit', () => {
     //      const spy = spyOn(clientsService, 'getList');
     //      component.getClientList();
     //      expect(spy).toHaveBeenCalledTimes(1);
     // });

     // it('should be call ClientsService getDetails ', () => {
     //      const spy = spyOn(clientsService, 'getDetails');
     //      clientsService.getDetails(1);
     //      expect(spy).toHaveBeenCalled();
     // });

     // it('retrieve data', fakeAsync(() => {
     //      clientDataStore.getList().subscribe((data) => {
     //           expect(data).toBeDefined();
     //      });
     //      tick(1000);
     // }));

     // it('child comp data', fakeAsync(() => {
     //      const childComponent: TableHeaderComponent = fixture.debugElement.query(
     //           By.directive(TableHeaderComponent)
     //      ).componentInstance;
     //      component.tableTitle = TITLES.TABLE_TITLE;
     //      expect(childComponent.title).toEqual(TITLES.TABLE_TITLE);
     // }));

     // it('child comp data', fakeAsync(() => {
     //      const childComponent: TableHeaderComponent = fixture.debugElement.query(
     //           By.directive(TableHeaderComponent)
     //      ).componentInstance;
     //      childComponent.filterData.emit('Jan');
     //      //.onFormChange('Jan '); //.addNew();
     //      const component = fixture.componentInstance;
     //      const spy = spyOn(component, 'updateFilter');

     //      expect(spy).toHaveBeenCalled();
     // }));

     it('run filtering comp data', fakeAsync(() => {
          const clients: Client[] = [
               {
                    id: 119,
                    client_nr: 'test123',
                    firstname: 'Jan',
                    lastname: 'Kowalski',
                    phone: '',
                    email: '',
               },
               {
                    id: 119,
                    client_nr: 'test3333',
                    firstname: 'Roman',
                    lastname: 'Abc',
                    phone: '',
                    email: '',
               },
          ];
          component.tableData = clients;
          component.updateFilter('Jan');
          expect(component.tempTable[0]).toEqual(clients[0]);
     }));

     // it('get list data', fakeAsync(() => {
     // public getClientList(): void {
     //      this.clientsDataStore
     // }));

     // it('should component has oninit call getClientList', fakeAsync(() => {
     //      const spy = spyOn(component, 'getClientList');
     //      component.ngOnInit();
     //      tick(1000);
     //      expect(spy).toHaveBeenCalled();
     // }));

     // it('should component has oninit call getClientList', fakeAsync(() => {
     //      const clients: Client[] = [
     //           {
     //                id: 119,
     //                client_nr: 'test123',
     //                firstname: 'Jan',
     //                lastname: 'Kowalski',
     //                phone: '',
     //                email: '',
     //           },
     //           {
     //                id: 119,
     //                client_nr: 'test3333',
     //                firstname: 'Roman',
     //                lastname: 'Abc',
     //                phone: '',
     //                email: '',
     //           },
     //      ];

     //  mockedDlientDataStore.getList.and.returnValue(of([...]));

     // expect(clientDataStore.getList).toHaveBeenCalled();
     //    mockedDlientDataStore.getList.and.returnValue(of(clients))

     //  clientDataStore.getList() = of({value:  []})
     // let serviceSpy= jasmine.createSpyObj('clientDataStore', {
     //      'getList': of('mock data'),
     //      'other': 'some val'
     //  });

     // const spy = spyOn(clientDataStore, 'getList');
     // component.ngOnInit();
     // tick(1000);
     // expect(spy).toHaveBeenCalled();
     //}));

     describe('#Client Modal Dialog', () => {
          it('dialog should be closed after close click()', () => {
               const spy = spyOn(componentModal.dialogRef, 'close').and.callThrough();
               componentModal.onClose();
               expect(spy).toHaveBeenCalledWith(false);
          });

          it('dialog should be closed after save click()', () => {
               const spy = spyOn(componentModal.dialogRef, 'close').and.callThrough();
               componentModal.onSave();
               expect(spy).toHaveBeenCalled();
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
     describe('#Client Data ', () => {
          // it('should be call ClientsService with get method', () => {
          //      clientsService.getList().subscribe();
          //      const req = httpTestingController.expectOne(CLIENTS_API_PATHS.LIST, 'clients list api');
          //      // expect(req.request.method).toBe('POST');
          //      expect(req.request.method).toBe('GET');
          // });

          // it('should be call ClientsService getList with get method', () => {
          //      const url = `${environment.api}${CLIENTS_API_PATHS.LIST}`;
          //      // const url = `${CLIENTS_API_PATHS.LIST}`;
          //      clientsService.getList().subscribe();
          //      const req = httpTestingController.expectOne(url, 'get clients list api');
          //      expect(req.request.method).toBe('GET');
          //      req.flush([clientData]);
          // });

          it('should call ClientsService update() with post method', () => {
               const id = 45;
               const client = clientData;
               const url = `${environment.api}${CLIENTS_API_PATHS.UPDATE}${45}`;
               clientsService.update(id, client).subscribe();
               const req = httpTestingController.expectOne(url, 'create api');
               expect(req.request.method).toBe('POST');
               req.flush(clientData);
          });
          it('should call ClientsService addNew() with post method', () => {
               // component.addNew();
               const url = `${environment.api}${CLIENTS_API_PATHS.CREATE}`;
               clientsService.create(clientData).subscribe();
               const req = httpTestingController.expectOne(url, 'create api');
               expect(req.request.method).toBe('POST');
               req.flush(clientData);
          });
     });

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

     describe('#ConfirmDialogsHelper ', () => {
          it('should open confirm Cancel helper', fakeAsync(() => {
               helper.confirmCancel().subscribe();
               const spy = spyOn(confirmDialogsHelper, 'confirmDialog');
               expect(spy).toBeTruthy();
          }));
     });

     describe('#ClientDetailsModalComponent ', () => {
          it('should have proper modal title', () => {
               helper.openModal().subscribe();
               fixtureForm.detectChanges();
               const title = document.querySelector('.modal-title');
               expect(title?.textContent).toBe(TITLES.MODAL_TITLE_NEW);
          });

          // it('should render app-client-form', () => {
          //      helper.openModal().subscribe();
          //      const editForm = fixture.debugElement.query(By.css('app-client-form'));
          //      expect(editForm).toBeTruthy();
          // });

          it('should render modal-header', () => {
               helper.openModal().subscribe();
               const modalHeader = document.querySelector('.modal-header');
               expect(modalHeader).toBeTruthy();
          });

          it('should render modal-header sith MODAL_TITLE_NEW', () => {
               const client: Client = clientData;
               helper.openModal(client).subscribe();
               const modalHeader = document.querySelector('.modal-header');
               expect(modalHeader).toBeTruthy();
          });
          // it('should create client model', () => {
          //      const client: Client = clientData;
          //      const clientSaveModel = clientSaveData;
          //      expect(clientModelCreate(client)).toEqual(clientSaveModel);
          // });

          // it('dialog should isFormValid have proper value ', () => {
          //      component.onFormValid(true);
          //      expect(component.isFormValid).toEqual(true);
          // });
     });

     //fixtureForm = TestBed.createComponent(ClientFormComponent);
     //formComponent = fixtureForm.componentInstance;

     // it('should form filled with data', () => {
     //      clientContactForm.clientDetails = {
     //           id: 123,
     //           client_nr: 'zx-789',
     //           firstname: 'aaa',
     //           lastname: 'aaa',
     //           email: 'zzz@wp.pl',
     //           phone: '234456678',
     //      };
     //      fixture.detectChanges();
     //      expect(clientContactForm.form.client_nr?.value).toBe('zx-789');
     // });

     //formComponent

     describe('#Client Form ', () => {
          it('should main form has no errors', () => {
               formComponent.clientDetails = clientData;
               expect(formComponent.form.firstname?.value).toEqual('jan');
          });
     });

     describe('#clientModelCreate ', () => {
          it('should have proper client data', () => {
               const client = clientSaveData;
               expect(clientModelCreate(client).client_nr).toEqual('client 1');
          });
     });

     describe('#FormComponent getErrorMessage', () => {
          it('should get email error message', () => {
               expect(formComponent.getErrorMessage('email')).toEqual(
                    'Wprowadź poprawny adres e-mail.'
               );
          });

          it('should be call ErrorMsgService getList service ', () => {
               const msg = formComponent.getErrorMessage('abc');
               expect(msg).toBeFalsy();
          });
     });
     describe('#Simple Filter Form ', () => {
          it('should remove text ', () => {
               simpleFilterFormComponent.removeText();
               expect(simpleFilterFormComponent.form.searchedText?.value).toEqual('');
          });
     });
});
