declare module "imagesloaded" {
  interface ImagesLoaded {
    on(event: string, listener: (...args: unknown[]) => void): this;
  }

  type ImagesLoadedCallback = () => void;

  /**
   * imagesLoaded v5 — callable as `imagesLoaded(el, callback)` or `new ImagesLoaded(...)`.
   */
  interface ImagesLoadedConstructor {
    (
      elem: Element | string | NodeList | ArrayLike<Element>,
      options?: Record<string, unknown>,
      onAlways?: ImagesLoadedCallback,
    ): ImagesLoaded | undefined;
    (
      elem: Element | string | NodeList | ArrayLike<Element>,
      onAlways: ImagesLoadedCallback,
    ): ImagesLoaded | undefined;
    new (
      elem: Element | string | NodeList | ArrayLike<Element>,
      options?: Record<string, unknown>,
      onAlways?: ImagesLoadedCallback,
    ): ImagesLoaded;
  }

  const imagesLoaded: ImagesLoadedConstructor;
  export default imagesLoaded;
}
