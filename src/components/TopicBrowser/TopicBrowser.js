import { render } from "react-dom";
import {React, Component} from React;

class TopicBrowser extends Component {
    render(){
        return (
            <div>
                <EvenAndOdd />
                <FilterObject />
                <FilterString />
                <Palindrome />
                <Sum />
            </div>
        )
    }
}

export default TopicBrowser 