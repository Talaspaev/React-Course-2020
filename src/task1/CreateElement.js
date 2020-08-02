import React from 'react';

const CreateParagraphElement = React.createElement("p", null, "This is Element")

const CreateElement = React.createElement("div", null, CreateParagraphElement);

export default CreateElement;