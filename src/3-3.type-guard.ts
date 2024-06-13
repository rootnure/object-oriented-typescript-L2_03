{
  // type guards

  /* typeof --> type guard */

  type Alphanumeric = string | number;

  const add = (param1: Alphanumeric, param2: Alphanumeric): Alphanumeric => {
    if (typeof param1 === 'number' && typeof param2 === 'number') {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  }

  const result1 = add(2, 5);
  const result2 = add("2", "5");




  /* in --> type guard */

  type NormalUser = {
    name: string;
  }

  type AdminUser = {
    name: string;
    role: "admin"
  }

  const getUser = (user: NormalUser | AdminUser) => {
    if ('role' in user) {
      console.log(`${user.name} is an ${user.role}`);
    } else {
      console.log(`${user.name} is not an admin`);
    }
  }

  const normalUser: NormalUser = {
    name: 'Mr. Normal Bhai',
  };

  const adminUser: AdminUser = {
    name: 'Mr. Admin Bhai',
    role: 'admin',
  }

  getUser(adminUser);
  getUser(normalUser);





  // console.log({ result1, result2 });
  console.log({ normalUser, adminUser });
  //
}