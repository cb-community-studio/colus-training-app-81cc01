
import { faker } from "@faker-js/faker";
export default (count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
organization: faker.company.name(),
department: faker.commerce.department(),
mobile: faker.phone.number(),

        };
        data = [...data, fake];
    }
    return data;
};
