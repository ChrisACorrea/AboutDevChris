export class Project {
  constructor() {}

  private _id: number = 0;
  public get id(): number {
    return this._id;
  }
  public set id(v: number) {
    this._id = v;
  }

  private _title: string = '';
  public get title(): string {
    return this._title;
  }
  public set title(v: string) {
    this._title = v;
  }

  private _appUrl: string = '';
  public get appUrl(): string {
    return this._appUrl;
  }
  public set appUrl(v: string) {
    this._appUrl = v;
  }

  private _summary: string = '';
  public get summary(): string {
    return this._summary;
  }
  public set summary(v: string) {
    this._summary = v;
  }

  private _technologies: string[] = [];
  public get technologies(): string[] {
    return this._technologies;
  }
  public set technologies(v: string[]) {
    this._technologies = v;
  }
}
