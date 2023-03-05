import createUser from "./User";

test('createUser debe crear objeto correctamente', () => {
    const user = createUser('Sharon', 25);
    expect(user).toEqual({ name: 'Sharon', age: 25 });
});
