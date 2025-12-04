import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastrModule } from 'ngx-toastr';
import { FabricService } from './fabric-service';
import { FABRICS_API_PATHS } from '../enums/fabric-paths.enum';

describe('FabricService', () => {
     let service: FabricService;
     let httpTestingController: HttpTestingController;

     beforeEach(() => {
          TestBed.configureTestingModule({
               imports: [HttpClientTestingModule, ToastrModule.forRoot()],
               providers: [FabricService, MatSnackBar],
          });

          service = TestBed.inject(FabricService);
          httpTestingController = TestBed.inject(HttpTestingController);
     });

     it('should be created service', () => {
          expect(service).toBeTruthy();
     });

     it('should be call FabricService getList ', () => {
          const spy = spyOn(service, 'getList');
          service.getList();
          expect(spy).toHaveBeenCalled();
     });

     it('should be call FabricService getList with get method', () => {
          service.getList().subscribe();
          const req = httpTestingController.expectOne(FABRICS_API_PATHS.LIST, 'get list api');
          expect(req.request.method).toBe('GET');
     });
});
