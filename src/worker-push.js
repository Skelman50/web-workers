export default function() {
  this.addEventListener("message", e => {
    if (!e) return;
    const users = [];
    const userDetails = {
      name: "Jane Doe",
      email: "jane.doe@gmail.com",
      id: 1
    };
    for (let i = 0; i < 30000000; i++) {
      userDetails.id = i++;
      userDetails.dateJoined = Date.now();
      users.push(userDetails);
    }
    postMessage(users);
  });

  this.addEventListener(
    "exit",
    () => {
      process.exit(0);
    },
    false
  );
}
