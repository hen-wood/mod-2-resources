const { expect } = require('chai')

const Person = require('../class/user')

// let user

// beforeEach(() => {
//     user = new User('john doe')
// })

// describe('User Class', function () {
//     it('should create Successfully', function () {
//         expect(user).to.exist
//     })
//     it('should set Username on creation', function () {
//         expect(user.username).to.equal('john doe')
//     })
// })
describe("Person", () => {
    let alex;
    let num

    beforeEach(() => {
        alex = new Person("Alex", 'Eaton');
        num = true
    });

    afterEach(() => {
        alex = null;
    })

    describe("constructor", () => {
        it("should set the name property to the given name argument", () => {
            expect(alex.firstName).to.eq("Alex");
        });
    });
    describe('Constructor', () => {
        it('should have firstName and lastName properties', () => {
            expect(alex).to.have.all.keys('firstName', 'lastName')
        })
    })
    describe('Num', () => {
        it('shoulde equal true', () => {
            expect(num).to.be.true
        })
    })

});
