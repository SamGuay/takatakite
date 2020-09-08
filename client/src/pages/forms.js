import React from 'react';
import Panel from '../components/panel.js';
import TextFieldSimple from '../components/forms/textFields.js';
import TextFieldError from '../components/forms/textFieldsError.js';
import TextFieldCustomize from '../components/forms/textFieldsWithCustomStyle.js';
import SelectFieldSimple from '../components/forms/selectFields.js';
import SelectFieldLong from '../components/forms/selectFieldsLong.js';
import SelectFieldMultiSelect from '../components/forms/selectFieldMultiple.js';
import AutoCompleteSimple from '../components/forms/autoComplete.js';
import AutoCompleteDataSource from '../components/forms/autoCompleteDataSource.js';
import AutoCompleteControlled from '../components/forms/autoCompleteControlled.js';

const Forms = () => (
  <div className="row">
    <div className="col-md-6">
      <Panel title="Basic Text Fields">
        <TextFieldSimple />
      </Panel>
      <Panel title="Basic Select Fields">
        <SelectFieldSimple />
      </Panel>
      <Panel title="Auto Complete Fields">
        <AutoCompleteSimple />
      </Panel>
      <Panel title="Auto Complete Controlled">
        <AutoCompleteControlled />
      </Panel>
    </div>
    <div className="col-md-6">
      <Panel title="Text Fields With Errors">
        <TextFieldError />
      </Panel>
      <Panel title="Text Fields With Custom Colors">
        <TextFieldCustomize />
      </Panel>
      <Panel title="Select Field Long">
        <SelectFieldLong />
      </Panel>
      <Panel title="Select Field Multiselect">
        <SelectFieldMultiSelect />
      </Panel>

      <Panel title="Auto Complete Data Source">
        <AutoCompleteDataSource />
      </Panel>
    </div>

  </div>
);

export default Forms;

