import { current } from "@reduxjs/toolkit";

export function getMockBots() {
    const statuses = ['Idle', 'Busy', 'Charging', 'Error'];

    function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return Array.from({ length: 10}, (_, i) => {
        const botStatus = statuses[randomInt(0, statuses.length - 1)];

        return {
            id: i + 1,
            name: `Bot ${i + 1}`,
            battery: randomInt(1, 100),
            speed: randomInt(1, 5),
            status: botStatus,
            currentTask: botStatus === 'Idle' ? null : `Task ${i + 1}`,
        }
    });
}