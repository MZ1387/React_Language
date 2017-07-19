import React, {Component} from 'react';
import {connect} from 'react-redux';
import {translate} from '../../store/actions/action_translator';
import {Grid, Form, Select, Container, Segment,  Header, TextArea, Button} from 'semantic-ui-react';


const languages =  [
    { value: 'en', text: 'English'},
    { value: 'es', text: 'Spanish',}
];



class Translator extends Component {


    constructor(props) {
        super(props);
        this.state = {
            text: '',
            from: 'en',
            to: 'es'
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(event) {
        event.preventDefault();
        var text = this.state.text;
        var from = this.state.from;
        var to = this.state.to;

        console.log(text +' ' + from + ' ' + to);

        if(text && from && to) {
            this.props.dispatch(translate(text, from, to, this.props.dispatch));
            console.log(this.props);
        }

    }

    handleChange(event) {
        var state  = {}
        state[event.target.name]  = event.target.value
        this.setState(state);
    }


    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Container>
                        <Header>
                            Translator
                        </Header>
                        <Segment>
                            <Grid columns={3}>

                                <Grid.Row>
                                    <Grid.Column>
                                        <Select  options={languages}
                                            id="from" name="from"

                                            defaultValue={this.state.from}
                                                 value={this.state.from}

                                                 onChange={this.handleChange}
                                        />
                                    </Grid.Column>

                                    <Grid.Column>
                                        <Select
                                            id="to" name="to"
                                            value={this.state.to}
                                            defaultValue={this.state.to}
                                            options={languages}
                                            onChange={this.handleChange}
                                        />
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Button type='submit'>Submit</Button>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column>
                                        <TextArea id="text" name="text" onChange={this.handleChange} />
                                    </Grid.Column>

                                    <Grid.Column>
                                        <TextArea id="translated" name="translated" value={this.props.translated} onChange={this.handleChange}/>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Segment>
                    </Container>
                </Form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        translated: state.translator.translated,
    }
}

export default connect(mapStateToProps)(Translator)
