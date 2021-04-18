class MyComponent extends Component {
    constructor(props) {
        super(props)
    }
}

function createComponent(comp, props) {
    let inst;
    /*类组件 |*/
    if (comp.prototype && comp.prototype.render) {
        inst = new comp(props);
    } else {    /*如果是函数组件，将函数组件扩展成类组件 方便后面统一管理*/
        inst = new MyComponent(props);
        inst.constructor = comp;
        /*定义render函数*/
        inst.render = function () {
            return this.constructor(props);
        }
    }
    return inst;
}

function setComponentprops(comp, props) {   /*设置组件的属性 |*/
    if (!comp.base) {
        if (comp.componentWillMount) comp.componentWillMount();
    } else if (comp.componentWillReceiveProps) {
        comp.componentWillReceiveProps();
    }
    comp.props = props;
    return renderComponent(comp);
}

function renderComponent(comp) {   /*jsx 对象 |*/
    let base;
    console.log(comp)
    const renderer = comp.render();
    base = _render(renderer)
    if (comp.base) {
        if (comp.componentWillUpdate) {
            comp.componentWillUpdate();
        }
        if (comp.componentDidUpdate) {
            comp.componentDidUpdate();
        }
    } else if (comp.componentDidMount) {
        comp.componentDidMount();
    }
    if (comp.base && (comp.base.parentNode)) {
        (comp.base.parentNode).replaceChild(base, comp.base)
    }
    comp.base = base;
}

function setAttribute(dom, key, value) {   /*将属性名className 转换成class |*/
    if (key === 'className') {
        key = 'class';
    }
    /*如果是事件 onClick onBulr ... |*/
    if (/on\w+/.test(key)) {
        key = key.toLowerCase();
        dom[key] = value || '';
    } else if (key === 'style') {
        if (!value || typeof value === 'string') {
            dom.style.cssText = value || '';
        } else if (value && typeof value === 'object') {       /*{ width: 20 } |*/
            for (let k in value) {
                if (typeof value[k] === 'number') {
                    dom.style[k] = value[k] + 'px';
                } else {
                    dom.style[k] = value[k]
                }
            }
        }
    } else {      /*其它属性*/
        if (key in dom) {
            dom[key] = value || '';
        }
        if (value) {      /*更新值*/
            dom.setAttribute(key, value);
        } else {
            dom.removeAttribute(key, value);
        }
    }
}

function _render(vnode, container) {
    if (vnode === undefined || vnode === null || typeof vnode === "boolean") {
        return container.appendChild(document.createTextNode(""));
    }
    if (typeof vnode === "number") {
        vnode = String(vnode)
    }
    if (typeof vnode === "string") {
        return container.appendChild(document.createTextNode(vnode));
    }
    /*如果tag是函数，则渲染组件 react 函数就是一个组件 |*/
    if (typeof vnode === "function") {    /*1. 创建组件 |*/
        const comp = createComponent(vnode, vnode.attrs);
        /*2. 设置组件的属性 |*/
        setComponentprops(comp, vnode.attrs);
        /*console.log(comp.base)*/
        window.aa = comp.base
        /*3.组件渲染的节点 |*/
        return comp.base
    }
    /*否则就是虚拟DOM对象 |*/
    const {tag, attrs} = vnode
    /*创建节点对象*/
    const dom = document.createElement(tag)
    if (attrs) {    /*有属性 key : className = 'active' title = '123'*/
        Object.keys(attrs).forEach(key => {
            const value = attrs[key];
            setAttribute(dom, key, value)
        })
    }
    vnode.childrens && vnode.childrens.forEach(child => _render(child, dom))
    return container ? container.appendChild(dom) : dom;
}

function reactRender(vnode, container) {
    return container.appendChild(_render(vnode, container))
}