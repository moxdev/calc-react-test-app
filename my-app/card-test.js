return (
  <li className="item-wrapper" key={key}>
    <TextField
      name="title"
      value={items.title}
      ref={input => (this.title = input)}
      floatingLabelText="Title"
      type="text"
      onChange={e => this.handleChange(e, key)}
    />
    <br />
    <TextField
      name="amount"
      value={items.amount}
      ref={input => (this.amount = input)}
      floatingLabelText="Amount"
      type="text"
      onChange={e => this.handleChange(e, key)}
    />
    <br />
    <TextField
      name="due"
      value={items.due}
      ref={input => (this.due = input)}
      floatingLabelText="Due Date"
      type="text"
      onChange={e => this.handleChange(e, key)}
    />
    <br />
    <TextField
      name="paid"
      value={items.paid}
      ref={input => (this.due = input)}
      floatingLabelText="Paid Date"
      type="text"
      onChange={e => this.handleChange(e, key)}
    />
    <RaisedButton
      className="save-edit-btn"
      label="Delete Item"
      labelColor={'#ffffff'}
      backgroundColor="#D32F2F"
      onClick={() => this.props.deleteItem(key)}
    />
  </li>
);



<Card>
  <CardHeader
    title="URL Avatar"
    subtitle="Subtitle"
    avatar="images/jsa-128.jpg"
  />
  <CardMedia
    overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
  >
    <img src="images/nature-600-337.jpg" alt="" />
  </CardMedia>
  <CardTitle title="Card title" subtitle="Card subtitle" />
  
  <CardText>
  <TextField
  name="title"
  value={items.title}
  ref={input => (this.title = input)}
  floatingLabelText="Title"
  type="text"
  onChange={e => this.handleChange(e, key)}
/>
<br />
<TextField
  name="amount"
  value={items.amount}
  ref={input => (this.amount = input)}
  floatingLabelText="Amount"
  type="text"
  onChange={e => this.handleChange(e, key)}
/>
<br />
<TextField
  name="due"
  value={items.due}
  ref={input => (this.due = input)}
  floatingLabelText="Due Date"
  type="text"
  onChange={e => this.handleChange(e, key)}
/>
<br />
<TextField
  name="paid"
  value={items.paid}
  ref={input => (this.due = input)}
  floatingLabelText="Paid Date"
  type="text"
  onChange={e => this.handleChange(e, key)}
/>
<RaisedButton
  className="save-edit-btn"
  label="Delete Item"
  labelColor={'#ffffff'}
  backgroundColor="#D32F2F"
  onClick={() => this.props.deleteItem(key)}
/>
  </CardText>
  <CardActions>
    <FlatButton label="Action1" />
    <FlatButton label="Action2" />
  </CardActions>
</Card>