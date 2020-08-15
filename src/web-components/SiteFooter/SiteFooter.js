const footerHtml = ``;


class SiteFooter extends HTMLElement {
  constructor(){
    super();
    this.innerHTML = `<Link rel="import" href="./SiteFooter.html">`;
  }
}

window.customElements.define(
  'site-footer',
  SiteFooter
);
