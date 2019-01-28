const { prisma } = require('./generated/prisma-client');

// A `main` function so that we can use async/await
async function main() {
  //새유저
  // const newUser = await prisma.createUser({
  //   domain: 'tlshdtlr',
  //   email: 'tlshdtlr@hyunsik.com',
  //   address: 'tlshdtlrwkdwkd',
  // });
  //console.log(`Created new user: ${newUser.domain} (ID: ${newUser.id})`);
  //싱글 유저 찾기
  //const user = await prisma.user({ domain: '__USER_ID__' });
  //console.log(user);
  //전체 유저
  // Read all users from the database and print them to the console
  //const allUsers = await prisma.users();
  //console.log(allUsers);
  //해당 키워드 가진 리스트 지만 지금은 싱글 유저 찾기나 같음
  // const usersCalledAlice = await prisma.users({
  //   where: {
  //     domain: 'Alice',
  //   },
  // });
  //console.log(usersCalledAlice);
  //키워드로 찾아서 업데이트하기
  // const updatedUser = await prisma.updateUser({
  //   where: { domain: 'Alice' },
  //   data: { domain: 'xnxic' },
  // });
  // console.log(updatedUser);
  //키워드로 찾아서 삭제
  //const deletedUser = await prisma.deleteUser({ domain: 'xnxic' });
  //console.log(deletedUser);
}

main().catch(e => console.error(e));
