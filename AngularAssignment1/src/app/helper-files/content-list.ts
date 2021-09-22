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
      return '<h4 id="error">There is no contents.</h4>'
    }

    if(content.imageUrl == null) {
      return `<h2>Title: ${content.title}</h2>
        <div class="contentImg" >
        <h5 color="green">There is no URL for image.</h5>
        </div>
            <h4>Author: ${content.author}</h4>
            <p>Description: ${content.body}</p>`;
    }
      return `<h2>Title: ${content.title}</h2>
        <div class="contentImg" >
         <img width="150px" height="100px" src=${this._contents[index].imageUrl}>
        </div>
            <h4>Author: ${content.author}</h4>
            <p>Description: ${content.body}</p>`;

  }
}
