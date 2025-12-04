import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastrModule } from 'ngx-toastr';
import { AssortsService } from './assorts.service';

describe('AssortsService', () => {
     let service: AssortsService;
     // let httpTestingController: HttpTestingController;

     beforeEach(() => {
          TestBed.configureTestingModule({
               imports: [HttpClientTestingModule, ToastrModule.forRoot()],
               providers: [AssortsService, MatSnackBar],
          });

          service = TestBed.inject(AssortsService);
          // httpTestingController = TestBed.inject(HttpTestingController);
     });

     it('should be created service', () => {
          expect(service).toBeTruthy();
     });

     // it('should be call AssortsService clothes ', () => {
     //      const spy = spyOn(service, 'getClothesList');
     //      service.getClothesList();
     //      expect(spy).toHaveBeenCalled();
     // });

     // it('should be call AssortsService getClothesList with get method', () => {
     //      service.getClothesList().subscribe();
     //      const req = httpTestingController.expectOne(ASSORTS_API_PATHS.CLOTHES, 'get clothes api');
     //      expect(req.request.method).toBe('GET');
     // });

     // it('should be call AssortsService getAssortsList ', () => {
     //      const spy = spyOn(service, 'getAssortsList');
     //      service.getAssortsList();
     //      expect(spy).toHaveBeenCalled();
     // });

     // it('should be call AssortsService getAssortsList with get method', () => {
     //      service.getAssortsList().subscribe();
     //      const req = httpTestingController.expectOne(ASSORTS_API_PATHS.ASSORTS, 'get assort list api');
     //      expect(req.request.method).toBe('GET');
     // });

     // it('should be call AssortsService getClothesList ', () => {
     //      const spy = spyOn(service, 'getClothesList');
     //      service.getAssortsList();
     //      expect(spy).toHaveBeenCalled();
     // });

     // it('should be call AssortsService getClothesList with get method', () => {
     //      service.getClothesList().subscribe();
     //      const req = httpTestingController.expectOne(ASSORTS_API_PATHS.CLOTHES, 'get clothes list api');
     //      expect(req.request.method).toBe('GET');
     // });
});
