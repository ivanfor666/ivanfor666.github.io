var Element1 = createElement("div", {id: "123"}, createElement("div", {id: "444"}, createElement("div", {id: "555"}, createElement("div", {id: "6666"}, "Hello 1 World!"))))

class Component1 extends Component {
    constructor(props) {
        super(props);
        this.state = {num: 0}
    }

    componentWillMount() {
        console.log('组件将要加载')
    }

    componentDidMount() {
        console.log('组件加载完成')
    }

    handleClick = () => {
        this.mysetState({num: this.state.num + 1})
    }

    render() {
        return createElement("div", null, createElement("button", {onclick: this.handleClick}, this.state.num))
    }
}

/* var  Element2 =  createElement("div", null, createElement("button", {onclick:this.click.bind(this)}, "hello ")) */
Element = function () {
    return Element1
}
console.log(Element);
reactRender(Component1, document.getElementById("example"))