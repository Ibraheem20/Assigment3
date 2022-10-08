import react from 'react';
import './List.css'

class List extends react.Component{
    constructor(props){
        super(props);
        this.state={
            users:props.group
        }

    }
    
    filtering=(list)=>{
        console.log(list)
        return(
            <div className='lists'>
                <ul><h3>Names</h3>
                {   
                    list.map((user,idx) =>{
                        if(user.name !== undefined){
                        return <li key={idx}>{user.name}</li>
                        }
                        return "";
                    })
                }
                </ul>
                <ul className='age'><h3>Ages</h3>
                {  list.map((user,idx) =>{
                        if(user.age !== undefined){
                        return <li key={idx}>{user.age}</li>
                        }
                        return "";
                    })
                }
                </ul>
        </div>
        )
    }
    removeDuplicates=()=>{
        let list = this.state.users;
        console.log(list.length)
        for(let i=0;i<list.length-1;i++){
            for(let k=i+1;k<list.length;k++){
                if(list[i].name === list[k].name){
                    delete list[k].name
                }
                if(list[i].age === list[k].age){
                    delete list[k].age
                }
            }
        }
        this.setState({
            users:list
        })
    }
    removeItem=()=>{
        let list = this.state.users;
        list.pop();
        this.setState({
            users:list
        })
    }

    render(){
        return(
            <div>
                {this.filtering(this.state.users)}
                <button onClick={this.removeDuplicates}>remove duplicates</button>
                <button onClick={this.removeItem}>remove item</button>
            </div>
        )
    }

}
export default List;