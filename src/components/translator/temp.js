<Container>
 <Segment>
   <Form onSubmit={this.handleSubmit}>
     <Form.Group widths='equal'>
       <Form.Field
         control={Select}
         label='Translate From'
         options={languages}
         placeholder='Translate From'
         id="from"
         name="from"
         defaultValue={this.state.from}
         // value={this.state.from}
         onChange={this.handleChange}
       />
       <Form.Field
         control={Select}
         label='Translate To'
         options={languages}
         placeholder='Translate To'
         id="to"
         name="to"
         // value={this.state.to}
         defaultValue={this.state.to}
         onChange={this.handleChange}
       />
     </Form.Group>
     <Form.Field control={TextArea} label='Translated From' placeholder='' />
     <Form.Field control={TextArea} label='Translated To' placeholder=''
       id="translated"
       name="translated"
       value={this.props.translated}
       onChange={this.handleChange}
     />
     <Form.Field
       control={Button}
       color='red'
       basic
       id="text"
       name="text"
       onChange={this.handleChange}
     >
       Translate
     </Form.Field>
   </Form>
 </Segment>
</Container>
