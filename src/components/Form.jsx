import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

const Form = ({
  onSendMessage,
  onChange,
  value
}) => (
  <form noValidate autoComplete="off" onSubmit={onSendMessage}>
    <TextField
      label="Message"
      fullWidth margin="normal"
      value={value}
      onChange={onChange}
    />
      <Button
        variant="contained"
        color="primary"
        endIcon={<Icon>send</Icon>}
        onClick={onSendMessage}
      >
        Send
      </Button>
  </form>
)

export default Form;
