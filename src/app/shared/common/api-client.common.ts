import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Observable } from "rxjs";

export abstract class APIClient<TEntity = any> {
  private static _baseURL: string;

  protected constructor(
    protected readonly http: HttpClient,
    protected readonly resourceURL?: string,
  ) {
  }

  protected getBaseURL(): string {
    if (APIClient._baseURL) {
      return APIClient._baseURL;
    }

    const https = environment.api.https;
    const domain = environment.api.domain;
    const port = environment.api.port;
    let prefix = environment.api.prefix;

    if (prefix) {
      if (!prefix.startsWith('/')) {
        prefix = `/${ prefix }`;
      }
      if (!prefix.endsWith('/')) {
        prefix = `${ prefix }/`;
      }
    }
    else {
      prefix = '/';
    }

    let version = environment.api.version?.toString();

    if (version) {
      version = `v${ version }/`;
    }

    APIClient._baseURL = `${ https ? 'https' : 'http' }://${ domain }${ port ? `:${ port }` : '' }${ prefix }${ version }`;

    return APIClient._baseURL;
  }

  protected getURL(path?: any): string {
    return `${ this.getBaseURL() }${ path ?? this.resourceURL ?? '' }`;
  }

  getResourceURL(path?: any): string {
    if (!this.resourceURL) {
      throw new Error(`[${ this.constructor.name }] Missing resource URL`);
    }

    const url = this.getURL();

    if (!path) {
      return url;
    }

    return `${ url }${ url.endsWith('/') ? '' : '/' }${ path }`;
  }

  getAll<TResult = TEntity>(): Observable<TResult[]> {
    return this.http.get<TResult[]>(this.getResourceURL());
  }

  get<TResult = TEntity>(id: number): Observable<TResult> {
    return this.http.get<TResult>(this.getResourceURL(id));
  }

  create<TResult = TEntity>(data: any): Observable<TResult> {
    return this.http.post<TResult>(this.getResourceURL(), data);
  }

  patch<TResult = TEntity>(id: number, data: any): Observable<TResult> {
    return this.http.patch<TResult>(this.getResourceURL(id), data);
  }

  delete(id: number): Observable<void>;
  delete(url: string): Observable<void>;

  delete(idOrUrl: number | string): Observable<void> {
    if (!isNaN(parseInt(idOrUrl.toString()))) {
      return this.http.delete<void>(this.getResourceURL(idOrUrl));
    }

    return this.http.delete<void>(idOrUrl as string);
  }
}
