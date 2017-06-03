import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod, XHRBackend, RequestOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

export function MockBackendFactory(backend: MockBackend, options: BaseRequestOptions, realBackend: XHRBackend) {
  backend.connections.subscribe((connection: MockConnection) => {
    const testUser = { username: 'admin', password: 'admin', realname: 'Admin', token: 'mock-token' };

    setTimeout(() => {
      if (connection.request.url.endsWith('/api/login') && connection.request.method === RequestMethod.Post) {
        const params = JSON.parse(connection.request.getBody());

        if (params.username === testUser.username && params.password === testUser.password) {
          connection.mockRespond(new Response(
            new ResponseOptions({ status: 200, body: { user: testUser } })
          ));
        } else {
          connection.mockRespond(new Response(
            new ResponseOptions({ status: 200 })
          ));
        }
      } else {
        const realHttp = new Http(realBackend, options);
        const requestOptions = new RequestOptions({
          method: connection.request.method,
          headers: connection.request.headers,
          body: connection.request.getBody(),
          url: connection.request.url,
          withCredentials: connection.request.withCredentials,
          responseType: connection.request.responseType
        });
        realHttp.request(connection.request.url, requestOptions)
          .subscribe((response: Response) => {
            connection.mockRespond(response);
          },
          (error: any) => {
            connection.mockError(error);
          });

      }
    }, 500);
  });

  return new Http(backend, options);
}

export const MockBackendProvider = {
  provide: Http,
  useFactory: MockBackendFactory,
  deps: [MockBackend, BaseRequestOptions, XHRBackend]
};
