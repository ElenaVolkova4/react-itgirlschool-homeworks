import React, { useState } from 'react';

//class PureComponent extends React.PureComponent {
//   state = {
//     item: {
//       count: 0,
//     },
//   };

//   handleClick = () => {
//     const item = this.state.item;
//     item.count = this.state.item.count++;
//     this.setState({ item });
//   };
//   render() {
//     return <h2>{this.state.item.count}</h2>;
//   }
// }
// export default PureComponent;

const Primer = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    rememberMe: false,
  });

  const { firstName, email, rememberMe } = formData;

  const updateFormData = event =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.checked,
    });

  return (
    <form>
      <input
        type="checkbox"
        // checked={formData.rememberMe}
        onChange={updateFormData}
        name="rememberMe"
      />
      <input
        value={firstName}
        onChange={e => updateFormData(e)}
        placeholder="First name"
        type="text"
        name="firstName"
        required
      />
      <input
        value={email}
        onChange={e => updateFormData(e)}
        placeholder="Email address"
        type="email"
        name="email"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Primer;
