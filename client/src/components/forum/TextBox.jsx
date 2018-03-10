import React from 'react';
import TextField from 'material-ui/TextField';

const TextBoxForum = (props) => (

  <section className="forumTextBox-section">
    <div className="row">
      <div className="col-md-5">
        </div>
          <div id='Topics' className="col-md-3">
            <TextField
              floatingLabelText="Well this might just get intresting..."
              multiLine={true} />
          </div>
        <div className="col-md-3">
      </div>
    </div>
  </section>

);

export default TextBoxForum;
