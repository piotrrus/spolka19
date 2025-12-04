import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastrModule } from 'ngx-toastr';
import { ClientOrdersService } from './client-orders-service';
import { ORDERS_API_PATHS } from '@features/orders-page/enums/orders.paths.enum';
import { environment } from 'src/environments/environment';
import { assortData } from '../stubs/ordered-assort.stub';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpsInterceptor } from '@core/interceptors/old-https.interceptor';

describe('ClientOrdersService', () => {
     let service: ClientOrdersService;
     let httpTestingController: HttpTestingController;

     beforeEach(() => {
          TestBed.configureTestingModule({
               imports: [HttpClientTestingModule, ToastrModule.forRoot()],
               providers: [
                    ClientOrdersService,
                    MatSnackBar,
                    { provide: HTTP_INTERCEPTORS, useClass: HttpsInterceptor, multi: true },
               ],
          });

          service = TestBed.inject(ClientOrdersService);
          httpTestingController = TestBed.inject(HttpTestingController);
     });

     it('should be created service', () => {
          expect(service).toBeTruthy();
     });

     it('should be call ClientOrdersService getClientOrders ', () => {
          const spy = spyOn(service, 'getClientOrders');
          service.getClientOrders(1);
          expect(spy).toHaveBeenCalled();
     });

     it('should be call ClientOrdersService getClientOrders with get method', () => {
          const id = 2;
          const url = `${environment.api}${ORDERS_API_PATHS.CLIENT_ORDERS}${id}`;
          service.getClientOrders(id).subscribe();
          const req = httpTestingController.expectOne(url, 'get details api');
          expect(req.request.method).toBe('GET');
          req.flush(assortData);
     });
});
