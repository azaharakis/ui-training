## Stateful Components

Often you will need to display application state within components, lets take a look
at an App that makes an API request for a list of properties and display's them once a
response has returned.
```js
import ReactDOM from 'react-dom';
class App extends React.Component {
    constructor() {
        this.state = {
            loading: true,
            properties: []
        }
    }
    renderProperties() {
        return this.state.properties.map((p) => (
            <div>
                <img src={p.image} />
                {p.address}
            </div>
        ))
    }
    componentDidMount(){
        fetch('https://service.iproperty.com/properties').then(properties => {
            //properties = [{address: '123 Fake st', img: 'https://hello.com/img.gif'}, ... ];
            this.setState({
                loading: false,
                properties
            });
        });
    }
    render () {
        return (
            <div>
                { this.state.loading ? 'loading...' : renderProperties() }
            </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('wrapper'));
```

### State
Unlike `props` the `state` property in a component represents dynamic data that may change during a component's lifecycle.
In the above example the default state of the component is set to:
```js
this.state = {
    loading: true,
    properties: []
}
```
The initial render of the component will use these values to present it's UI in this case `loading` is true, and displays a loading message to the user.
Immediately after rendering has finished componentDidMount is executed it then makes an asynchronous request to fetch the component's data.
upon completion we `setState`, assigning the loading property to false, since it is no longer loading, and set the value of properties to the response. 
Because setState is executed the render method is triggered again, and the values are updated accordingly. 
 In this case the loading message is removed and the `renderProperties()` function is called.
 
### Render is called multiple times? Isn't that expensive?
React is clever in how it applies updates to the DOM, because React maintains a virtual DOM tree of all the rendered components
before `render()` is called a second time it checks to see only the values that have changed and updates only that portion of the DOM.
If you wish to learn more about this you can find out [more...](https://facebook.github.io/react/docs/reconciliation.html)

### React lifecycle methods
You'll notice we implemented the method `componentDidMount`, this is a method react provides to the developer to allow for state changes.
As mentioned above this lifecycle triggers immediately after the initial render on the browser. There are more lifecycle hooks
 provided and you can read [...more](https://facebook.github.io/react/docs/react-component.html#componentwillmount) 
 
