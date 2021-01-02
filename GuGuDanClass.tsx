import * as React from "react";
import { Component } from "react";

interface IState {
    first: number,
    second: number,
    value: string,
    result: string,
}

class GuGuDan extends Component<{}, IState> {
    state = {
        first: Math.ceil(Math.random() * 9),
        second: Math.ceil(Math.random() * 9),
        value: '',
        result: '',
    }

    onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(parseInt(this.state.value) === this.state.first * this.state.second) {
            this.setState((prevState) => {
                return {
                    result: '정답: ' + prevState.value,
                    first: Math.ceil(Math.random() * 9),
                    second: Math.ceil(Math.random() * 9),
                    value: '',
                };
            });
            if(this.input) {
                this.input.focus();
            }
        } else {
            this.setState({
                result: '땡',
                value: '',
            });
            if(this.input) {
                this.input.focus();
            }
        }
    };

    onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({value: e.target.value});
    };

    input: HTMLInputElement | null = null;

    onRefInput = (c: HTMLInputElement) => { this.input = c};

    render() {
        return (
        <React.Fragment>
            <div>{this.state.first} 곱하기 {this.state.second}는?</div>
            <form onSubmit={this.onSubmit}>
                <input type="text" ref={this.onRefInput} value={this.state.value} onChange={this.onChange}/>
                <button>입력</button>
            </form>
            <div>{this.state.result}</div>
        </React.Fragment>)
    }
}

export default GuGuDan;