import React, {Component } from 'react';
class Counter extends Component {
       //state = {
       // value: this.props.value,
       // tags: []
        //imageUrl: "https://picsum.photos/200"
    //};
    /*
    renderTags() {
        if (this.state.tags.length ===0) return <p>There are no tags!</p>;
        return <ul>{this.state.tags.map (tag => <li key = {tag}>{tag}</li>)}</ul>;
    }
   
   constructor() {
       super();
       this.handleIncrement = this.handleIncrement.bind(this);
   }
   */
  /*
   handleIncrement = product =>  {
      this.setState({value : this.state.value + 1});
   };
   
   doHandleIncrement = () => {
       this.handleIncrement({id:1});
   };
   */
    componentDidUpdate(prevProps, prevState) {
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
        if (prevProps.counter.value !== this.props.counter.value){
            //Ajax call and get new data from the server
        }

    }
   
    render() {
        console.log('counter rendered');
        console.log('props',this.props);
        //React.createElement('div')
        //return <React.Fragment><div><h1>Hello World</h1><button>Increment</button></div></React.Fragment>;  
        return(
            
            <div>
                <span  className ={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button 
                    onClick = {() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">
                        Increment
                </button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="button btn-danger btn-sm m-2">Delete</button>
               
                
            </div>
             /*
                <ul>
                    {this.state.tags.map(tag => <li key={tag}> {tag} </li>)}
                </ul>
                <div>
               {this.state.tags.length ===0 && 'please create a new tag!'}
               {this.renderTags()}
                </div>
           */
        );  

    }
    
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const {value: count} = this.props.counter;
        return count ===0 ? 'Zero' : count;
    }
    
}
export default Counter;