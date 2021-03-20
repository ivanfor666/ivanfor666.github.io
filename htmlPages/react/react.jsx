function createElement(tag, attrs, ...childrens) {
    return {tag, /*外层的标签 |*/    attrs, /*属性  是一个对象 |*/    childrens    /*是一个数组 |*/}
}

class Component {
    constructor(props) {
        this.state = {};
        this.props = props;
    }

    componentWillMount() {
        console.log('Component WILL MOUNT!')
    }

    componentDidMount() {
        console.log('Component DID MOUNT!')
    }

    componentWillReceiveProps(newProps) {
        console.log('Component WILL RECEIVE PROPS!')
    }

    shouldComponentUpdate(newProps, newState) {
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('Component WILL UPDATE!');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Component DID UPDATE!')
    }

    componentWillUnmount() {
        console.log('Component WILL UNMOUNT!')
    }

    mysetState(stateChange) {
        Object.assign(this.state, stateChange)
        /* 渲染组件 |*/
        renderComponent(this)
    }
}