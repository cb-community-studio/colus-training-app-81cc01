
import { faker } from "@faker-js/faker";
export default (count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
topicstitle: faker.music.songName(),
topicrating: faker.datatype.number("10"),
comment: faker.lorem.lines(),

        };
        data = [...data, fake];
    }
    return data;
};
