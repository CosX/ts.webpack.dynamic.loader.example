const registerModule: (value: HTMLElement, key: number, parent: HTMLElement[]) => void = (el) => {
    const moduleName = el.dataset.module;
    const options = typeof(el.dataset.options) !== 'undefined' ? JSON.parse(el.dataset.state) : {};
    import(`./modules/${moduleName}/index` /* webpackMode: "lazy", webpackChunkName: "[request]" */).then(({ default: module }) => {
        if(typeof(module.init) === 'undefined') return;
        module.init(el, options);
    }).catch((reason) => console.error(reason)); 
};

const allModules: NodeListOf<HTMLElement> = document.querySelectorAll('[data-module]');
Array.from(allModules).forEach(registerModule);