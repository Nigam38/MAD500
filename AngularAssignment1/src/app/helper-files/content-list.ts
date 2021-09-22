import {Content} from "./content_interface";

export class Content_list {
  private _contents: Content[] = [];

  constructor(item: Content) {
    this._contents = [];
    this._contents[0] = item;
  }

  get content(): Content[] {
    return this._contents;
  }

  set items(newItems:Content[]) {
    this._contents.push(newItems[0]);
  }

  public addContent(content: Content): void {
     this._contents.push(content);
  }

  numberOfContent(): number {
    return this._contents.length;
  }

  showContent(index: number) : string {
    // let output = ``;
    //
    // if (this._contents[index].imageUrl) {
    //   output += `<img src=${this._contents[index].imageUrl}>`;
    // }
    //
    // if (this._contents[index].type) {
    //   output += `<div>${this._contents[index].type}</div>>`;
    // }
    //
    // if (this._contents[index].tags) {
    //   output += `<div>${this._contents[index].type}</div>>`;
    // }
    //
    // return output;
    let content = this._contents[index]
    if (content == null) {
      return '<h4 class="error" style="color:blue;">There is no contents.</h4>'
    }
      return `<h2>Title: ${content.title}</h2>
            <h4>Author: ${content.author}</h4>
            <p>Description: ${content.body}</p>`;
  }
}
