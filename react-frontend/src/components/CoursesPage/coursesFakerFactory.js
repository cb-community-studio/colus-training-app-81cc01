
import { faker } from "@faker-js/faker";
export default (count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
title: faker.commerce.productAdjective(),
datestart: faker.date.past(),
dateend: faker.date.future(),

        };
        data = [...data, fake];
    }
    return data;
};
