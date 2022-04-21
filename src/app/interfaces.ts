export interface User {
  id: {
    value: string;
  };
  gender : 'male' | 'female';
  name : {
    first: string;
    last: string;
  };
  email : string;
  dob: {
    age: number;
  };
  location: {
    street: {
      name: string;
      number: number;
    };
    city: string;
  };
  login: {
    username: string;
  };
  picture: {
    large: string;
  };
}